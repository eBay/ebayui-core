import type { WithNormalizedProps } from "../../global";

interface Donut {
    name: string;
    tooltip?: string;
    value: string;
}

export interface Input extends WithNormalizedProps<Donut> {}

class DonutTooltip extends Marko.Component<Input> {}

export default DonutTooltip;
