import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import "../../../../../components/ha-textfield";
import { HomeAssistant } from "../../../../../types";
import "@material/mwc-list/mwc-list-item";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-switch";
declare class MqttSubscribeCard extends LitElement {
    hass: HomeAssistant;
    private _topic;
    private _qos;
    private _json_format;
    private _subscribed?;
    private _messages;
    private _messageCount;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _handleTopic;
    private _handleQos;
    private _handleJSONFormat;
    private _handleSubmit;
    private _handleMessage;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-subscribe-card": MqttSubscribeCard;
    }
}
export {};
