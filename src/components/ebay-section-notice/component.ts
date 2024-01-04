import type { Input as NoticeBaseInput } from "../components/ebay-notice-base/component";
import type { WithNormalizedProps } from "../../global";

interface SectionNoticeInput
    extends Omit<
        NoticeBaseInput,
        "role" | "prefixClass" | "mainRoot" | `on${string}`
    > {
    dismissed?: boolean;
    "on-dismiss"?: () => void;
}

export interface Input extends WithNormalizedProps<SectionNoticeInput> {}

interface State {
    dismissed: boolean;
}

class SectionNotice extends Marko.Component<Input, State> {
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

export default SectionNotice;
