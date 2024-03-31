import { CheckListItemBase } from "@material/mwc-list/mwc-check-list-item-base";
export declare class HaCheckListItem extends CheckListItemBase {
    onChange(event: any): Promise<void>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-check-list-item": HaCheckListItem;
    }
}
