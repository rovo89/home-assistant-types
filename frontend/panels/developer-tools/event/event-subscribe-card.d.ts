import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-textfield";
import "../../../components/ha-yaml-editor";
import { HomeAssistant } from "../../../types";
declare class EventSubscribeCard extends LitElement {
    hass?: HomeAssistant;
    private _eventType;
    private _subscribed?;
    private _events;
    private _eventCount;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _valueChanged;
    private _handleSubmit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "event-subscribe-card": EventSubscribeCard;
    }
}
export {};
