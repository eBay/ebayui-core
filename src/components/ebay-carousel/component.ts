import focusables from "makeup-focusables";
import type { AttrClass, AttrString, AttrStyle } from "marko/tags-html";
// TODO check carousel
import { resizeUtil } from "../../common/event-utils";
import { processHtmlAttributes } from "../../common/html-attributes";
import { onScrollDebounced as onScroll } from "./utils/on-scroll-debounced";
import { scrollTransition } from "./utils/scroll-transition";
import type { WithNormalizedProps } from "../../global";
import { useReducedMotion } from "../../common/dom";

type Direction = typeof LEFT | typeof RIGHT;
// Used for carousel slide direction.
const LEFT = -1;
const RIGHT = 1;

interface Item {
    htmlAttributes?: Marko.HTML.LI;
    key?: string;
    class?: AttrClass;
    style?: AttrStyle;
    transform?: string;
    fullyVisible?: boolean;
    renderBody?: Marko.Body;
}

interface CarouselInput {
    item?: Marko.AttrTag<Item>;
    gap?: number | string;
    index?: number | string;
    "items-per-slide"?: number | string;
    autoplay?: number | string | boolean;
    "image-treatment"?: "none" | "matte";
    "hidden-scrollbar"?: boolean;
    paused?: boolean;
    "no-peek"?: boolean;
    class?: AttrClass;
    style?: AttrStyle;
    "a11y-previous-text"?: AttrString;
    "a11y-next-text"?: AttrString;
    "a11y-pause-text"?: AttrString;
    "a11y-play-text"?: AttrString;
    "aria-roledescription"?: string;
    "on-move"?: (event: { visibleIndexes: number[] }) => void;
    "on-scroll"?: (event: { index: number }) => void;
    "on-slide"?: (event: { slide: number; originalEvent: Event }) => void;
    "on-next"?: (event: { originalEvent: Event }) => void;
    "on-previous"?: (event: { originalEvent: Event }) => void;
    "on-play"?: (event: { originalEvent: Event }) => void;
    "on-pause"?: (event: { originalEvent: Event }) => void;
}

export interface Input extends WithNormalizedProps<CarouselInput> {}

interface State {
    htmlAttributes: Record<string, string>;
    classes: AttrClass;
    style: AttrStyle;
    config: {
        preserveItems?: boolean;
        nativeScrolling?: boolean;
        offsetOverride?: number;
        scrollTransitioning?: boolean;
    };
    items: (Item & {
        left?: number;
        right?: number;
    })[];
    index: number;
    slideWidth: number;
    gap: number;
    itemsPerSlide: number;
    autoplayInterval: number;
    paused: boolean;
    interacting: boolean;
    bothControlsDisabled: boolean;
    peek: number;
    a11yPreviousText: string;
    a11yNextText: string;
    a11yPauseText: string;
    a11yPlayText: string;
    ariaRoleDescription: string;
}

class Carousel extends Marko.Component<Input, State> {
    declare autoplayTimeout: ReturnType<typeof setTimeout>;
    declare interactionEndTimeout: ReturnType<typeof setTimeout>;
    declare renderFrame: number;
    declare focusFrame: number;
    declare cancelScrollTransition?: ReturnType<typeof scrollTransition>;
    declare skipScrolling: boolean;
    declare isMoving: boolean;
    declare listEl: HTMLElement;
    declare nextEl: HTMLElement;
    declare containerEl: HTMLElement;

    cleanupAsync() {
        clearTimeout(this.autoplayTimeout);
        cancelAnimationFrame(this.renderFrame);
        cancelAnimationFrame(this.focusFrame);

        if (this.cancelScrollTransition) {
            this.cancelScrollTransition();
            this.cancelScrollTransition = undefined;
        }
    }

    emitUpdate() {
        const { config, items } = this.state;
        config.scrollTransitioning = false;
        this.emit("move", {
            visibleIndexes: items
                .filter(({ fullyVisible }) => fullyVisible)
                .map((item) => items.indexOf(item)),
        });
    }

