import type { Input as NoticeBaseInput } from "../components/ebay-notice-base/component";
import type { WithNormalizedProps } from "../../global";

interface EducationNoticeInput
    extends Omit<
        NoticeBaseInput,
        "role" | "prefixClass" | "mainRoot" | `on${string}`
    > {
    dismissed?: boolean;
    "on-dismiss"?: () => void;
    variant?: "none" | "prominent";
    "icon-variant"?: "none" | "prominent";
}

export interface Input extends WithNormalizedProps<EducationNoticeInput> {}

interface State {
    dismissed: boolean;
}

class EducationNotice extends Marko.Component<Input, State> {
    onCreate() {
        this.state = { dismissed: false };
    }

    onInput(input: Input) {
        this.state = { dismissed: input.dismissed || false };
    }

    onDismiss() {
        this.state.dismissed = true;
        this.emit("dismiss");
    }
}

export default EducationNotice;
