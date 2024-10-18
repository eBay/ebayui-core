import type { WithNormalizedProps } from "../../global";
export interface Item extends Omit<Marko.Input<"item">, `on${string}`> {
    leading?: Marko.RepeatableAttrTag<any>
    trailing?: Marko.RepeatableAttrTag<any>
    "on-click"?: (event: {index: number}) => void;
}

interface ListInput extends Omit<Marko.Input<"div">, `on${string}`> {
    items?: Marko.RepeatableAttrTag<Item>;
    separator?: boolean;
}

export interface Input extends WithNormalizedProps<ListInput> {}

class List extends Marko.Component<Input> {}

export default List;
