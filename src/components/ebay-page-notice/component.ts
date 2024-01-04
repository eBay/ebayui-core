import type { WithNormalizedProps } from "../../global";
import type { Input as NoticeBaseInput } from "../components/ebay-notice-base/component";

interface PageNoticeInput
    extends Omit<NoticeBaseInput, "role" | "prefixClass" | `on${string}`> {
    dismissed?: boolean;
    "on-dismiss"?: () => void;
}

export interface Input extends WithNormalizedProps<PageNoticeInput> {}

interface State {
    dismissed: boolean;
}

class PageNotice extends Marko.Component<Input, State> {
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

export default PageNotice;
