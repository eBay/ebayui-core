import type { pointerStyles, typeRoles } from './constants';

export interface Input {
    toJSON?: any;
    styleTop?: string;
    styleLeft?: string;
    styleRight?: string;
    styleBottom?: string;
    pointer?: keyof typeof pointerStyles;
    heading?: Marko.Input<'span'> & {
        as: Marko.NativeTags;
        renderBody: Marko.Renderable;
    };
    id?: string;
    type: keyof typeof typeRoles;
    content?: Marko.Input<'span'>;
    a11yCloseText?: string;
    footer?: Marko.Renderable & {
        class?: string;
    };
}

export default class extends Marko.Component<Input> {
    handleCloseButton(originalEvent: Event) {
        this.emit('overlay-close', { originalEvent });
    }
}
