import { LitElement, nothing } from "lit";
import "../components/ha-toast";
import type { HomeAssistant } from "../types";
import "../components/ha-button";
export interface ShowToastParams {
    message: string;
    action?: ToastActionParams;
    duration?: number;
    dismissable?: boolean;
}
export interface ToastActionParams {
    action: () => void;
    text: string;
}
declare class NotificationManager extends LitElement {
    hass: HomeAssistant;
    private _parameters?;
    private _toast;
    showDialog(parameters: ShowToastParams): Promise<void>;
    shouldUpdate(changedProperties: any): any;
    private _toastClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private buttonClicked;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-manager": NotificationManager;
    }
    interface HASSDomEvents {
        "hass-notification": ShowToastParams;
    }
}
export {};
