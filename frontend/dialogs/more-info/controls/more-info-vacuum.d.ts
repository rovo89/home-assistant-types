import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-attributes";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-select";
import { VacuumEntity } from "../../../data/vacuum";
import { HomeAssistant } from "../../../types";
declare class MoreInfoVacuum extends LitElement {
    hass: HomeAssistant;
    stateObj?: VacuumEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _deviceEntities;
    private _renderBattery;
    private callService;
    private handleFanSpeedChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-vacuum": MoreInfoVacuum;
    }
}
export {};
