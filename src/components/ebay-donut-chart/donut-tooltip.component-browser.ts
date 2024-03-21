import type { WithNormalizedProps } from "../../global";

interface DonutTooltipInput {
    name: string;
    tooltip?: string;
    value: string;
}

export interface Input extends WithNormalizedProps<DonutTooltipInput> {}

class DonutTooltip extends Marko.Component<Input> {}

export default DonutTooltip;
