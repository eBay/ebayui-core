/**
 * ebayDonut
 *
 * Adds spacing between slices in a donut chart.
 *
 * @param H {Highcharts}
 */
export function ebayDonut(H: any) {
    // Check if ebayDonut has been extended before attempting to extend again.
    if (H.seriesTypes.pie.prototype.ebayDonut) {
        return;
    }

    H.wrap(
        H.seriesTypes.pie.prototype,
        "translate",
        function (this: any, proceed: any) {
            // set a flag that can be checked so the prototype isn't overwritten twice, which looses the original code that is called with the proceed function
            H.seriesTypes.pie.prototype.ebayDonut = true;

            proceed.call(this);

            // If there's only 1 point, don't add spacing
            if (this.points.length === 1) {
                return;
            }

            // Get diameter of the circle from the center
            const diameter = this.center[2];

            // Get spacing value
            const spacing = 5;

            // Calculate the spacing as an angle in radians
            // This is calculating from the edge of the circle, should it be
            const angle = 2 * Math.asin(spacing / diameter);

            this.points.forEach((point: any) => {
                // Adjust the start and end angles of the slice
                point.shapeArgs.start += angle / 2;
                point.shapeArgs.end -= angle / 2;
            });
        },
    );
}
