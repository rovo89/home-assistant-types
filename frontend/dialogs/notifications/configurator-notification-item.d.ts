import "@material/mwc-button";
import { LitElement, nothing } from "lit";
import { PersitentNotificationEntity } from "../../data/persistent_notification";
import { HomeAssistant } from "../../types";
import "./notification-item-template";
export declare class HuiConfiguratorNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: PersitentNotificationEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        "configurator-notification-item": HuiConfiguratorNotificationItem;
    }
}
