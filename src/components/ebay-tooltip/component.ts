import * as eventUtils from '../../common/event-utils';
import { Input as TooltipBaseInput } from '../components/ebay-tooltip-base/component-browser';
import { Input as TooltipOverlayInput } from '../components/ebay-tooltip-overlay/component-browser';

export interface Input extends Omit<Marko.Input<'span'>, `on${string}`> {
    open?: boolean;
    noHover?: TooltipBaseInput['noHover'];
    host?: Marko.AttrTag<{ renderBody: Marko.Body }>;
    pointer?: TooltipOverlayInput['pointer'];
    styleLeft?: TooltipOverlayInput['styleLeft'];
    styleRight?: TooltipOverlayInput['styleRight'];
    styleTop?: TooltipOverlayInput['styleTop'];
    styleBottom?: TooltipOverlayInput['styleBottom'];
    heading?: TooltipOverlayInput['heading'];
    content?: TooltipOverlayInput['content'];
    'on-expand'?: () => void;
    onExpand?: this['on-expand'];
    'on-collapse'?: () => void;
    onCollapse?: this['on-collapse'];
}

interface State {
    open: boolean;
}

export default class extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            open: false,
        };
    }
    onInput(input: Input) {
        if (input.open === true || input.open === false) {
            this.state.open = input.open;
        }
    }
    handleExpand() {
        this.state.open = true;
        this.emit('expand');
    }
    handleCollapse() {
        this.state.open = false;
        this.emit('collapse');
    }
    handleKeydown(e: KeyboardEvent) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.state.open = false;
        });
    }
}
