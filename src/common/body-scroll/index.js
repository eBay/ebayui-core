let previousPosition;
let previousStyles;

module.exports = {
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
    prevent() {
        const { body } = document;
        const { scrollX, scrollY } = window;
        const { width, height, marginTop, marginLeft } = getComputedStyle(body);
        let styleText = 'position:fixed;overflow:hidden;';
        previousPosition = [scrollX, scrollY];
        previousStyles = body.getAttribute('style');
        styleText += `height:${width};`;
        styleText += `width:${height};`;
        styleText += `margin-top:${-1 * (scrollY - parseInt(marginTop, 10))}px;`;
        styleText += `margin-left:${-1 * (scrollX - parseInt(marginLeft, 10))}px`;

        if (previousStyles) {
            styleText = `${previousStyles};${styleText}`;
        }

        body.setAttribute('style', styleText);
    },
    /**
     * Restores scrolling of the `<body>` element.
     *
     * This will also restore the scroll position, and inline body styles from before the body
     * scroll was prevented. You should not call this function without first preventing the
     * body scroll.
     */
    restore() {
        const { body } = document;

        if (previousStyles) {
            body.setAttribute('style', previousStyles);
        } else {
            body.removeAttribute('style');
        }

        window.scrollTo(...previousPosition);
    }
};
