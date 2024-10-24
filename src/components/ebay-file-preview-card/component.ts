import type { AttrString } from "marko/tags-html";
import { WithNormalizedProps } from "../../global";
import { MenuButtonEvent } from "../ebay-menu-button/component";

export interface FilePreviewCardEvent {
    file: File;
    menuAction: FilePreviewCardMenuAction;
    originalEvent: Event;
}

export type FilePreviewCardMenuAction = {
    event: string;
    label: string;
};

interface FilePreviewCardInput {
    "a11y-cancel-upload-text"?: AttrString;
    "delete-text"?: AttrString;
    file:
        | File
        | {
              name: string;
              type?: File["type"];
              src?: string;
          };
    status?: "uploading";
    "label-text"?: AttrString;
    "menu-actions"?: FilePreviewCardMenuAction[];
    "show-more"?: number;
    "a11y-show-more-text"?: AttrString;
    "on-menu-action"?: (name: string, event: MenuButtonEvent) => void;
    "on-show-more"?: () => void;
    "on-delete"?: () => void;
    "on-cancel"?: () => void;
}

export type Input = WithNormalizedProps<FilePreviewCardInput>;

class FilePreviewCard extends Marko.Component<Input> {
    handleMenuSelect(event: MenuButtonEvent) {
        const index = event.checked?.[0];
        const eventName =
            this.input.menuActions &&
            index !== undefined &&
            index in this.input.menuActions
                ? this.input.menuActions[index].event
                : null;
        if (eventName) {
            this.emit("menu-action", eventName, event);
        } else {
            this.emit("delete");
        }
    }
}

export default FilePreviewCard;
