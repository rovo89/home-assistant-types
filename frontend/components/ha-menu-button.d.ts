import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaMenuButton extends LitElement {
    hassio: boolean;
    narrow: boolean;
    hass: HomeAssistant;
    private _hasNotifications;
    private _show;
    private _alwaysVisible;
    private _attachNotifOnConnect;
    private _unsubNotifications?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: any): void;
    protected willUpdate(changedProps: any): void;
    private _subscribeNotifications;
    private _toggleMenu;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu-button": HaMenuButton;
    }
}
export {};
