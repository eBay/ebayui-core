import type { WithNormalizedProps } from "../../global";
export interface ListItem extends Omit<Marko.HTML.Div, `on${string}`> {
    as?: keyof Marko.NativeTags;
    separator?: boolean;
    leading?: Marko.AttrTag<Marko.HTML.Div>;
    trailing?: Marko.AttrTag<Marko.HTML.Div>;
}

interface ListInput extends Omit<Marko.HTML.Div, `on${string}`> {
    item?: Marko.AttrTag<ListItem>;
    "on-button-click"?: (event: { index: number }) => void;
}

export interface Input extends WithNormalizedProps<ListInput> {}

class List extends Marko.Component<Input> {}

export default List;
