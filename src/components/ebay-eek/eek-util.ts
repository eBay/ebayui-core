import type { WithNormalizedProps } from "../../global";

const validRanges = {
    "A+++": ["D", "E", "G"],
    "A++": ["E", "G"],
    "A+": ["F", "G"],
    A: ["G"],
};

interface EekInput extends Omit<Marko.HTML.Div, `on${string}`> {
    max: string;
    min: string;
    rating: string;
    a11yText?: string;
    size?: "regular" | "large";
}

export interface Input extends WithNormalizedProps<EekInput> {}

export default (input: Input) => {
    const { max, min, rating } = input;
    const validMax = validRanges[max as keyof typeof validRanges];
    if (!(validMax && validMax.indexOf(min) > -1)) {
        return null;
    }
    // Count from max until you reach rating
    let current = max;
    let i = 1;
    while (current !== rating) {
        i++;
        if (min === current) {
            // It's at end, didn't match rating
            return null;
        } else if (current.length > 1) {
            // Has + in string, remove one plus
            current = current.slice(0, current.length - 1);
        } else {
            // No pluses get next character code
            current = String.fromCharCode(current.charCodeAt(0) + 1);
        }
    }
    return i > 7 ? 7 : i;
};
