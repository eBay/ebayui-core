import type { WithNormalizedProps } from "../../../global";

interface NoticeBaseInput
    extends Omit<Marko.Input<"section">, "title" | `on${string}`> {
    status?:
        | "confirmation"
        | "celebration"
        | "attention"
        | "information"
        | "education";
    type?: "section";
    "prefix-class"?: string;
    root?: Marko.Renderable;
    "no-a11y-label"?: boolean;
    "a11y-role-description"?: string;
    icon?: "none";
    "icon-class"?: string;
    "header-root"?: Marko.Renderable;
    "a11y-text"?: string;
    "a11y-icon-text"?: string;
    "main-root"?: Marko.Renderable;
    footer?: Marko.Renderable;
    "a11y-dismiss-text"?: string;
    title?: Marko.Input<"title"> & {
        as?: Marko.Renderable;
    };
    cta?: Marko.Input<"a"> & {
        renderBody?: Marko.Renderable;
    };
    "education-icon"?: Marko.Renderable;
    prominent?: boolean;
    "on-dismiss"?: () => void;
}

export interface Input extends WithNormalizedProps<NoticeBaseInput> {}

class NoticeBase extends Marko.Component<Input> {}

export default NoticeBase;
