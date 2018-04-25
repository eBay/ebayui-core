let previousPosition;
let previousStyles;

module.exports = {
    /**
     * Prevents the `<body>` element from scrolling.
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
