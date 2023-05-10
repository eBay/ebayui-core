import type { AttrClass } from 'marko/tags-html';

let rootSvg: HTMLElement;

export interface Input extends Omit<Marko.Input<'svg'>, `on${string}`> {
    _themes?: () => string;
    _type: string;
    _name: string;
    a11yVariant?: 'label';
    a11yText?: string;
    class?: AttrClass;
    noSkinClasses?: boolean;
}

export default class extends Marko.Component<Input> {
    onMount() {
        // Create a hidden svg to store all symbols on startup.
        if (!rootSvg) {
            rootSvg = document.createElement('svg');
            const rootDiv = document.createElement('div');
            rootDiv.hidden = true;
            document.body.insertBefore(rootDiv, document.body.firstChild);
            rootDiv.appendChild(rootSvg);
        }

        // If there were any symbols rendered then we move them to the svg above after rendering them.
        const defs = this.getEl('defs');

        if (defs) {
            if (this.input && this.input._themes) {
                defs.innerHTML = this.input._themes();
            }
            const symbol = defs.querySelector('symbol');
            defs.parentNode?.removeChild(defs);

            if (symbol) {
                rootSvg.appendChild(symbol);
            }
        }
    }
}
