import "@material/mwc-menu";
import type { Corner, MenuCorner } from "@material/mwc-menu";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { FOCUS_TARGET } from "../dialogs/make-dialog-manager";
export declare class HaButtonMenu extends LitElement {
    protected readonly [FOCUS_TARGET]: any;
    corner: Corner;
    menuCorner: MenuCorner;
    x: number | null;
    y: number | null;
    multi: boolean;
    activatable: boolean;
    disabled: boolean;
    fixed: boolean;
    noAnchor: boolean;
    private _menu?;
    get items(): import("@material/mwc-list/mwc-list-item-base").ListItemBase[];
    get selected(): import("@material/mwc-list/mwc-list-item-base").ListItemBase | import("@material/mwc-list/mwc-list-item-base").ListItemBase[];
    focus(): void;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _handleClick;
    private get _triggerButton();
    private _setTriggerAria;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button-menu": HaButtonMenu;
    }
}
