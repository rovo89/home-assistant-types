import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import "../../../../components/ha-textfield";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import { HomeAssistant } from "../../../../types";
import { EnergySettingsGasDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyGasSettings extends LitElement implements HassDialog<EnergySettingsGasDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _costs?;
    private _pickedDisplayUnit?;
    private _energy_units?;
    private _gas_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsGasDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleCostChanged;
    private _numberPriceChanged;
    private _priceStatChanged;
    private _priceEntityChanged;
    private _statisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-gas-settings": DialogEnergyGasSettings;
    }
}
