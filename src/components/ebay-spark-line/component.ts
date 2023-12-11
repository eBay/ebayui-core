export interface Input {
    data: { x: number; y: number }[];
    trend?: "positive" | "negative";
}

class SparkLine extends Marko.Component<Input> {
    getSparkLinePath() {
        // path is used to compile the commands to draw the spark line svg
        // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
        const path: (string | number)[] = [];
        const minMax = this.getMinMax();
        const normalizationScaleRatios =
            this.getNormalizationScaleRatios(minMax);

        // loop through each data point to generate the path string'
        this.input.data.forEach((p, i) => {
            // set the command, either M for move to on the first data point or L for line
            path.push(i === 0 ? "M " : "L");
            // set the x value minus the startX times the normlize ratio + 6 for padding and line width
            path.push(
                (p.x - minMax.startX) * normalizationScaleRatios.xScale + 6,
            );
            // set the y value minus the minimum y value times the normalize ratio + 10 padding and line width
            path.push(
                120 -
                    ((p.y - minMax.yMin) * normalizationScaleRatios.yScale +
                        10),
            );
        });
        return path.join(" "); // join the path array into a string with spaces for use in the path d attribute
    }

    getMinMax() {
        // get the start and end x values
        const startX = this.input.data[0].x;
        const endX = this.input.data[this.input.data.length - 1].x;

        // find the max and min y values
        let yMax!: number;
        let yMin!: number;
        this.input.data.forEach((p) => {
            yMax = !yMax || p.y > yMax ? p.y : yMax;
            yMin = !yMin || p.y < yMin ? p.y : yMin;
        });
        return {
            startX,
            endX,
            yMin,
            yMax,
        };
    }

    getNormalizationScaleRatios(minMax: ReturnType<typeof this.getMinMax>) {
        // calculate the x and y scale ratios to normalize data
        const yScale = 100 / (minMax.yMax - minMax.yMin);
        const xScale = 100 / (minMax.endX - minMax.startX);
        return {
            xScale,
            yScale,
        };
    }

    getViewBox() {
        const minMax = this.getMinMax();
        const normalizationScaleRatios =
            this.getNormalizationScaleRatios(minMax);
        // set the viewBox x, y, width, height
        return `0 0 ${
            (minMax.endX - minMax.startX) * normalizationScaleRatios.xScale + 12
        } ${
            (minMax.yMax - minMax.yMin) * normalizationScaleRatios.yScale + 20
        }`;
    }
}

export default SparkLine;
