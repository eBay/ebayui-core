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

export default class extends Marko.Component<Input> {}
