import { LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
export declare const pushSupported: boolean;
declare class HaPushNotificationsToggle extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    private _pushChecked;
    private _loading;
    protected render(): TemplateResult;
    connectedCallback(): Promise<void>;
    private _handlePushChange;
    private _subscribePushNotifications;
    private _unsubscribePushNotifications;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-push-notifications-toggle": HaPushNotificationsToggle;
    }
}
export {};
