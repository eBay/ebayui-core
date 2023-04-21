const cachePromises = [];

function cssLoad(cssSrc, promiseKey) {
    return new Promise((resolve, reject) => {
        const head = document.head || document.getElementsByTagName("head")[0];
        const cssnode = document.createElement("link");
        cssnode.type = "text/css";
        cssnode.rel = "stylesheet";

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

function srcLoad(src, promiseKey, type) {
    return new Promise((resolve, reject) => {
        const head = document.head || document.getElementsByTagName("head")[0];
        const script = document.createElement("script");
        script.src = src;
        if (type) {
            script.type = type;
        }

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
        const head = document.head || document.getElementsByTagName("head")[0];
        const script = document.createElement("noscript");
        script.textContent = content;
        script.id = "restar-worker";

        head.appendChild(script);
        resolve();
    });
}

function getPromise(typeList, promiseKey, src, key) {
    if (typeList[key]) {
        if (typeList[key] === "css") {
            return cssLoad(src, promiseKey);
        } else if (typeList[key] === "restar-worker") {
            return restArWorker(src, promiseKey);
        } else if (typeList[key] === "module") {
            return srcLoad(src, promiseKey, "module");
        }
    }
    return srcLoad(src, promiseKey);
}

/**
 * Loader, which loads a script or stylesheet. Will cache the results on the page so it does not load more than once.
 * @param {*} srcList Array of sources to load
 * @param {*} typeList The type of each src. Each index should match with srcList. See types for more info
 * @param {boolean} stagger If true, will wait for one source to load before loading the next.
 * @returns Promise, when resolved, all sources are loaded
 *
 * Types for typelist
 * src - standard javascript source (default value)
 * restar-worker - (deprecated), loads restar service worker
 * module - loads javascript script with type=module
 * css - CSS source file
 */
function loader(srcList, typeList, stagger) {
    const promiseKey = srcList.join(",");
    if (!cachePromises[promiseKey]) {
        if (stagger) {
            // Make sure each file loading completes, before loading the next
            cachePromises[promiseKey] = srcList.reduce(
                (p, src, key) =>
                    p.then(() => getPromise(typeList, promiseKey, src, key)),
                Promise.resolve()
            );
        } else {
            // Each can complete in any order
            cachePromises[promiseKey] = Promise.all(
                srcList.map((src, key) =>
                    getPromise(typeList, promiseKey, src, key)
                )
            );
        }
    }
    return cachePromises[promiseKey];
}

export { loader };
