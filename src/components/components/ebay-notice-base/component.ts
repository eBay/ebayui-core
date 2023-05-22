export interface Input
    extends Omit<Marko.Input<"section">, "title" | `on${string}`> {
    status?: "confirmation" | "celebration" | "attention" | "information";
    prefixClass?: string;
    root?: Marko.Renderable;
    noA11yLabel?: boolean;
    a11yRoleDescription?: string;
    icon?: "none";
    iconClass?: string;
    headerRoot?: Marko.Renderable;
    a11yText?: string;
    a11yIconText?: string;
    mainRoot?: Marko.Renderable;
    footer?: Marko.Renderable;
    a11yDismissText?: string;
    title?: Marko.Input<"title"> & {
        as?: Marko.Renderable;
    };
    cta?: Marko.Input<"a"> & {
        renderBody?: Marko.Renderable;
    };
    "on-dismiss"?: () => void;
    onDismiss?: this["on-dismiss"];
}

export default class extends Marko.Component<Input> {}
