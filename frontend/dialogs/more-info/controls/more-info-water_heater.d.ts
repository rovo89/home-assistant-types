import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import { WaterHeaterEntity } from "../../../data/water_heater";
import "../../../state-control/water_heater/ha-state-control-water_heater-temperature";
import { HomeAssistant } from "../../../types";
import "../components/ha-more-info-control-select-container";
declare class MoreInfoWaterHeater extends LitElement {
    hass: HomeAssistant;
    stateObj?: WaterHeaterEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleOperationModeChanged;
    private _handleAwayModeChanged;
    private _callServiceHelper;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-water_heater": MoreInfoWaterHeater;
    }
}
export {};
