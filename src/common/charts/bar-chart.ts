export function eBayColumns(HighCharts: any) {
    if (!HighCharts.seriesTypes.column.prototype.ebayColumn) {
        // check if the column has been extended before attempting to extend again
        HighCharts.wrap(
            HighCharts.seriesTypes.column.prototype,
            "translate",
            function (this: any, proceed: any) {
                // set a flag that can be checked so the prototype isn't overwritten twice, which looses the original code that is called with the proceed function
                HighCharts.seriesTypes.column.prototype.ebayColumn = true;
                const top = this.options.top, // pull out the top value from the highcharts options object
                    bottom = this.options.bottom; // pull out the bottom value from the highcarts options object

                // this runs the original code for this translate function at this point
                // if it is not run HighCharts.each will not exist yet
                proceed.call(this);
                HighCharts.each(this.points, (point: any) => {
                    // loop over each data point element
                    const shapeArgs = point.shapeArgs, // reference to the points shapeArgs object
                        x = shapeArgs.x, // references to the shapeArgs X value
                        w = shapeArgs.width; // references to the shapeArgs width value

                    let y = shapeArgs.y, // references to the shapeArgs X value
                        // references to the shapeArgs height value.
                        // If it is not marked as a bottom point subract 4 pixels to create the visual gap in the chart
                        h = shapeArgs.height - (bottom ? 0 : 4);

                    // check to make sure h is not negative and if it is set the hight back to the original height and move it's y position instead
                    if (h < 0) {
                        h = shapeArgs.height;
                        y = y - 4;
                    }

                    const cornerRadius = 3;

                    // HighCharts.relativeLength returns a length based on either the integer value, or a percentage of a base with w being the base.
                    let rTopLeft = HighCharts.relativeLength(
                            top ? cornerRadius : 0,
                            w,
                        ),
                        rTopRight = HighCharts.relativeLength(
                            top ? cornerRadius : 0,
                            w,
                        ),
                        rBottomRight = HighCharts.relativeLength(
                            bottom ? cornerRadius : 0,
                            w,
                        ),
                        rBottomLeft = HighCharts.relativeLength(
                            bottom ? cornerRadius : 0,
                            w,
                        );

                    // max corner radius is half the width and height of the shape
                    const maxCornerRadius = Math.min(w, h) / 2;

                    // adjust top left corner if it is larger that maxCornerRadius
                    if (rTopLeft > maxCornerRadius) rTopLeft = maxCornerRadius;

                    // adjust top right corner if it is larger that maxCornerRadius
                    if (rTopRight > maxCornerRadius)
                        rTopRight = maxCornerRadius;

                    // adjust bottom right corner if it is larger that maxCornerRadius
                    if (rBottomRight > maxCornerRadius)
                        rBottomRight = maxCornerRadius;

                    // adjust bottom left corner if it is larger that maxCornerRadius
                    if (rBottomLeft > maxCornerRadius)
                        rBottomLeft = maxCornerRadius;

                    point.dlBox = point.shapeArgs; // set the data label Box for aligning tooltips to match the point shape
                    point.shapeY = y; // set the points y position
                    point.shapeType = "path"; // set the shape type to path
                    point.shapeArgs = {
                        // define the shape arg used to render the svg path element
                        // d is a standard SVG path definition string
                        // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
                        d: [
                            // move to the top left corner plus rTopLeft for the beveled corner width to start the path
                            "M",
                            x + rTopLeft,
                            y,
                            // top side line
                            "L",
                            x + w - rTopRight,
                            y,
                            // top right corner curve
                            "C",
                            // top right corner start bezier control point
                            x + w - rTopRight / 2,
                            y,
                            // top right corner end bezier control point
                            x + w,
                            y + rTopRight / 2,
                            // top right
                            x + w,
                            y + rTopRight,
                            // right side
                            "L",
                            x + w,
                            y + h - rBottomRight,
                            // bottom right corner
                            "C",
                            // bottom right corner start bezier control point
                            x + w,
                            y + h - rBottomRight / 2,
                            // bottom right corner end bezier control point
                            x + w - rBottomRight / 2,
                            y + h,
                            // bottom right
                            x + w - rBottomRight,
                            y + h,
                            // bottom side
                            "L",
                            x + rBottomLeft,
                            y + h,
                            // bottom left corner
                            "C",
                            // bottom left corner start bezier control point
                            x + rBottomLeft / 2,
                            y + h,
                            // bottom left corner start bezier control point
                            x,
                            y + h - rBottomLeft / 2,
                            // bottom left
                            x,
                            y + h - rBottomLeft,
                            // left side
                            "L",
                            x,
                            y + rTopLeft,
                            // top left corner
                            "C",
                            // top left corner start bezier control point
                            x,
                            y + rTopLeft / 2,
                            // top left corner end bezier control point
                            x + rTopLeft / 2,
                            y,
                            // top left corner
                            x + rTopLeft,
                            y,
                            "Z", // close path
                        ],
                    };
                });
            },
        );
    }
}
