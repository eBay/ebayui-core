function handleKeydown(
    keyCodes: string[],
    e: KeyboardEvent,
    callback: () => any,
) {
    const keyCode = e.key;
    if (keyCodes.indexOf(keyCode) !== -1) {
        callback();
    }
}

// inverse of found keys
function handleNotKeydown(
    keyCodes: string[],
    e: KeyboardEvent,
    callback: () => any,
) {
    const keyCode = e.key;
    if (keyCodes.indexOf(keyCode) === -1) {
        callback();
    }
}

// enter key
function handleEnterKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown(["Enter"], e, callback);
}

// space and enter keys
function handleActionKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown(["Enter", " "], e, callback);
}

function handleEscapeKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown(["Escape"], e, callback);
}

function handleUpDownArrowsKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown(["ArrowUp", "ArrowDown"], e, callback);
}

function handleLeftRightArrowsKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown(["ArrowLeft", "ArrowRight"], e, callback);
}

function handleArrowsKeydown(e: KeyboardEvent, callback: () => any) {
    handleKeydown(
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        e,
        callback,
    );
}

// only fire for character input, not modifier/meta keys (enter, escape, backspace, tab, etc.)
function handleTextInput(e: KeyboardEvent, callback: () => any) {
    const keys = [
        "Tab",
        "Enter",
        "Shift",
        "Escape",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Shift",
        "Alt",
        "Meta",
        "Control",
        "CapsLock",
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

function debounce(this: any, func: Function, timeout = 100) {
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
