export default function (input: HTMLInputElement, initialMask: string) {
    let mask = initialMask;
    const onInput = (ev: Event) => {
        updateInputValue(
            input,
            mask,
            input.value,
            (ev as InputEvent).inputType,
        );
    };
    input.addEventListener("input", onInput);

    return {
        update(newValue: string, newMask: string) {
            mask = newMask;
            updateInputValue(input, mask, newValue, "");
        },
        destroy() {
            input.removeEventListener("input", onInput);
        },
        get value() {
            return input.value;
        },
    };
}

function updateInputValue(
    input: HTMLInputElement,
    mask: string,
    value: string,
    inputType: string,
) {
    const isDelete = /delete.*Backwards/.test(inputType);
    const initialPos = input.selectionStart || 0;
    const newValue = applyMask(value, mask);
    if (value !== newValue) {
        input.value = newValue;
        const newPosition = resolveCursorPosition(
            newValue,
            value,
            initialPos,
            isDelete,
        );
        if (newPosition !== undefined) {
            input.setSelectionRange(newPosition, newPosition);
        }
    }
}

export function stripNonDigits(value: string) {
    return value.replace(/\D+/g, "");
}

function applyMask(value: string, mask: string) {
    const digits = stripNonDigits(value);
    let maskedValue = "";
    let currentDigit = 0;
    if (digits.length) {
        for (const char of mask) {
            if (char === "0") {
                maskedValue += digits[currentDigit++];
                if (currentDigit === digits.length) {
                    break;
                }
            } else maskedValue += char;
        }
        if (currentDigit < digits.length) {
            maskedValue += " " + digits.slice(currentDigit);
        }
    }
    return maskedValue;
}

function resolveCursorPosition(
    updatedValue: string,
    initialValue: string,
    initialPosition: number,
    isDelete: boolean,
) {
    const cursorAtEnd = initialPosition === initialValue.length;
    if (isDelete || !cursorAtEnd) {
        const before = initialValue.slice(0, initialPosition);
        const after = initialValue.slice(initialPosition);
        if (updatedValue.startsWith(before)) {
            return initialPosition;
        } else if (updatedValue.endsWith(after)) {
            return updatedValue.length - after.length;
        } else {
            const relevantChars = stripSpacesAndPunctuation(before);
            let pos = 0;
            let relevantIndex = 0;
            while (relevantIndex < relevantChars.length) {
                if (stripSpacesAndPunctuation(updatedValue[pos]))
                    relevantIndex++;
                pos++;
            }
            return pos;
        }
    }
}

function stripSpacesAndPunctuation(str: string) {
    return str.replace(/[.,\\/#!$%^&*;:{}=+\-_`~()\s]/g, "");
}
