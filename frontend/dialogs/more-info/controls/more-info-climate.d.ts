import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import "../../../components/ha-list-item";
import "../../../components/ha-select";
import "../../../components/ha-switch";
import { ClimateEntity } from "../../../data/climate";
import "../../../state-control/climate/ha-state-control-climate-humidity";
import "../../../state-control/climate/ha-state-control-climate-temperature";
import { HomeAssistant } from "../../../types";
import "../components/ha-more-info-control-select-container";
declare class MoreInfoClimate extends LitElement {
    hass: HomeAssistant;
    stateObj?: ClimateEntity;
    private _mainControl;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _setMainControl;
    private _handleFanModeChanged;
    private _handleOperationModeChanged;
    private _handleSwingmodeChanged;
    private _handlePresetmodeChanged;
    private _callServiceHelper;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-climate": MoreInfoClimate;
    }
}
export {};
