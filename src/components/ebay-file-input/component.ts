import type { WithNormalizedProps } from "../../global";

export interface FileInputEvent {
    files: FileList;
    originalEvent: Event;
}

interface FileInputInput
    extends Omit<Marko.HTML.Input, `on${string}` | "type"> {
    renderBody?: Marko.Body;
    header?: Marko.AttrTag<
        Marko.Input<`h${number}`> & {
            as?: `h${number}`;
        }
    >;
    subheader?: Marko.AttrTag<Marko.HTML.Span>;
    "on-input"?: (event: FileInputEvent) => void;
}

export interface Input extends WithNormalizedProps<FileInputInput> {}

export interface State {
    dragging: boolean;
}

class FileUploadInput extends Marko.Component<Input, State> {
    onCreate() {
        this.state = { dragging: false };
    }

    handleFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.emit("input", { files: target.files, originalEvent: event });
    }

    handleDragOver() {
        this.state.dragging = true;
    }

    handleDragLeave() {
        this.state.dragging = false;
    }
}

export default FileUploadInput;