    handleScroll(scrollLeft: number) {
        const { state } = this;
        const { config, items, gap } = state;
        let closest: number;

        if (scrollLeft >= this.getMaxOffset(state) - gap) {
            closest = items.length - 1;
        } else {
            // Find the closest item using a binary search on each carousel slide.
            const itemsPerSlide = state.itemsPerSlide || 1;
            const totalItems = items.length;
            let low = 0;
            let high = Math.ceil(totalItems / itemsPerSlide) - 1;

            while (high - low > 1) {
                const mid = Math.floor((low + high) / 2);
                if (scrollLeft > items[mid * itemsPerSlide].left!) {
                    low = mid;
                } else {
                    high = mid;
                }
            }

            const deltaLow = Math.abs(
                scrollLeft - items[low * itemsPerSlide].left!,
            );
            const deltaHigh = Math.abs(
                scrollLeft - items[high * itemsPerSlide].left!,
            );
            closest = this.normalizeIndex(
                state,
                (deltaLow > deltaHigh ? high : low) * itemsPerSlide,
            );
        }

        if (state.index !== closest) {
            this.skipScrolling = true;
            config.preserveItems = true;
            this.setState("index", closest);
            this.emit("scroll", { index: closest });
        }
    }

    getOffset(state: State): number {
        const { items, index } = state;
        if (!items.length) {
            return 0;
        }
        return Math.min(items[index].left!, this.getMaxOffset(state)) || 0;
    }

    getMaxOffset({ items, slideWidth }: State) {
        if (!items.length) {
            return 0;
        }
        return Math.max(items[items.length - 1].right! - slideWidth, 0) || 0;
    }

    getSlide({ index, itemsPerSlide }: State, i: number = index) {
        if (!itemsPerSlide) {
            return;
        }

        return Math.ceil(i / itemsPerSlide);
    }

    normalizeIndex({ items, itemsPerSlide }: State, index: number) {
        if (index > 0) {
            let result = index;
            result %= items.length || 1; // Ensure index is within bounds.
            result -= result % (itemsPerSlide || 1); // Round index to the nearest valid slide index.
            result = Math.abs(result); // Ensure positive value.
            return result;
        }

        return 0;
    }

    isAnimating(state: State) {
        const { items, index } = state;
        if (!items.length) {
            return false;
        }
        const currentItem = items[index];
        return (
            currentItem.left === undefined || currentItem.right === undefined
        );
    }

    getNextIndex(state: State, delta: Direction): number {
        const { index, items, slideWidth, itemsPerSlide } = state;
        let i = index;
        let item: State["items"][number];

        // If going backward from 0, we go to the end.
        if (delta === LEFT && i === 0) {
            i = items.length - 1;
        } else {
            // Find the index of the next item that is not fully in view.
            do {
                item = items[(i += delta)];
            } while (item && item.fullyVisible);

            if (delta === LEFT && !itemsPerSlide) {
                // If going left without items per slide, go as far left as possible while keeping this item fully in view.
                const targetOffset = item.right! - slideWidth;
                do {
                    item = items[--i];
                } while (item && item.left! >= targetOffset);
                i += 1;
            }
        }

        return this.normalizeIndex(state, i);
    }

