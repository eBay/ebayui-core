let rootSvg;
let svgDefs;

function createLinearGradientFromString(data) {
    // This is needed because if we add linear gradient as a string it will not be rendered.
    const linearGradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
    );
    linearGradient.setAttribute("id", data.id);
    linearGradient.setAttribute("x1", data.x1);
    linearGradient.setAttribute("y1", data.y1);
    linearGradient.setAttribute("x2", data.x2);
    linearGradient.setAttribute("y2", data.y2);
    linearGradient.setAttribute("gradientUnits", data.gradientUnits);
    data.children.forEach((stop) => {
        const newStop = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
        );
        newStop.setAttribute("offset", stop.offset);
        newStop.setAttribute("stop-color", stop["stop-color"]);
        linearGradient.appendChild(newStop);
    });
    return linearGradient;
}

export default {
    onMount() {
        // Create a hidden svg to store all symbols on startup.
        if (!rootSvg) {
            rootSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );
            // Apply "hidden styles" to the svg. We don't use display none because then the svg will not be rendered.
            rootSvg.style.position = "absolute";
            rootSvg.style.width = "0";
            rootSvg.style.height = "0";

            document.body.insertBefore(rootSvg, document.body.firstChild);
            svgDefs = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "defs"
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
                defItem = createLinearGradientFromString(this.input._def());
            }

            const symbol = defs.querySelector("symbol");
            defs.parentNode.removeChild(defs);
            if (symbol) {
                rootSvg.appendChild(symbol);
                // Only add defs if there are any and if symbol was added
                if (defItem) {
                    svgDefs.appendChild(defItem);
                }
            }
        }
    },
};
