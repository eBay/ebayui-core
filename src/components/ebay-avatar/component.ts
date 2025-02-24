import type { WithNormalizedProps } from "../../global";
import type { AttrString } from "marko/tags-html";

type Size = 32 | 40 | 48 | 56 | 64 | 96 | 128;

type ImagePlacement = "cover" | "fit";

interface State {
    imagePlacement: ImagePlacement;
}

interface AvatarInput extends Omit<Marko.HTML.Div, `on${string}`> {
    username?: string;
    color?: string;
    "a11y-text"?: AttrString;
    size?: Size | `${Size}`;
    img?: Marko.AttrTag<Omit<Marko.HTML.Img, `on${string}`>>;
    "known-aspect-ratio"?: number;
}

export interface Input extends WithNormalizedProps<AvatarInput> {}

class Avatar extends Marko.Component<Input, State> {
    onCreate(input: Input) {
        this.state = {
            imagePlacement:
                input.knownAspectRatio &&
                (input.knownAspectRatio < 3 / 4 ||
                    input.knownAspectRatio > 4 / 3)
                    ? "fit"
                    : "cover",
        };
    }
    handleImageLoad(_event: Event, el: HTMLImageElement) {
        const aspectRatio = el.naturalWidth / el.naturalHeight;
        if (aspectRatio < 3 / 4 || aspectRatio > 4 / 3) {
            this.state.imagePlacement = "fit";
        } else {
            this.state.imagePlacement = "cover";
        }
    }
}

export default Avatar;
