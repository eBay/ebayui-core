import type { WithNormalizedProps } from "../../global";

interface TooltipInput {
    date: string;
    x: number;
    data: { label: string } & Iterable<{
        name: string;
        data: {
            label: string;
            x: number;
        }[];
    }>;
    stacked?: boolean;
}

export interface Input extends WithNormalizedProps<TooltipInput> {}

class Tooltip extends Marko.Component<Input> {}

export default Tooltip;
