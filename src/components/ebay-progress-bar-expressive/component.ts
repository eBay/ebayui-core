import { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import { useReducedMotion } from "../../common/dom";

export const messageDurationStandard = 1500;
export const messageDurationReducedMotionMultiplier = 1.5;
export const messageFadeInDuration = 833;

interface Message {
    renderBody: Marko.Body;
    duration?: number;
}

interface ProgressBarExpressiveInput
    extends Omit<Marko.HTML.Div, `on${string}`> {
    "a11y-text"?: AttrString;
    message?: Marko.AttrTag<Message>;
    size?: "medium" | "large";
}

export interface Input
    extends WithNormalizedProps<ProgressBarExpressiveInput> {}

interface State {
    isInitialMessage: boolean;
    messageIsFadingIn: boolean;
    currentMessageIndex: number;
    nextMessageIndex: number;
}

class ProgressBarExpressive extends Marko.Component<Input, State> {
    declare timeouts: { fadeIn?: NodeJS.Timeout; showMessage?: NodeJS.Timeout };
    declare fadeInFirstMessage: boolean;

    onCreate(input: Input) {
        // For medium sized text, display the first message immediately
        this.fadeInFirstMessage = input.size !== "medium";
        this.state = {
            isInitialMessage: true,
            messageIsFadingIn: false,
            currentMessageIndex: -1,
            nextMessageIndex: 0,
        };

        this.timeouts = { fadeIn: undefined, showMessage: undefined };
    }

    onInput(input: Input) {
        this.initializeMessageRotation(input.message);
    }

    onDestroy() {
        this.clearTimeouts();
    }

    clearTimeouts() {
        clearTimeout(this.timeouts.fadeIn);
        clearTimeout(this.timeouts.showMessage);
    }

    initializeMessageRotation(messages?: Marko.AttrTag<Message>) {
        const messageCount = [...(messages || [])].length;

        if (messageCount > 0) {
            // Ensure next message index is in new message array bounds
            if (this.state.nextMessageIndex >= messageCount) {
                this.state.nextMessageIndex = 0;
            }

            this.clearTimeouts();
            setTimeout(() => {
                this.state.isInitialMessage = false;
            }, messageDurationStandard);

            if (!this.fadeInFirstMessage) {
                // Automatically show first message (no delay or animation)
                this.showMessage(messages);
            } else if (useReducedMotion) {
                // In reduced motion mode, fade in first message immediately
                this.showMessage(messages, messageFadeInDuration);
            } else {
                // Fade in first message after a short delay
                setTimeout(
                    this.fadeInMessage.bind(this),
                    messageCount === 1
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
            (useReducedMotion ? messageDurationReducedMotionMultiplier : 1)
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
    showMessage(messageTags = this.input.message, extraDelay = 0) {
        const messages = [...(messageTags || [])];
        if (messageTags) {
            const messageCount = messages.length;
            if (messageCount > 1) {
                const currentIndex = this.state.nextMessageIndex;
                const nextIndex =
                    currentIndex === messageCount - 1 ? 0 : currentIndex + 1;

                // Show current message
                this.state.currentMessageIndex = currentIndex;
                this.state.messageIsFadingIn = false;

                // Queue next message
                this.state.nextMessageIndex = nextIndex;
                this.timeouts.fadeIn = setTimeout(
                    this.fadeInMessage.bind(this),
                    extraDelay +
                        this.getMessageDuration(
                            messages[currentIndex] as Message,
                        ),
                );
            } else {
                this.state.currentMessageIndex = 0;
                this.state.messageIsFadingIn = false;
            }
        }
    }
}

export default ProgressBarExpressive;
