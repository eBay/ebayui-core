import type { WithNormalizedProps } from "../../global";

interface TooltipInput {
    date: string;
    points?: {
        point: {
            tooltip?: string;
            series: {
                name: string;
            };
            label: string;
        };
    }[];
    "series-length"?: number | boolean;
}

export interface Input extends WithNormalizedProps<TooltipInput> {}

class Tooltip extends Marko.Component<Input> {}

export default Tooltip;
