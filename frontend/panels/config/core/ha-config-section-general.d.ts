import "@material/mwc-list/mwc-list-item";
import { LitElement, TemplateResult } from "lit";
import "../../../components/buttons/ha-progress-button";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-checkbox";
import "../../../components/ha-country-picker";
import "../../../components/ha-currency-picker";
import "../../../components/ha-formfield";
import "../../../components/ha-language-picker";
import "../../../components/ha-radio";
import "../../../components/ha-select";
import "../../../components/ha-settings-row";
import "../../../components/ha-textfield";
import "../../../components/ha-timezone-picker";
import "../../../components/map/ha-locations-editor";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
declare class HaConfigSectionGeneral extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _submitting;
    private _unitSystem?;
    private _currency?;
    private _language?;
    private _country?;
    private _name?;
    private _elevation?;
    private _timeZone?;
    private _location?;
    private _error?;
    private _updateUnits?;
    protected render(): TemplateResult;
    private _configuredUnitSystem;
    protected firstUpdated(): void;
    private _handleValueChanged;
    private _handleChange;
    private _unitSystemChanged;
    private _updateUnitsChanged;
    private _locationChanged;
    private _updateEntry;
    private _markerLocation;
    private _editLocation;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-general": HaConfigSectionGeneral;
    }
}
export {};
