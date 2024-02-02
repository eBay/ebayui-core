import type { WithNormalizedProps } from "../../global";

export const messageDurationStandard = 1500;
export const messageDurationReducedMotion = 2500;
export const messageFadeInDuration = 833;
export const messageFadeOutDuration = 400;
export const messageDurationReducedMotionMultiplier = 1.5;
export const addLineDelay = 200;
export const defaultAriaLabel = "Loading...";

interface Message {
    text: string;
    duration?: number;
    delay?: number;
}

interface ExpressiveLoaderInput {
    messages?: Message[];
    size?: "medium" | "large";
    ariaLabel?: string;
    isLoading?: boolean;
}

export interface Input extends WithNormalizedProps<ExpressiveLoaderInput> {}

interface State {
    messages: Message[];
    messageIsFadingIn: boolean;
    currentMessageIndex: number;
    nextMessageIndex: number;
    isFirstMessage: boolean;
    isLoading: boolean;
    useReducedMotion: boolean;
}

class ExpressiveLoader extends Marko.Component<Input, State> {
    declare timeouts: { fadeIn?: NodeJS.Timeout; showMessage?: NodeJS.Timeout };
    declare animateFirstMessage: boolean;

    onCreate(input: Input) {
        const messages = input.messages || [];
        const useReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        this.animateFirstMessage = input.size !== "medium";
        this.state = {
            messages: messages,
            messageIsFadingIn: false,
            currentMessageIndex: -1,
            nextMessageIndex: 0,
            isFirstMessage: true,
            isLoading: !(input.isLoading === false),
            useReducedMotion: useReducedMotion,
        };

        this.timeouts = { fadeIn: undefined, showMessage: undefined };
    }

    onInput(input: Input) {
        if (input.isLoading !== this.state.isLoading) {
            this.state.isLoading = !(input.isLoading === false);
        }
    }

    clearTimeouts() {
        clearTimeout(this.timeouts.fadeIn);
        clearTimeout(this.timeouts.showMessage);
    }

    onMount() {
        if (this.state.isLoading && this.state.messages.length > 0) {
            this.clearTimeouts();
            setTimeout(() => {
                this.state.isFirstMessage = false;
            }, messageDurationStandard);

            if (!this.animateFirstMessage) {
                // Immediately show first message
                this.showMessage();
            } else if (this.state.useReducedMotion) {
                // Fade in first message immediately
                this.showMessage(messageFadeInDuration);
            } else {
                // Fade in first message after a short delay
                setTimeout(
                    this.fadeInMessage.bind(this),
                    this.state.messages.length === 1
                        ? messageDurationStandard / 2
                        : messageDurationStandard,
                );
            }
        }
    }

    /**
     * Show a message and queue the next one
     */
    showMessage(delay = 0) {
        if (this.state.messages.length > 1) {
            const currentIndex = this.state.nextMessageIndex;
            const nextIndex =
                currentIndex === this.state.messages.length - 1
                    ? 0
                    : currentIndex + 1;
            this.state.messageIsFadingIn = false;
            this.state.currentMessageIndex = currentIndex;
            this.state.nextMessageIndex = nextIndex;
            this.queueNextMessage(delay);
        } else {
            this.state.messageIsFadingIn = false;
            this.state.currentMessageIndex = 0;
        }
    }

    fadeInMessage() {
        this.state.messageIsFadingIn = true;
        this.timeouts.showMessage = setTimeout(
            this.showMessage.bind(this),
            messageFadeInDuration,
        );
    }

    /**
     * How long a message should display.
     * Displays longer when user prefers reduced motion.
     * @returns time in milliseconds
     */
    getMessageDuration(message?: Message) {
        return (
            (message?.duration || messageDurationStandard) *
            (this.state.useReducedMotion
                ? messageDurationReducedMotionMultiplier
                : 1)
        );
    }

    queueNextMessage(delay = 0) {
        const nextMessageDelay =
            delay +
            this.getMessageDuration(
                this.state.messages[this.state.currentMessageIndex],
            );
        this.timeouts.fadeIn = setTimeout(
            this.fadeInMessage.bind(this),
            nextMessageDelay,
        );
    }
}

export default ExpressiveLoader;
