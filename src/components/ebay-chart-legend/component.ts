import type { WithNormalizedProps } from "../../global";

export interface LegendItem {
    name: string;
    value: number | string | undefined;
    symbolClass?: string;
}

export interface ChartLegendInput {
    items: LegendItem[];
}

export interface Input extends WithNormalizedProps<ChartLegendInput> {}

class ChartLegend extends Marko.Component<Input> {}

export default ChartLegend;
