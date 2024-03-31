import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import { EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import { StatisticsMetaData } from "../../../../data/recorder";
import { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergyGridSettings extends LitElement {
    hass: HomeAssistant;
    preferences: EnergyPreferences;
    statsMetadata?: Record<string, StatisticsMetaData>;
    validationResult?: EnergyPreferencesValidation;
    private _co2ConfigEntry?;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _fetchCO2SignalConfigEntries;
    private _addCO2Sensor;
    private _removeCO2Sensor;
    private _addFromSource;
    private _addToSource;
    private _editFromSource;
    private _editToSource;
    private _deleteFromSource;
    private _deleteToSource;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-grid-settings": EnergyGridSettings;
    }
}
