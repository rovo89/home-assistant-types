import { MdMenuItem } from "@material/web/menu/menu-item";
import "element-internals-polyfill";
import { CSSResult } from "lit";
export declare class HaMenuItem extends MdMenuItem {
    static styles: CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu-item": HaMenuItem;
    }
}
