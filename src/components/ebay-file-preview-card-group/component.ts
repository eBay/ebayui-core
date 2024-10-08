import { WithNormalizedProps } from "../../global";
import type {
    FilePreviewCardEvent,
    Input as FilePreviewCardInput,
} from "../ebay-file-preview-card/component";

interface FilePreviewCardGroupInput {
    card?: Marko.RepeatableAttrTag<FilePreviewCardInput>;
    "a11y-cancel-upload-text"?: FilePreviewCardInput["a11y-cancel-upload-text"];
    "delete-text"?: FilePreviewCardInput["delete-text"];
    "menu-actions"?: FilePreviewCardInput["menu-actions"];
    "a11y-show-more-text"?: FilePreviewCardInput["a11y-show-more-text"];
    "on-menu-action"?: (index: number, event: FilePreviewCardEvent) => void;
    "on-delete"?: (index: number) => void;
    "on-cancel"?: (index: number) => void;
}

export type Input = WithNormalizedProps<FilePreviewCardGroupInput>;

export interface State {
    showing: number;
}

const SHOW_AMOUNT = 15;

class FilePreviewCardGroup extends Marko.Component<Input, State> {
    onCreate() {
        this.state = { showing: SHOW_AMOUNT };
    }

    showMore() {
        this.state.showing += SHOW_AMOUNT;
    }
}

export default FilePreviewCardGroup;
