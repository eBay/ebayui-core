export default {
    onCreate(input) {
        // path is used to compile the commands to draw the spark line svg
        // refer to https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
        const path = [];
        // get the start and end x values
        const startX = input.data[0].x;
        const endX = input.data[input.data.length - 1].x;

        // find the max and min y values
        let yMax;
        let yMin;
        input.data.forEach((p) => {
            yMax = !yMax || p.y > yMax ? p.y : yMax;
            yMin = !yMin || p.y < yMin ? p.y : yMin;
        });
        // calculate the x and y scale ratios to normalize data
        const yScale = 100 / (yMax - yMin);
        const xScale = 100 / (endX - startX);
        // loop through each data point
        input.data.forEach((p, i) => {
            // set the command, either M for move to on the first data point or L for line
            path.push(i === 0 ? 'M ' : 'L');
            // set the x value minus the startX times the normlize ratio + 6 for padding and line width
            path.push((p.x - startX) * xScale + 6);
            // set the y value minus the minimum y value times the normalize ratio + 10 padding and line width
            path.push(120 - ((p.y - yMin) * yScale + 10));
        });
        // set the viewBox x, y, width, height
        const viewBox = `0 0 ${(endX - startX) * xScale + 12} ${(yMax - yMin) * yScale + 20}`;

        this.state = {
            path: path.join(' '), // join the path array into a string with spaces for use in the path d attribute
            viewBox,
        };
    },
};
