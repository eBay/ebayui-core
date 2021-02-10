const videoPromise = [];

function load(src) {
    if (!videoPromise[src]) {
        videoPromise[src] = new Promise((resolve, reject) => {
            const head = document.head || document.getElementsByTagName('head')[0];
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve();
            };
            script.onerror = () => {
                reject();
                delete videoPromise[src];
            };
            head.appendChild(script);
        });
    }
    return videoPromise[src];
}

module.exports = load;
