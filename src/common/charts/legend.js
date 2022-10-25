export function ebayLegend(H) {
    H.wrap(H.Legend.prototype, 'colorizeItem', function (p, item, visible) {
        const width = H.pick(item.borderWidth, 1),
            crisp = -(width % 2) / 2;
        p.apply(this, [].slice.call(arguments, 1));

        if (item.legendSymbol) {
            if (visible) {
                item.legendSymbol.attr({
                    'stroke-width': width,
                    translateX: crisp,
                    translateY: crisp,
                    stroke: item.options.borderColor,
                });
            }
        }
    });
}
