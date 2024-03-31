import "@material/mwc-button";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-markdown";
import "../../components/ha-relative-time";
import { PersistentNotification } from "../../data/persistent_notification";
import { HomeAssistant } from "../../types";
import "./notification-item-template";
export declare class HuiPersistentNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: PersistentNotification;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleDismiss;
    private _computeTooltip;
}
declare global {
    interface HTMLElementTagNameMap {
        "persistent-notification-item": HuiPersistentNotificationItem;
    }
}
