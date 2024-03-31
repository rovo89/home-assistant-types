import "element-internals-polyfill";
import { MdOutlinedIconButton } from "@material/web/iconbutton/outlined-icon-button";
export declare class HaOutlinedIconButton extends MdOutlinedIconButton {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-icon-button": HaOutlinedIconButton;
    }
}
