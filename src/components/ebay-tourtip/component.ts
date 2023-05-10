import { Input as TooltipBaseInput } from '../components/ebay-tooltip-base/component';
import { Input as TooltipOverlayInput } from '../components/ebay-tooltip-overlay/component';

export interface Input extends Omit<Marko.Input<'span'>, `on${string}`> {
    open?: boolean;
    noHover?: TooltipBaseInput['noHover'];
    host?: Marko.Input<'span'>;
    pointer?: TooltipOverlayInput['pointer'];
    styleLeft?: TooltipOverlayInput['styleLeft'];
    styleRight?: TooltipOverlayInput['styleRight'];
    styleTop?: TooltipOverlayInput['styleTop'];
    styleBottom?: TooltipOverlayInput['styleBottom'];
    heading?: TooltipOverlayInput['heading'];
    content?: TooltipOverlayInput['content'];
    a11yCloseText?: TooltipOverlayInput['a11yCloseText'];
    footer?: TooltipOverlayInput['footer'] & {
        index?: number;
    };
    'on-expand'?: () => void;
    onExpand?: this['on-expand'];
    'on-collapse'?: () => void;
    onCollapse?: this['on-collapse'];
}

interface State {
    expanded: boolean;
}

export default class extends Marko.Component<Input, State> {
    handleCollapse({ originalEvent }) {
        if (this.state.expanded) {
            this.state.expanded = false;
            this.emit('collapse', { originalEvent });
        }
    }

    handleExpand({ originalEvent }) {
        if (!this.state.expanded) {
            this.state.expanded = true;
            this.emit('expand', { originalEvent });
        }
    }
    onInput(input: Input) {
        if (input.open === false || input.open === true) {
            this.state.expanded = input.open;
        }
    }

    onCreate() {
        this.state = {
            expanded: true,
        };
    }
}
