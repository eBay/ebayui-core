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

export type FilePreviewCardFile =
    | File
    | {
          name: string;
          type?: File["type"];
          src?: string;
      };
interface FilePreviewCardInput extends Omit<Marko.HTML.Div, `on${string}`> {
    "a11y-cancel-upload-text"?: AttrString;
    "delete-text"?: AttrString;
    as?: keyof Marko.NativeTags;
    file?: FilePreviewCardFile;
    status?: "uploading";
    href?: string;
    "info-text"?: AttrString;
    "menu-actions"?: FilePreviewCardMenuAction[];
    action?: Marko.AttrTag<Marko.HTML.Button>;
    "see-more"?: number;
    "a11y-see-more-text"?: AttrString;
    "footer-title"?: AttrString;
    "footer-subtitle"?: AttrString;
    "on-menu-action"?: (name: string, event: MenuButtonEvent) => void;
    "on-see-more"?: () => void;
    "on-delete"?: () => void;
    "on-action"?: () => void;
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
