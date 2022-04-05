const cachePromises = [];

function cssLoad(cssSrc, promiseKey) {
    return new Promise((resolve, reject) => {
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
            delete cachePromises[promiseKey];
        };
        head.appendChild(cssnode);
    });
}

function srcLoad(src, promiseKey) {
    return new Promise((resolve, reject) => {
        const head = document.head || document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.src = src;

        script.onload = () => {
            resolve();
        };
        script.onerror = () => {
            reject();
            delete cachePromises[promiseKey];
        };
        head.appendChild(script);
    });
}

function restArWorker(src) {
    return new Promise((resolve) => {
        const content = `importScripts( "${src}" );`;
        const head = document.head || document.getElementsByTagName('head')[0];
        const script = document.createElement('noscript');
        script.textContent = content;
        script.id = 'restar-worker';

        head.appendChild(script);
        resolve();
    });
}

function loader(srcList, typeList) {
    const promiseKey = srcList.join(',');
    if (!cachePromises[promiseKey]) {
        cachePromises[promiseKey] = Promise.all(
            srcList.map((src, key) => {
                if (typeList[key]) {
                    if (typeList[key] === 'css') {
                        return cssLoad(src, promiseKey);
                    } else if (typeList[key] === 'restar-worker') {
                        return restArWorker(src, promiseKey);
                    }
                }
                return srcLoad(src, promiseKey);
            })
        );
    }
    return cachePromises[promiseKey];
}

export { loader };