    getTemplateData(state: State) {
        const {
            config,
            autoplayInterval,
            items,
            itemsPerSlide,
            slideWidth,
            gap,
        } = state;
        const hasOverride = config.offsetOverride !== undefined;
        const isSingleSlide = items.length <= itemsPerSlide;
        state.index = this.normalizeIndex(state, state.index);

        const offset = this.getOffset(state);
        const prevControlDisabled =
            isSingleSlide || (!autoplayInterval && offset === 0);
        const nextControlDisabled =
            isSingleSlide ||
            (!autoplayInterval && offset === this.getMaxOffset(state));
        // If left/right is undefined, the carousel is moving at that moment. We should keep the old disabled state
        const bothControlsDisabled = this.isAnimating(state)
            ? state.bothControlsDisabled
            : prevControlDisabled && nextControlDisabled;
        let slide: number | undefined,
            itemWidth: string,
            totalSlides: number | undefined;

        if (itemsPerSlide) {
            const itemsInSlide = itemsPerSlide + state.peek;
            slide = this.getSlide(state);
            itemWidth = `calc(${100 / itemsInSlide}% - ${
                ((itemsInSlide - 1) * gap) / itemsInSlide
            }px)`;
            totalSlides = this.getSlide(state, items.length);
        }

        items.forEach((item, i) => {
            const { style, transform } = item;
            const marginRight = i !== items.length - 1 && `${gap}px`;

            // Account for users providing a style string or object for each item.
            if (typeof style === "string") {
                item.style = `${style};flex-basis:${itemWidth};margin-right:${marginRight};`;
                if (transform) item.style += `transform:${transform}`;
            } else {
                item.style = Object.assign({}, style, {
                    width: itemWidth,
                    "margin-right": marginRight,
                    transform,
                });
            }

            item.fullyVisible =
                item.left === undefined ||
                (item.left - offset >= -0.01 &&
                    item.right! - offset <= slideWidth + 0.01);
        });

        const data = Object.assign({}, state, {
            items,
            slide,
            offset: hasOverride ? config.offsetOverride : offset,
            disableTransition: hasOverride,
            totalSlides,
            prevControlDisabled,
            nextControlDisabled,
            bothControlsDisabled,
        });

        return data;
    }

    move(delta: Direction) {
        const { state } = this;
        const {
            index,
            items,
            itemsPerSlide,
            autoplayInterval,
            slideWidth,
            gap,
            peek,
            config,
        } = state;
        const nextIndex = this.getNextIndex(state, delta);
        let offsetOverride: number | undefined;

        config.preserveItems = true;
        this.isMoving = true;
        this.skipScrolling = false;

        // When we are in autoplay mode we overshoot the desired index to land on a clone
        // of one of the ends. Then after the transition is over we update to the proper position.
        if (autoplayInterval) {
            if (delta === RIGHT && nextIndex < index) {
                // Transitions to one slide before the beginning.
                offsetOverride = -slideWidth - gap;

                // Move the items in the last slide to be before the first slide.
                for (let i = Math.ceil(itemsPerSlide + peek); i--; ) {
                    const item = items[items.length - i - 1];
                    item.transform = `translateX(${
                        (this.getMaxOffset(state) + slideWidth + gap) * -1
                    }px)`;
                }
            } else if (delta === LEFT && nextIndex > index) {
                // Transitions one slide past the end.
                offsetOverride = this.getMaxOffset(state) + slideWidth + gap;

                // Moves the items in the first slide to be after the last slide.
                for (let i = Math.ceil(itemsPerSlide + peek); i--; ) {
                    const item = items[i];
                    item.transform = `translateX(${
                        this.getMaxOffset(state) + slideWidth + gap
                    }px)`;
                }
            }

            config.offsetOverride = offsetOverride;
        }

        this.setState("index", nextIndex);
        this.once("move", () => {
            this.isMoving = false;

            if (offsetOverride !== undefined) {
                // If we are in autoplay mode and went outside of the normal offset
                // We make sure to restore all of the items that got moved around.
                items.forEach((item) => {
                    item.transform = undefined;
                });
            }
        });

        return nextIndex;
    }

    handleMove(direction: Direction, originalEvent: MouseEvent) {
        if (this.isMoving) {
            return;
        }
        const { state } = this;
        const nextIndex = this.move(direction);
        const slide = this.getSlide(state, nextIndex)!;
        this.emit("slide", { slide: slide + 1, originalEvent });
        this.emit(`${direction === 1 ? "next" : "previous"}`, {
            originalEvent,
        });
    }

    handleStartInteraction() {
        this.setState("interacting", true);
    }

    handleEndInteraction() {
        // In case the user moves the cursor out of the carousel before the transition is over.
        // We need to make sure the carousel does not rerender in the middle of the transition.
        clearTimeout(this.interactionEndTimeout);
        if (!this.isMoving) {
            this.setState("interacting", false);
        } else if (this.state.interacting) {
            this.interactionEndTimeout = setTimeout(() => {
                this.handleEndInteraction();
            }, 100);
        }
    }

