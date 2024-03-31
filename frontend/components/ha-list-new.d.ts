import "element-internals-polyfill";
import { MdList } from "@material/web/list/list";
import { CSSResult } from "lit";
export declare class HaListNew extends MdList {
    static get styles(): CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-new": HaListNew;
    }
}
