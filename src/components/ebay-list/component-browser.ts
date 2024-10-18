import type { WithNormalizedProps } from "../../global";
export interface ListItem extends Omit<Marko.Input<"item">, `on${string}`> {
    leading?: Marko.AttrTag<Marko.Input<"div">>;
    trailing?: Marko.AttrTag<Marko.Input<"div">>;
}

interface ListInput extends Omit<Marko.Input<"div">, `on${string}`> {
    items?: Marko.RepeatableAttrTag<ListItem>;
    separator?: boolean;
    "on-button-click"?: (event: {index: number}) => void;
}

export interface Input extends WithNormalizedProps<ListInput> {}

class List extends Marko.Component<Input> {}

export default List;
