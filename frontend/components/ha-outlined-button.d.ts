import "element-internals-polyfill";
import { MdOutlinedButton } from "@material/web/button/outlined-button";
export declare class HaOutlinedButton extends MdOutlinedButton {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-button": HaOutlinedButton;
    }
}
