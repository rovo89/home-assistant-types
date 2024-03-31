import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing, PropertyValues } from "lit";
import "../../../components/ha-control-select-menu";
import { InputSelectEntity } from "../../../data/input_select";
import { SelectEntity } from "../../../data/select";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature } from "../types";
import { SelectOptionsCardFeatureConfig } from "./types";
export declare const supportsSelectOptionsCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiSelectOptionsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: SelectEntity | InputSelectEntity;
    private _config?;
    _currentOption?: string;
    private _haSelect;
    static getStubConfig(): SelectOptionsCardFeatureConfig;
    setConfig(config: SelectOptionsCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setOption;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-select-options-card-feature": HuiSelectOptionsCardFeature;
    }
}
export {};
