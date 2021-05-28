const videoPromise = [];

function load(src, cssSrc) {
    if (!videoPromise[src]) {
        videoPromise[src] = Promise.all([
            new Promise((resolve, reject) => {
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
            }),
            new Promise((resolve, reject) => {
                const head = document.head || document.getElementsByTagName('head')[0];
                const cssnode = document.createElement('link');
                cssnode.type = 'text/css';
                cssnode.rel = 'stylesheet';

                cssnode.href = cssSrc;

                cssnode.onreadystatechange = () => {
                    resolve();
                };

                cssnode.onload = () => {
                    resolve();
                };
                cssnode.onerror = () => {
                    reject();
                    delete videoPromise[src];
                };
                head.appendChild(cssnode);
            }),
        ]);
    }
    return videoPromise[src];
}

module.exports = load;
