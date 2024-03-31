import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-state-icon";
import { EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import { StatisticsMetaData } from "../../../../data/recorder";
import { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergyDeviceSettings extends LitElement {
    hass: HomeAssistant;
    preferences: EnergyPreferences;
    statsMetadata?: Record<string, StatisticsMetaData>;
    validationResult?: EnergyPreferencesValidation;
    protected render(): TemplateResult;
    private _addDevice;
    private _deleteDevice;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-device-settings": EnergyDeviceSettings;
    }
}
