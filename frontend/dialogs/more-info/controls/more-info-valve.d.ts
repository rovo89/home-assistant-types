import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-attributes";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import { ValveEntity } from "../../../data/valve";
import "../../../state-control/valve/ha-state-control-valve-buttons";
import "../../../state-control/valve/ha-state-control-valve-position";
import "../../../state-control/valve/ha-state-control-valve-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-state-header";
declare class MoreInfoValve extends LitElement {
    hass: HomeAssistant;
    stateObj?: ValveEntity;
    private _mode?;
    private _setMode;
    protected willUpdate(changedProps: PropertyValues): void;
    private get _stateOverride();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-valve": MoreInfoValve;
    }
}
export {};
