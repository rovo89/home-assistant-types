import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../../types";
import { EnergySettingsDeviceDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyDeviceSettings extends LitElement implements HassDialog<EnergySettingsDeviceDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _device?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsDeviceDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _statisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-device-settings": DialogEnergyDeviceSettings;
    }
}
