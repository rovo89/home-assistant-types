import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { FOCUS_TARGET } from "../dialogs/make-dialog-manager";
import "./ha-menu";
export declare class HaButtonMenuNew extends LitElement {
    protected readonly [FOCUS_TARGET]: any;
    disabled: boolean;
    positioning?: "fixed" | "absolute" | "popover";
    hasOverflow: boolean;
    private _menu;
    get items(): import("@material/web/menu/menu").MenuItem[];
    focus(): void;
    protected render(): TemplateResult;
    private _handleClick;
    private get _triggerButton();
    private _setTriggerAria;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button-menu-new": HaButtonMenuNew;
    }
}
