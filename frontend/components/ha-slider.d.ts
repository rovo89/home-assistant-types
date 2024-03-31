import "element-internals-polyfill";
import { MdSlider } from "@material/web/slider/slider";
import { CSSResult } from "lit";
export declare class HaSlider extends MdSlider {
    connectedCallback(): void;
    static styles: CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-slider": HaSlider;
    }
}
