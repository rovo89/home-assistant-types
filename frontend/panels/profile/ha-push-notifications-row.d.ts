import { LitElement, TemplateResult } from "lit";
import "../../components/ha-settings-row";
import { HomeAssistant } from "../../types";
declare class HaPushNotificationsRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-push-notifications-row": HaPushNotificationsRow;
    }
}
export {};