    togglePlay(originalEvent: MouseEvent) {
        const {
            state: { config, paused },
        } = this;
        config.preserveItems = true;
        this.setState("paused", !paused);
        if (paused && !this.isMoving) {
            this.move(RIGHT);
        }
        this.emit(`${paused ? "play" : "pause"}`, { originalEvent });
    }

    onInput(input: Input) {
        const gap = parseInt(input.gap as any, 10);
        const state = {
            htmlAttributes: processHtmlAttributes(input, [
                "class",
                "style",
                "index",
                "type",
                "slide",
                "gap",
                "autoplay",
                "paused",
                "itemsPerSlide",
                "a11yPreviousText",
                "a11yNextText",
                "a11yPlayText",
                "a11yPauseText",
                "item",
                "hiddenScrollbar",
            ]),
            classes: [
                "carousel",
                input.hiddenScrollbar && "carousel--hidden-scrollbar",
                input.class,
            ],
            style: input.style,
            config: {}, // A place to store values that should not trigger an update by themselves.
            gap: isNaN(gap) ? 16 : gap,
            index: parseInt(input.index as any, 10) || 0,
            itemsPerSlide: parseFloat(input.itemsPerSlide as any) || 0,
            a11yPreviousText: input.a11yPreviousText || "Previous Slide",
            a11yNextText: input.a11yNextText || "Next Slide",
            a11yPauseText: input.a11yPauseText || "Pause",
            a11yPlayText: input.a11yPlayText || "Play",
            ariaRoleDescription: input["aria-roledescription"] || "Carousel",
            items: [] as State["items"],
            slideWidth: 0,
            autoplayInterval: 0,
            paused: false as boolean,
            peek: 0,
            interacting: false,
            bothControlsDisabled: false,
        } satisfies State;

        const itemSkippedAttributes = ["class", "style", "key"];
        const { itemsPerSlide } = state;
        if (itemsPerSlide) {
            state.peek = itemsPerSlide % 1;
            state.itemsPerSlide = itemsPerSlide - state.peek;
            state.classes.push("carousel--slides");

            if (!state.peek && !input.autoplay && !input.noPeek) {
                state.peek = 0.1;
            }

            if (state.peek) {
                state.classes.push("carousel--peek");
            }

            // Only allow autoplay option for discrete carousels.
            if (input.autoplay) {
                const isSingleSlide =
                    (input.item as Item[])?.length <= itemsPerSlide;
                state.autoplayInterval =
                    parseInt(input.autoplay as any, 10) || 4000;
                state.classes.push("carousel__autoplay");
                state.paused = !!(isSingleSlide || input.paused); // Force paused state if not enough slides provided;
                state.interacting = false;
            }
        }

        state.items = ((input.item as Item[]) || []).map((item, i) => {
            const isStartOfSlide = state.itemsPerSlide
                ? i % state.itemsPerSlide === 0
                : true;
            return {
                htmlAttributes: processHtmlAttributes(
                    item,
                    itemSkippedAttributes,
                ),
                class: isStartOfSlide
                    ? ["carousel__snap-point", item.class]
                    : item.class,
                key: item.key || i.toString(),
                style: item.style,
                renderBody: item.renderBody,
            };
        });

        this.skipScrolling = this.state && this.state.index === state.index;
        this.state = state;
    }

    onRender() {
        if (typeof window !== "undefined") {
            this.cleanupAsync();
        }
    }

    onMount() {
        const { config } = this.state;
        this.listEl = this.getEl("list");
        this.nextEl = this.getEl("next");
        this.containerEl = this.getEl("container");
        this.subscribeTo(resizeUtil).on("resize", () => {
            this.cleanupAsync();
            this.onRenderLegacy();
        });
        this.skipScrolling = false;

        // If user had reduced motion turned on in OS settings, pause autoplay.
        if (useReducedMotion) {
            this.state.paused = true;
        }

        if (isNativeScrolling(this.listEl)) {
            config.nativeScrolling = true;
            this.once(
                "destroy",
                onScroll(this.listEl, () => {
                    if (!config.scrollTransitioning) {
                        this.handleScroll(this.listEl.scrollLeft);
                    }
                }),
            );
        } else {
            this.subscribeTo(this.listEl).on("transitionend", ({ target }) => {
                if (target === this.listEl) {
                    this.emitUpdate();
                }
            });
        }
        this.onRenderLegacy();

        document.fonts.ready.then(() => {
            this.cleanupAsync();
            this.onRenderLegacy();
        });
    }

