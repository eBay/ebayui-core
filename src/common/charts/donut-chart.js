const _polarToCartesian = (r, angle) => ({
    x: r * Math.cos((angle * Math.PI) / 180),
    y: r * Math.sin((angle * Math.PI) / 180),
});
const clockwise = 1;
const counterClockwise = 0;
export const numberReg = /[+-]?\d+(\.\d+)?/g;
export class DonutChartPathGenerator {
    portions;
    size = 200;
    center = 100;

    total;
    padding = 8;
    donutWidth;
    corner;

    constructor(input) {
        this.processInput(input);
    }

    processInput(input) {
        this.portions = input.portions.map((p) => ({
            rawValue: p.value,
            value: p.value.match(numberReg).map((v) => parseFloat(v))[0],
            text: p.text,
        }));
        this.total = this.portions.reduce((p, c) => p + c.value, 0);
        this.portions = this.portions.map((p) => ({
            ...p,
            percentage: p.value / this.total,
        }));
    }

    setSize(s) {
        this.size = s;
        this.center = s * 0.5;
    }

    getPortionShape(percentage, startIndex) {
        if (this.size) {
            const padding = this.padding * this.portions.length;
            const angle = percentage * (360 - padding); // / this.portions.length;
            let startAngle = -90;
            if (startIndex > 0) {
                for (let i = 0; i < startIndex; i++) {
                    startAngle += this.portions[i].percentage * (360 - padding) + this.padding;
                }
            }
            return this.makeSectorShape(startAngle, angle);
        }
        return '';
    }
    makeSectorShape(startAngle, angle) {
        // const center = this.size * 0.5; // this.center;
        const center = this.center;
        const radius = (this.size - 4) * 0.5;
        this.corner = 0.2;

        let a = angle;
        if (angle > 0 && angle < 0.3) {
            // Tiny angles smaller than ~0.3° can produce weird-looking paths
            a = 0;
        } else if (angle > 359.999) {
            // If progress is full, notch it back a little, so the path doesn't become 0-length
            a = 359.999;
        }

        let innerRadius = radius * 0.9;
        if (radius - innerRadius < 8) {
            innerRadius = radius - 8;
        }

        const endAngle = startAngle + a,
            width = radius - innerRadius,
            capSize = this.padding * 0.1,
            innerBevelRadius = innerRadius + width * 0.25,
            outterBevelRadius = radius - width * 0.25,
            innerBevelBezierRadius = innerRadius,
            outterBevelBezierRadius = radius,
            startCoords = _polarToCartesian(innerRadius, startAngle),
            endCoords = _polarToCartesian(innerRadius, endAngle),
            outerStartCoords = _polarToCartesian(radius, startAngle),
            outerEndCoords = _polarToCartesian(radius, endAngle),
            endOutterBevelCoords = _polarToCartesian(outterBevelRadius, endAngle + capSize),
            endInnerBevelCoords = _polarToCartesian(innerBevelRadius, endAngle + capSize),
            startOutterBevelCoords = _polarToCartesian(outterBevelRadius, startAngle - capSize),
            startInnerBevelCoords = _polarToCartesian(innerBevelRadius, startAngle - capSize),
            startOutterBevelBezierCoords = _polarToCartesian(
                outterBevelBezierRadius,
                startAngle - capSize
            ),
            startInnerBevelBezierCoords = _polarToCartesian(
                innerBevelBezierRadius,
                startAngle - capSize
            ),
            endOutterBevelBezierCoords = _polarToCartesian(
                outterBevelBezierRadius,
                endAngle + capSize
            ),
            endInnerBevelBezierCoords = _polarToCartesian(
                innerBevelBezierRadius,
                endAngle + capSize
            ),
            x1 = center + startCoords.x,
            x2 = center + endCoords.x,
            y1 = center + startCoords.y,
            y2 = center + endCoords.y,
            x3 = center + outerStartCoords.x,
            x4 = center + outerEndCoords.x,
            y3 = center + outerStartCoords.y,
            y4 = center + outerEndCoords.y;

        return [
            // inner arc of pie segment
            'M',
            x1,
            y1,
            'A',
            innerRadius,
            innerRadius,
            0,
            +(a > 180),
            clockwise,
            x2,
            y2,

            // end cap with rounded corners
            'Q',
            center + endInnerBevelBezierCoords.x,
            center + endInnerBevelBezierCoords.y,
            center + endInnerBevelCoords.x,
            center + endInnerBevelCoords.y,
            'L',
            center + endOutterBevelCoords.x,
            center + endOutterBevelCoords.y,
            'Q',
            center + endOutterBevelBezierCoords.x,
            center + endOutterBevelBezierCoords.y,
            x4,
            y4,

            // outter arc of pie segment
            'A',
            radius,
            radius,
            0,
            +(a > 180),
            counterClockwise,
            x3,
            y3,

            // start cap with rounded corners
            'Q',
            center + startOutterBevelBezierCoords.x,
            center + startOutterBevelBezierCoords.y,
            center + startOutterBevelCoords.x,
            center + startOutterBevelCoords.y,
            'L',
            center + startInnerBevelCoords.x,
            center + startInnerBevelCoords.y,
            'Q',
            center + startInnerBevelBezierCoords.x,
            center + startInnerBevelBezierCoords.y,
            x1,
            y1,
        ].join(' ');
    }
}
