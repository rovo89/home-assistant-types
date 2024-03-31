import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../components/ha-control-select";
import "../../components/ha-control-slider";
import { AlarmControlPanelEntity, AlarmMode } from "../../data/alarm_control_panel";
import { HomeAssistant } from "../../types";
export declare class HaStateControlAlarmControlPanelModes extends LitElement {
    hass: HomeAssistant;
    stateObj: AlarmControlPanelEntity;
    _currentMode?: AlarmMode;
    private _modes;
    protected willUpdate(changedProp: PropertyValues): void;
    private _getCurrentMode;
    private _setMode;
    private _valueChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-alarm_control_panel-modes": HaStateControlAlarmControlPanelModes;
    }
}
