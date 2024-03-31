import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-circular-progress";
import "../../../../components/ha-settings-row";
import "../../../../components/ha-switch";
import { CloudStatusLoggedIn } from "../../../../data/cloud";
import { HomeAssistant } from "../../../../types";
export declare class CloudWebhooks extends LitElement {
    hass?: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    narrow: boolean;
    private _cloudHooks?;
    private _localHooks?;
    private _progress;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _showDialog;
    private _handleManageButton;
    private _enableWebhook;
    private _disableWebhook;
    private _fetchData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-webhooks": CloudWebhooks;
    }
}
