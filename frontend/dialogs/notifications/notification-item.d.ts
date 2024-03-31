import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, nothing } from "lit";
import { PersistentNotification } from "../../data/persistent_notification";
import { HomeAssistant } from "../../types";
import "./configurator-notification-item";
import "./persistent-notification-item";
export declare class HuiNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: HassEntity | PersistentNotification;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-item": HuiNotificationItem;
    }
}
