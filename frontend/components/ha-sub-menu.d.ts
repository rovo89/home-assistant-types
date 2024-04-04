import "element-internals-polyfill";
import { CSSResult } from "lit";
import { MdSubMenu } from "@material/web/menu/sub-menu";
export declare class HaSubMenu extends MdSubMenu {
    static styles: CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sub-menu": HaSubMenu;
    }
}
