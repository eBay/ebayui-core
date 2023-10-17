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

export default class extends Marko.Component<Input> {}
