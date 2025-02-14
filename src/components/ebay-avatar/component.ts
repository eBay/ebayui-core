import type { WithNormalizedProps } from "../../global";
import type {
    AttrString,
} from "marko/tags-html";

type Size = 32 | 40 | 48 | 56 | 64 | 96 | 128;

type ImagePlacement = "cover" | "fit" | "auto";

interface State {
    imagePlacement: ImagePlacement;
}

interface AvatarInput extends Omit<Marko.HTML.Div, `on${string}`> {
    username?: string;
    "image-placement"?: ImagePlacement;
    color?: string;
    "a11y-text"?: AttrString;
    size?: Size | `${Size}`;
    img?: Marko.AttrTag<Omit<Marko.HTML.Img, `on${string}`>>;
}

const coverApsectRatios = [
    0.75, // 3:4
    1.33, // 4:3
    1, // 1:1
];

export interface Input extends WithNormalizedProps<AvatarInput> {}

class Avatar extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            imagePlacement: "cover",
        };
    }
    onMount() {
        if (this.input.img && this.input.imagePlacement === "auto") {
            const image = this.getEl("img") as HTMLImageElement;
            image.onload = () => {
                const width = image.naturalWidth;
                const height = image.naturalHeight;
                const aspectRatio = Math.round((width / height) * 100) / 100;
                console.log(aspectRatio);
                if (coverApsectRatios.includes(aspectRatio)) {
                    this.state.imagePlacement = "cover";
                } else {
                    this.state.imagePlacement = "fit";
                }
            };
        }
    }
    onInput(input: Input) {
        let imagePlacement = input.imagePlacement || "cover";
        if (input.imagePlacement === "auto") {
            imagePlacement = "cover";
        }
        this.state = {
            imagePlacement,
        };
    }
}

export default Avatar;
