let lastTime = 0;
let times = [];
let animation;
let interval;

/**
 * Loop that continuously calls itself and measures the time difference between calls
 * @param {DOMHighResTimeStamp} time
 */
function loop(time) {
    const ms = time - lastTime;
    let fps = 1000 / ms;
    if (fps) {
        if (times.length === 0) {
            fps = 60; // start off at 60
        }
        times.push(fps);
    }
    lastTime = time;
    animation = requestAnimationFrame(loop);
}

/**
 * Start the loop and start running code at specified intervals
 * @param {Function} intervalFn
 * @param {Number} intervalMs
 */
function start(intervalFn, intervalMs) {
    lastTime = 0;
    times = [];
    interval = setInterval(intervalFn, intervalMs);
    loop();
}

function end() {
    cancelAnimationFrame(animation);
    clearInterval(interval);
}

function getAverage() {
    const avg = times.reduce((a, b) => a + b) / times.length;
    return +avg.toFixed(2);
}

module.exports = {
    loop,
    start,
    end,
    getAverage,
};
