export function ebayLegend(H) {
    H.wrap(H.Legend.prototype, 'colorizeItem', function (p, item, visible) {
        // this helps make the legend svg elements render crisper
        const width = H.pick(item.borderWidth, 1),
            crisp = -(width % 2) / 2;
        p.apply(this, [].slice.call(arguments, 1));

        if (item.legendSymbol) {
            if (visible) {
                item.legendSymbol.attr({
                    'stroke-width': width, // set the border width if visible
                    translateX: crisp, // set translateX to land on a perfect pixel
                    translateY: crisp, // set translateX to land on a perfect pixel
                    stroke: item.options.borderColor, // set the border color of legend item
                });
            }
        }
    });
}
