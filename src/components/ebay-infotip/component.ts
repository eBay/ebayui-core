import { pointerStyles } from '../components/ebay-tooltip-overlay/constants';
import EbayTooltipBase from '../components/ebay-tooltip-base/component-browser';

export interface Input extends Omit<Marko.Input<'span'>, `on${string}`> {
    open?: boolean;
    variant?: 'modal' | 'default';
    pointer?: keyof typeof pointerStyles;
    disabled?: boolean;
    ariaLabel?: string;
    icon?: Marko.Component;
    styleLeft?: string;
    styleRight?: string;
    styleTop?: string;
    styleBottom?: string;
    heading: Marko.Input<'span'> & {
        as: Marko.NativeTags;
        renderBody: Marko.Renderable;
    };
    content: Marko.Input<'span'>;
    a11yCloseButtonText?: string;
    'on-expand'?: () => void;
    onExpand?: this['on-expand'];
    'on-collapse'?: () => void;
    onCollapse?: this['on-collapse'];
}

interface State {
    open: boolean;
}

export default class extends Marko.Component<Input, State> {
    onInput(input: Input) {
        this.state = {
            open: input.open || false,
        };
    }

    setOpen(isOpen: boolean) {
        if (this.input.variant === 'modal') {
            this.state.open = isOpen;
        }
    }

    handleOpenModal() {
        this.setOpen(true);
    }

    handleExpand() {
        this.setOpen(true);
        this.emit('expand');
    }

    handleOverlayClose() {
        (this.getComponent('base') as EbayTooltipBase).collapse();
    }

    isExpanded() {
        return (this.getComponent('base') as EbayTooltipBase).isExpanded();
    }

    expand() {
        (this.getComponent('base') as EbayTooltipBase).expand();
    }

    collapse() {
        (this.getComponent('base') as EbayTooltipBase).collapse();
    }

    handleCollapse() {
        this.setOpen(false);

        (this.getEl('host') as HTMLButtonElement).focus();
        this.emit('collapse');
    }
}
