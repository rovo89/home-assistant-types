import "element-internals-polyfill";
import { MdListItem } from "@material/web/list/list-item";
import { CSSResult } from "lit";
export declare class HaListItemNew extends MdListItem {
    static get styles(): CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item-new": HaListItemNew;
    }
}
