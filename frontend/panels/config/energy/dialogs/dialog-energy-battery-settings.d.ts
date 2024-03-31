import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../../types";
import { EnergySettingsBatteryDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyBatterySettings extends LitElement implements HassDialog<EnergySettingsBatteryDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsBatteryDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _statisticToChanged;
    private _statisticFromChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-battery-settings": DialogEnergyBatterySettings;
    }
}
