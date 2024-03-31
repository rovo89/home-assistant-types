import "element-internals-polyfill";
import { MdInputChip } from "@material/web/chips/input-chip";
export declare class HaInputChip extends MdInputChip {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-chip": HaInputChip;
    }
}
