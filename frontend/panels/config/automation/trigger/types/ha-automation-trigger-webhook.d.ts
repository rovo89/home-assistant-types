import { LitElement, PropertyValues } from "lit";
import "../../../../../components/ha-button-menu";
import "../../../../../components/ha-check-list-item";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-textfield";
import { WebhookTrigger } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
export declare class HaWebhookTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: WebhookTrigger;
    disabled: boolean;
    private _config?;
    private _unsub?;
    static get defaultConfig(): {
        allowed_methods: string[];
        local_only: boolean;
        webhook_id: string;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _generateWebhookId;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _localOnlyChanged;
    private _allowedMethodsChanged;
    private _copyUrl;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-webhook": HaWebhookTrigger;
    }
}
