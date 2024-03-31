import { LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-buttons-base";
import { ButtonsRowConfig, LovelaceRow } from "../entity-rows/types";
export declare class HuiButtonsRow extends LitElement implements LovelaceRow {
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    private _configEntities?;
    setConfig(config: ButtonsRowConfig): void;
    protected render(): TemplateResult | void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-buttons-row": HuiButtonsRow;
    }
}
