import { CSSResultGroup, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-date-input";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
import "../../../components/ha-time-input";
declare class HuiInputDatetimeEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult | typeof nothing;
    private _stopEventPropagation;
    private _timeChanged;
    private _dateChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-datetime-entity-row": HuiInputDatetimeEntityRow;
    }
}
export {};
