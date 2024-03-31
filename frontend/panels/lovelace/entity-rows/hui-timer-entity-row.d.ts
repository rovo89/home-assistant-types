import { LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import { EntityConfig } from "./types";
declare class HuiTimerEntityRow extends LitElement {
    hass?: HomeAssistant;
    private _config?;
    private _timeRemaining?;
    private _interval?;
    setConfig(config: EntityConfig): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _clearInterval;
    private _startInterval;
    private _calculateRemaining;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timer-entity-row": HuiTimerEntityRow;
    }
}
export {};
