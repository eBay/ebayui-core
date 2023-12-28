const cachePromises: Record<string, any> = {};

function cssLoad(cssSrc: string, promiseKey: string) {
    return new Promise((resolve, reject) => {
        const head = document.head || document.getElementsByTagName("head")[0];
        const cssnode = document.createElement("link");
        cssnode.type = "text/css";
        cssnode.rel = "stylesheet";

        cssnode.href = cssSrc;

        // TODO: Figure out if this is ever needed
        (cssnode as any).onreadystatechange = () => {
            resolve(undefined);
        };

        cssnode.onload = () => {
            resolve(undefined);
        };
        cssnode.onerror = () => {
            reject();
            delete cachePromises[promiseKey];
        };
        head.appendChild(cssnode);
    });
}

function srcLoad(src: string, promiseKey: string, type?: string) {
    return new Promise((resolve, reject) => {
        const head = document.head || document.getElementsByTagName("head")[0];
        const script = document.createElement("script");
        script.src = src;
        if (type) {
            script.type = type;
        }

        script.onload = () => {
            resolve(undefined);
        };
        script.onerror = () => {
            reject();
            delete cachePromises[promiseKey];
        };
        head.appendChild(script);
    });
}

function restArWorker(src: string) {
    return new Promise((resolve) => {
        const content = `importScripts( "${src}" );`;
        const head = document.head || document.getElementsByTagName("head")[0];
        const script = document.createElement("noscript");
        script.textContent = content;
        script.id = "restar-worker";

        head.appendChild(script);
        resolve(undefined);
    });
}

function getPromise(
    typeList: string[],
    promiseKey: string,
    src: string,
    key: number,
) {
    if (typeList[key]) {
        if (typeList[key] === "css") {
            return cssLoad(src, promiseKey);
        } else if (typeList[key] === "restar-worker") {
            return restArWorker(src);
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
function loader(srcList: string[], typeList: string[], stagger?: boolean) {
    const promiseKey = srcList.join(",");
    if (!cachePromises[promiseKey]) {
        if (stagger) {
            // Make sure each file loading completes, before loading the next
            cachePromises[promiseKey] = srcList.reduce(
                (p, src, key) =>
                    p.then(
                        () =>
                            getPromise(
                                typeList,
                                promiseKey,
                                src,
                                key,
                            ) as Promise<void>,
                    ),
                Promise.resolve(),
            );
        } else {
            // Each can complete in any order
            cachePromises[promiseKey] = Promise.all(
                srcList.map((src, key) =>
                    getPromise(typeList, promiseKey, src, key),
                ),
            );
        }
    }
    return cachePromises[promiseKey];
}

export { loader };
