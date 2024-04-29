export default function (input: HTMLInputElement, initialMask: string) {
    let mask = initialMask;
    const onBeforeInput = () => {
        const { start, end } = getDigitRelativeSelection(input);
        input.value = stripNonDigits(input.value);
        input.setSelectionRange(start, end);
    };
    const onInput = () => {
        updateInputValue(input, mask, input.value);
    };
    input.addEventListener("beforeinput", onBeforeInput);
    input.addEventListener("input", onInput);

    return {
        update(newValue: string, newMask: string) {
            mask = newMask;
            updateInputValue(input, mask, newValue);
        },
        destroy() {
            input.removeEventListener("beforeinput", onBeforeInput);
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
    newValue: string,
) {
    const { start, end } = getDigitRelativeSelection(input);
    const maskedValue = applyMask(newValue, mask);
    const maskLength = maskedValue.length;
    let maskedStart, maskedEnd;
    let digitIndex = 0;
    for (let i = 0; i < maskedValue.length; i++) {
        if (/\d/.test(maskedValue[i])) {
            digitIndex++;
            if (digitIndex > start) {
                maskedStart = i;
            }
            if (digitIndex > end) {
                maskedEnd = i;
                break;
            }
        }
    }
    input.value = maskedValue;
    input.setSelectionRange(maskedStart ?? maskLength, maskedEnd ?? maskLength);
}

function getDigitRelativeSelection(target: HTMLInputElement) {
    const rawSelectionStart = target.selectionStart || 0;
    const rawSelectionEnd = target.selectionEnd || 0;
    const value = target.value;
    const valueBeforeSelectionStart = value.slice(0, rawSelectionStart);
    const digitsBeforeSelectionStart = stripNonDigits(
        valueBeforeSelectionStart,
    );
    const selectionStartOffset =
        valueBeforeSelectionStart.length - digitsBeforeSelectionStart.length;
    const valueBeforeSelectionEnd = value.slice(0, rawSelectionEnd);
    const digitsBeforeSelectionEnd = stripNonDigits(valueBeforeSelectionEnd);
    const selectionEndOffset =
        valueBeforeSelectionEnd.length - digitsBeforeSelectionEnd.length;
    return {
        start: rawSelectionStart - selectionStartOffset,
        end: rawSelectionEnd - selectionEndOffset,
    };
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
