import { MdOutlinedTextField } from "@material/web/textfield/outlined-text-field";
import "element-internals-polyfill";
export declare class HaOutlinedTextField extends MdOutlinedTextField {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-text-field": HaOutlinedTextField;
    }
}
