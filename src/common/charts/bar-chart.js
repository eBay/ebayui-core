export function eBayColumns(H) {
    H.wrap(H.seriesTypes.column.prototype, 'translate', function (proceed) {
        const top = this.options.top,
            bottom = this.options.bottom;

        proceed.call(this);
        H.each(this.points, (point) => {
            const shapeArgs = point.shapeArgs,
                x = shapeArgs.x,
                w = shapeArgs.width;

            let y = shapeArgs.y,
                h = shapeArgs.height - (bottom ? 0 : 4);

            if (h < 0) {
                h = shapeArgs.height;
                y = y - 4;
            }

            const radius = 3;
            let rTopLeft = H.relativeLength(top ? radius : 0, w),
                rTopRight = H.relativeLength(top ? radius : 0, w),
                rBottomRight = H.relativeLength(bottom ? radius : 0, w),
                rBottomLeft = H.relativeLength(bottom ? radius : 0, w);

            const maxR = Math.min(w, h) / 2;

            if (rTopLeft > maxR) {
                rTopLeft = maxR;
            }

            if (rTopRight > maxR) {
                rTopRight = maxR;
            }

            if (rBottomRight > maxR) {
                rBottomRight = maxR;
            }

            if (rBottomLeft > maxR) {
                rBottomLeft = maxR;
            }
            point.dlBox = point.shapeArgs;
            point.shapeY = y;
            point.shapeType = 'path';
            point.shapeArgs = {
                d: [
                    'M',
                    x + rTopLeft,
                    y,
                    // top side
                    'L',
                    x + w - rTopRight,
                    y,
                    // top right corner
                    'C',
                    x + w - rTopRight / 2,
                    y,
                    x + w,
                    y + rTopRight / 2,
                    x + w,
                    y + rTopRight,
                    // right side
                    'L',
                    x + w,
                    y + h - rBottomRight,
                    // bottom right corner
                    'C',
                    x + w,
                    y + h - rBottomRight / 2,
                    x + w - rBottomRight / 2,
                    y + h,
                    x + w - rBottomRight,
                    y + h,
                    // bottom side
                    'L',
                    x + rBottomLeft,
                    y + h,
                    // bottom left corner
                    'C',
                    x + rBottomLeft / 2,
                    y + h,
                    x,
                    y + h - rBottomLeft / 2,
                    x,
                    y + h - rBottomLeft,
                    // left side
                    'L',
                    x,
                    y + rTopLeft,
                    // top left corner
                    'C',
                    x,
                    y + rTopLeft / 2,
                    x + rTopLeft / 2,
                    y,
                    x + rTopLeft,
                    y,
                    'Z',
                ],
            };
        });
    });
}
