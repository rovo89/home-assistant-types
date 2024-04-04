import "element-internals-polyfill";
import { CSSResult } from "lit";
import { MdMenu } from "@material/web/menu/menu";
export declare class HaMenu extends MdMenu {
    static styles: CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu": HaMenu;
    }
}
