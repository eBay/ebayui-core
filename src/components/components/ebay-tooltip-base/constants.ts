import type { Placement } from '@floating-ui/dom';

export const pointerStyles:{[index: string]: Placement} = {
    "left": "right",
    "left-top": "right-start",
    "left-bottom": "right-end",
    "right": "left",
    "right-top": "left-start",
    "right-bottom": "left-end",
    "top": "bottom",
    "top-left": "bottom-start",
    "top-right": "bottom-end",
    "bottom-right": "top-end",
    "bottom-left": "top-start",
    "bottom": "top",
} as const;