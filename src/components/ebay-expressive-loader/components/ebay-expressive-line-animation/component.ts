const colors = ["green", "yellow", "blue", "red"];
const minLineWidth = 10;
const maxLineWidth = 40;
const staticLineSets = [
    [
        { color: "green", width: 25 },
        { color: "yellow", width: 15 },
        { color: "blue", width: 35 },
        { color: "red", width: 25 },
    ],
    [
        { color: "green", width: 10 },
        { color: "yellow", width: 30 },
        { color: "blue", width: 25 },
        { color: "red", width: 35 },
    ],
];
const staticLines = [...staticLineSets, ...staticLineSets];

interface Input {
    ariaLabel?: string;
    ariaDescribedby?: string;
    useReducedMotion: boolean;
}

interface State {
    useReducedMotion: boolean;
    staticLines: { color: string; width: number }[][];
}

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
            "expressive-line-animation__line",
            `expressive-line-animation__line--${color}`,
        ];
        if (!isInitial) {
            classList.push("expressive-line-animation__line--animated");
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
