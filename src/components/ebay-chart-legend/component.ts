import type { WithNormalizedProps } from "../../global";

export interface LegendItem {
    name: string;
    value: number | string | undefined;
}

export interface ChartLegendInput {
    item: LegendItem[];
}

export interface Input extends WithNormalizedProps<ChartLegendInput> {}

class ChartLegend extends Marko.Component<Input> {}

export default ChartLegend;
