function handleKeydown(
    keyCodes: number[],
    e: KeyboardEvent,
    callback: () => any
) {
    const keyCode = e.charCode || e.keyCode;
    if (keyCodes.indexOf(keyCode) !== -1) {
        callback();
    }
}

// inverse of found keys
function handleNotKeydown(
    keyCodes: number[],
    e: KeyboardEvent,
    callback: () => any
) {
    const keyCode = e.charCode || e.keyCode;
    if (keyCodes.indexOf(keyCode) === -1) {
        callback();
    }
}

// enter key
function handleEnterKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown([13], e, callback);
}

// space and enter keys
function handleActionKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown([32, 13], e, callback);
}

function handleEscapeKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown([27], e, callback);
}

function handleUpDownArrowsKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown([38, 40], e, callback);
}

function handleLeftRightArrowsKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown([37, 39], e, callback);
}

function handleArrowsKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown([37, 38, 39, 40], e, callback);
}

// only fire for character input, not modifier/meta keys (enter, escape, backspace, tab, etc.)
function handleTextInput(e: KeyboardEvent, callback: () => any) {
    const keys = [
        9, // tab
        13, // enter key
        16, // shift
        17, // control
        18, // alt
        20, // caps lock
        27, // escape
        37, // left arrow
        38, // up arrow
        39, // right arrow
        40, // down arrow
        91, // "meta" key (Mac "command" key)
    ];
    handleNotKeydown(keys, e, callback);
}

function preventDefaultIfHijax(e: KeyboardEvent, hijax: boolean) {
    if (hijax) {
        e.preventDefault();
    }
}

const handlers: ((e: Event) => void)[] = [];
function addEventListener(_: unknown, handler: (e: Event) => void) {
    if (handlers.length === 0) {
        window.addEventListener("resize", handleResize);
    }
    handlers.push(handler);
}
function removeEventListener(_: unknown, handler: (e: Event) => void) {
    if (handlers.length === 1) {
        window.removeEventListener("resize", handleResize);
    }
    handlers.splice(handlers.indexOf(handler), 1);
}
function handleResize(e: Event) {
    window.removeEventListener("resize", handleResize);
    window.requestAnimationFrame(() => {
        if (handlers.length) {
            handlers.forEach((handler) => handler(e));
            window.addEventListener("resize", handleResize);
        }
    });
}

const resizeUtil = {
    addEventListener,
    removeEventListener,
};

function debounce(func: Function, timeout = 100) {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

export {
    debounce,
    handleEnterKeydown,
    handleActionKeydown,
    handleEscapeKeydown,
    handleUpDownArrowsKeydown,
    handleLeftRightArrowsKeydown,
    handleArrowsKeydown,
    handleTextInput,
    preventDefaultIfHijax,
    resizeUtil,
};
