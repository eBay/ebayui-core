import { WithNormalizedProps } from "../../../../global";

const colors = [4, 3, 2, 1];
const minLineWidth = 10;
const maxLineWidth = 40;
const staticLineSets = [
    [
        { color: 4, width: 25 },
        { color: 3, width: 15 },
        { color: 2, width: 35 },
        { color: 1, width: 25 },
    ],
    [
        { color: 4, width: 10 },
        { color: 3, width: 30 },
        { color: 2, width: 25 },
        { color: 1, width: 35 },
    ],
];
const staticLines = [...staticLineSets, ...staticLineSets];

interface ExpressiveLineAnimationInput {
    ariaLabel?: string;
    ariaDescribedby?: string;
    useReducedMotion: boolean;
}

interface State {
    useReducedMotion: boolean;
    staticLines: { color: number; width: number }[][];
}

export interface Input
    extends WithNormalizedProps<ExpressiveLineAnimationInput> {}

class ExpressiveLineAnimation extends Marko.Component<Input, State> {
    declare currColorIndex: number;
    declare linesContainer: Element;
    declare staticLines: { color: string; width: number }[][];

    onCreate(input: Input) {
        this.currColorIndex = 0;
        this.state = {
            staticLines: staticLines,
            useReducedMotion: input.useReducedMotion,
        };
    }

    onMount() {
        this.linesContainer = this.getEl("lines");
        if (!this.state.useReducedMotion) {
            this.addInitialLines();
            this.addLine();
        }
    }

    /**
     * When a line finishes animating in, add a new line
     * and remove one of the lines that has disappeared off screen
     */
    handleAnimationEnd({ animationName }: AnimationEvent) {
        if (animationName === "expressive-loader-scale-line-width") {
            if (this.linesContainer?.children.length > 8) {
                this.linesContainer.removeChild(
                    this.linesContainer.lastChild as Node,
                );
            }
            this.addLine();
        }
    }

    /**
     * Add the four initial lines, which are already at their final width
     */
    addInitialLines() {
        for (var i = 0; i < 4; i++) {
            this.addLine(true);
        }
    }

    /**
     * Add a new line to the animation
     * @param isInitial Whether this is one of the l
     * If false, the line will animate from 0 width to its final width.
     */
    addLine(isInitial?: boolean) {
        const line = document.createElement("div");

        // Set line styles
        const randomWidthPerc =
            Math.random() * (maxLineWidth - minLineWidth) + minLineWidth;
        const color = colors[this.currColorIndex];
        const classList = [
            "expressive-loader__line",
            `expressive-loader__line-${color}`,
        ];
        if (!isInitial) {
            classList.push("expressive-loader__line--scaling");
        }
        line.setAttribute("class", classList.join(" "));
        line.style.width = `${Math.floor(randomWidthPerc)}%`;

        line.addEventListener(
            "animationend",
            this.handleAnimationEnd.bind(this),
        );

        // Add line to the DOM
        this.linesContainer?.prepend(line);

        this.currColorIndex++;
        if (this.currColorIndex === colors.length) {
            this.currColorIndex = 0;
        }
    }
}

export default ExpressiveLineAnimation;
