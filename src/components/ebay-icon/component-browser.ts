import type { AttrString } from "marko/tags-html";
import type { WithNormalizedProps } from "../../global";
import { defNames } from "./util";

let rootSvg: SVGSVGElement;
let svgDefs: SVGDefsElement;

interface IconDefs {
    server: string;
    browser: any;
}

interface IconInput extends Omit<Marko.Input<"svg">, `on${string}`> {
    _themes?: () => string;
    _type: string;
    _name: string;
    _size?: string;
    _def?: () => IconDefs;
    "a11y-variant"?: "label";
    "a11y-text"?: AttrString;
    "no-skin-classes"?: boolean;
}

export interface Input extends WithNormalizedProps<IconInput> {}

function createSVGElementFromString(data: any) {
    // This is needed because if we add linear gradient as a string it will not be rendered.
    if (!data.name) {
        return;
    }
    const linearGradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        data.name,
    );
    for (const attr of Object.keys(data.attr)) {
        linearGradient.setAttribute(attr, data.attr[attr]);
    }
    data.children.forEach((stop: any) => {
        const newStop = document.createElementNS(
            "http://www.w3.org/2000/svg",
            stop.name,
        );
        for (const attr of Object.keys(stop.attr)) {
            newStop.setAttribute(attr, stop.attr[attr]);
        }

        linearGradient.appendChild(newStop);
    });
    return linearGradient;
}

class Icon extends Marko.Component<Input> {
    onMount() {
        // Create a hidden svg to store all symbols on startup.
        if (!rootSvg) {
            rootSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg",
            );
            // Apply "hidden styles" to the svg. We don't use display none because then the svg will not be rendered.
            rootSvg.style.position = "absolute";
            rootSvg.style.width = "0";
            rootSvg.style.height = "0";

            document.body.insertBefore(rootSvg, document.body.firstChild);
            svgDefs = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "defs",
            );
            rootSvg.appendChild(svgDefs);
        }

        // If there were any symbols rendered then we move them to the svg above after rendering them.
        const defs = this.getEl("defs");

        if (defs) {
            let defItem;
            if (this.input && this.input._themes) {
                defs.innerHTML = this.input._themes();
            }
            if (this.input && this.input._def) {
                defItem = createSVGElementFromString(this.input._def().browser);
            }

            const symbol = defs.querySelector("symbol");
            if (!defItem && defs.querySelector(defNames)) {
                defItem = defs.querySelector(defNames);
            }

            defs.parentNode?.removeChild(defs);
            if (symbol) {
                rootSvg.appendChild(symbol);
                // Only add defs if there are any and if symbol was added
                if (defItem) {
                    svgDefs.appendChild(defItem);
                }
            }
        }
    }
}

export default Icon;
