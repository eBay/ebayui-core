const handlers = [];

module.exports = {
    addEventListener(_, handler) {
        if (handlers.length === 0) {
            window.addEventListener('resize', handleResize);
        }
        handlers.push(handler);
    },
    removeEventListener(_, handler) {
        if (handlers.length === 1) {
            window.removeEventListener('resize', handleResize);
        }
        handlers.splice(handlers.indexOf(handler), 1);
    }
};

function handleResize(ev) {
    window.removeEventListener('resize', handleResize);
    (window.requestAnimationFrame || window.setTimeout)(() => {
        if (handlers.length) {
            handlers.forEach(handler => handler(ev));
            window.addEventListener('resize', handleResize);
        }
    }, 16);
}
