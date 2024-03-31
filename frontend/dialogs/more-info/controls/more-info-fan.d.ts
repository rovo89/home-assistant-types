import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-list-item";
import "../../../components/ha-outlined-icon-button";
import { FanEntity } from "../../../data/fan";
import "../../../state-control/fan/ha-state-control-fan-speed";
import "../../../state-control/ha-state-control-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-control-select-container";
import "../components/ha-more-info-state-header";
declare class MoreInfoFan extends LitElement {
    hass: HomeAssistant;
    stateObj?: FanEntity;
    _presetMode?: string;
    private _toggle;
    _handleDirection(ev: any): void;
    _handlePresetMode(ev: any): void;
    _handleOscillating(ev: any): void;
    protected updated(changedProps: PropertyValues): void;
    private get _stateOverride();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-fan": MoreInfoFan;
    }
}
export {};