    onUpdate() {
        this.onRenderLegacy();
    }

    onDestroy() {
        this.cleanupAsync();
    }

    onRenderLegacy() {
        const { containerEl, listEl, state } = this;
        const { config, items, autoplayInterval, paused, interacting } = state;

        // Do nothing for empty carousels.
        if (!items.length) {
            return;
        }

        // Force a rerender to start the offset override animation.
        if (config.offsetOverride) {
            config.offsetOverride = undefined;
            this.renderFrame = requestAnimationFrame(() =>
                this.setStateDirty(undefined as any),
            );
            return;
        }

        // Track if we are on a normal render or a render caused by recalculating.
        if (config.preserveItems) {
            config.preserveItems = false;

            // Ensure only visible items within the carousel are focusable.
            // We don't have access to these items in the template so me must update manually.
            this.focusFrame = requestAnimationFrame(() => {
                forEls(listEl, (itemEl) => {
                    focusables(itemEl).forEach(
                        itemEl.getAttribute("aria-hidden") !== "true"
                            ? // Default the child tabindex to data-carousel-tabindex if it exists, or remove it
                              (child: HTMLElement) =>
                                  child.hasAttribute("data-carousel-tabindex")
                                      ? child.setAttribute(
                                            "tabindex",
                                            child.getAttribute(
                                                "data-carousel-tabindex",
                                            ) ?? "-1",
                                        )
                                      : child.removeAttribute("tabindex")
                            : (child: HTMLElement) =>
                                  child.setAttribute("tabindex", "-1"),
                    );
                });
            });

            if (config.nativeScrolling) {
                if (this.skipScrolling) {
                    this.emitUpdate();
                } else {
                    const offset = this.getOffset(state);
                    if (offset !== listEl.scrollLeft) {
                        // Animate to the new scrolling position and emit update events afterward.
                        config.scrollTransitioning = true;
                        this.cancelScrollTransition = scrollTransition(
                            listEl,
                            offset,
                            this.emitUpdate.bind(this),
                        );
                    } else if (this.isMoving) {
                        // Animate to the new scrolling position and emit update events afterward.
                        config.scrollTransitioning = true;
                        this.cancelScrollTransition = scrollTransition(
                            listEl,
                            this.getOffset(state),
                            this.emitUpdate.bind(this),
                        );
                    }
                }
            }

            if (autoplayInterval && !paused && !interacting) {
                const moveRight = this.move.bind(this, RIGHT);
                this.autoplayTimeout = setTimeout(() => {
                    if (this.isMoving) {
                        return this.once("move", moveRight);
                    }
                    moveRight();
                }, autoplayInterval);
            }

            return;
        }

        // Otherwise recalculates the items / slide sizes.
        this.renderFrame = requestAnimationFrame(() => {
            const { width: containerWidth } =
                containerEl.getBoundingClientRect();
            const { left: currentLeft } = (
                listEl.firstElementChild as HTMLElement
            ).getBoundingClientRect();

            this.setStateDirty("slideWidth", containerWidth);
            config.preserveItems = true;
            config.nativeScrolling = isNativeScrolling(listEl);

            // Update item positions in the dom.
            forEls(listEl, (itemEl, i) => {
                const item = items[i];
                const { left, right } = itemEl.getBoundingClientRect();
                item.left = left - currentLeft;
                item.right = right - currentLeft;
            });
        });
    }
}

/**
 * Checks if an element is using native scrolling
 */
function isNativeScrolling(el: HTMLElement) {
    return getComputedStyle(el).overflowX !== "visible";
}

/**
 * Calls a function on each element within a parent element
 */
function forEls(parent: HTMLElement, fn: (el: HTMLElement, i: number) => any) {
    let i = 0;
    let child = parent.firstElementChild as HTMLElement;
    while (child) {
        fn(child, i++);
        child = child.nextElementSibling as HTMLElement;
    }
}

export default Carousel;
