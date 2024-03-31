import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-dialog";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../../types";
import { EnergySettingsSolarDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergySolarSettings extends LitElement implements HassDialog<EnergySettingsSolarDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _configEntries?;
    private _forecast?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsSolarDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchSolarForecastConfigEntries;
    private _handleForecastChanged;
    private _forecastCheckChanged;
    private _addForecast;
    private _statisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-solar-settings": DialogEnergySolarSettings;
    }
}
