import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-control-button";
import "../../components/ha-control-switch";
import "../../components/ha-state-icon";
import { LockEntity } from "../../data/lock";
import { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        "lock-service-called": undefined;
    }
}
export declare class HaStateControlLockToggle extends LitElement {
    hass: HomeAssistant;
    stateObj: LockEntity;
    private _isOn;
    willUpdate(changedProps: PropertyValues): void;
    private _valueChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-lock-toggle": HaStateControlLockToggle;
    }
}
