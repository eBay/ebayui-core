import { resizeUtil } from "../event-utils";

let previousPosition: [number, number];
let previousStyles: string;
let isPrevented = false;

export { prevent, restore };

/**
 * Prevents the `<body>` element from scrolling.
 *
 * This is done by forcing the body to be `fixed` and setting it's height/width inline.
 * The body is then translated the reverse of the scroll position using negative margins.
 *
 * This approach was chosen over the more common just `overflow:hidden` to address some
 * issues with iOS and Android browsers.
 *
 * Finally the scroll position is also stored so that it can be reapplied after restoring
 * scrolling.
 */
function prevent() {
    if (!isPrevented) {
        const { body } = document;
        const { pageXOffset, pageYOffset } = window;
        const { width, height, marginTop, marginLeft } = getComputedStyle(body);
        let styleText = "position:fixed;overflow:hidden;";
        previousPosition = [pageXOffset, pageYOffset];
        previousStyles = body.getAttribute("style")!;
        styleText += `height:${height};`;
        styleText += `width:${width};`;

        if (pageYOffset) {
            styleText += `margin-top:${
                -1 * (pageYOffset - parseInt(marginTop, 10))
            }px;`;
        }

        if (pageXOffset) {
            styleText += `margin-left:${
                -1 * (pageXOffset - parseInt(marginLeft, 10))
            }px`;
        }

        if (previousStyles) {
            styleText = `${previousStyles};${styleText}`;
        }

        body.setAttribute("style", styleText);
        resizeUtil.addEventListener("", recalculate);
        isPrevented = true;
    }
}

/**
 * Restores scrolling of the `<body>` element.
 *
 * This will also restore the scroll position, and inline body styles from before the body
 * scroll was prevented. You should not call this function without first preventing the
 * body scroll.
 */
function restore() {
    if (isPrevented) {
        const { body } = document;
        if (previousStyles) {
            body.setAttribute("style", previousStyles);
        } else {
            body.removeAttribute("style");
        }

        window.scrollTo(...previousPosition);
        resizeUtil.removeEventListener("", recalculate);
        isPrevented = false;
    }
}

/**
 * Called during "resize" events to recalculate generated body widths and margins.
 */
function recalculate() {
    restore();
    prevent();
}
