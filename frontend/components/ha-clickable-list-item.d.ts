import { CSSResultGroup } from "lit";
import { HaListItem } from "./ha-list-item";
export declare class HaClickableListItem extends HaListItem {
    href?: string;
    disableHref: boolean;
    openNewTab: boolean;
    private _anchor;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-clickable-list-item": HaClickableListItem;
    }
}
