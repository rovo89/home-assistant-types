import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import { EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import { StatisticsMetaData } from "../../../../data/recorder";
import { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergyWaterSettings extends LitElement {
    hass: HomeAssistant;
    preferences: EnergyPreferences;
    statsMetadata?: Record<string, StatisticsMetaData>;
    validationResult?: EnergyPreferencesValidation;
    protected render(): TemplateResult;
    private _addSource;
    private _editSource;
    private _deleteSource;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-water-settings": EnergyWaterSettings;
    }
}
