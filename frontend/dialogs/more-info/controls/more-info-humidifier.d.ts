import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import "../../../components/ha-attribute-icon";
import { HumidifierEntity } from "../../../data/humidifier";
import "../../../state-control/humidifier/ha-state-control-humidifier-humidity";
import { HomeAssistant } from "../../../types";
import "../components/ha-more-info-control-select-container";
declare class MoreInfoHumidifier extends LitElement {
    hass: HomeAssistant;
    stateObj?: HumidifierEntity;
    _mode?: string;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleStateChanged;
    private _handleModeChanged;
    private _callServiceHelper;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-humidifier": MoreInfoHumidifier;
    }
}
export {};
