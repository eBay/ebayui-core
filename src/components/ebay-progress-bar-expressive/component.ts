import { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";

export const messageDurationStandard = 1500;
export const messageDurationReducedMotionMultiplier = 1.5;
export const messageFadeInDuration = 833;

interface Message {
    text: string;
    duration?: number;
}

interface ProgressBarExpressiveInput
    extends Omit<Marko.Input<"div">, `on${string}`> {
    "a11y-text"?: AttrString;
    messages?: Marko.RepeatableAttrTag<Message>;
    size?: "medium" | "large";
}

export interface Input
    extends WithNormalizedProps<ProgressBarExpressiveInput> {}

interface State {
    messages: Message[];
    messageIsFadingIn: boolean;
    currentMessageIndex: number;
    nextMessageIndex: number;
    isInitialMessage: boolean;
    useReducedMotion: boolean;
}

class ProgressBarExpressive extends Marko.Component<Input, State> {
    declare timeouts: { fadeIn?: NodeJS.Timeout; showMessage?: NodeJS.Timeout };
    declare fadeInFirstMessage: boolean;

    onCreate(input: Input) {
        const messages = (input.messages as Message[]) || [];
        const useReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // For medium sized text, display the first message immediately
        this.fadeInFirstMessage = input.size !== "medium";
        this.state = {
            messages: messages,
            messageIsFadingIn: false,
            currentMessageIndex: -1,
            nextMessageIndex: 0,
            isInitialMessage: true,
            useReducedMotion: useReducedMotion,
        };

        this.timeouts = { fadeIn: undefined, showMessage: undefined };
    }

    onInput(input: Input) {
        this.state.messages = (input.messages as Message[]) || [];
        if (this.state.nextMessageIndex >= this.state.messages.length) {
            this.state.nextMessageIndex = 0;
        }

        this.initializeMessageRotation();
    }

    onDestroy() {
        this.clearTimeouts();
    }

    clearTimeouts() {
        clearTimeout(this.timeouts.fadeIn);
        clearTimeout(this.timeouts.showMessage);
    }

    initializeMessageRotation() {
        if (this.state.messages.length > 0) {
            this.clearTimeouts();
            setTimeout(() => {
                this.state.isInitialMessage = false;
            }, messageDurationStandard);

            if (!this.fadeInFirstMessage) {
                // Automatically show first message (no delay or animation)
                this.showMessage();
            } else if (this.state.useReducedMotion) {
                // In reduced motion mode, fade in first message immediately
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
     * Determine how long a message should display.
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

    /**
     * Animate in a message, queuing up the next one
     */
    fadeInMessage() {
        this.state.messageIsFadingIn = true;
        this.timeouts.showMessage = setTimeout(
            this.showMessage.bind(this),
            messageFadeInDuration,
        );
    }

    /**
     * Display a message and queue the next one
     */
    showMessage(extraDelay = 0) {
        if (this.state.messages.length > 1) {
            const currentIndex = this.state.nextMessageIndex;
            const nextIndex =
                currentIndex === this.state.messages.length - 1
                    ? 0
                    : currentIndex + 1;

            // Show current message
            this.state.currentMessageIndex = currentIndex;
            this.state.messageIsFadingIn = false;

            // Queue next message
            this.state.nextMessageIndex = nextIndex;
            this.timeouts.fadeIn = setTimeout(
                this.fadeInMessage.bind(this),
                extraDelay +
                    this.getMessageDuration(this.state.messages[currentIndex]),
            );
        } else {
            this.state.currentMessageIndex = 0;
            this.state.messageIsFadingIn = false;
        }
    }
}

export default ProgressBarExpressive;
