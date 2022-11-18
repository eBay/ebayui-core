export default {
    onCreate(input) {
        const path = [];
        const startX = input.data[0].x;
        const endX = input.data[input.data.length - 1].x;
        let yMax;
        let yMin;
        input.data.forEach((p) => {
            yMax = !yMax || p.y > yMax ? p.y : yMax;
            yMin = !yMin || p.y < yMin ? p.y : yMin;
        });
        const yScale = 100 / (yMax - yMin);
        const xScale = 100 / (endX - startX);
        input.data.forEach((p, i) => {
            path.push(i === 0 ? 'M ' : 'L');
            path.push((p.x - startX) * xScale + 6);
            path.push((p.y - yMin) * yScale + 10);
        });
        const viewBox = `0 0 ${(endX - startX) * xScale + 12} ${(yMax - yMin) * yScale + 20}`;
        this.state = {
            path: path.join(' '),
            viewBox,
        };
    },
};
