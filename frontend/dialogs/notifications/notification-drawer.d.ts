import "@material/mwc-button";
import { LitElement, nothing } from "lit";
import "../../components/ha-icon-button-prev";
import { HomeAssistant } from "../../types";
import "./notification-item";
import "../../components/ha-header-bar";
import "../../components/ha-drawer";
export declare class HuiNotificationDrawer extends LitElement {
    hass: HomeAssistant;
    private _notifications;
    private _open;
    private _drawer?;
    private _unsubNotifications?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    showDialog({ narrow }: {
        narrow: any;
    }): void;
    closeDialog: () => void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dialogClosed;
    private _dismissAll;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-drawer": HuiNotificationDrawer;
    }
}
