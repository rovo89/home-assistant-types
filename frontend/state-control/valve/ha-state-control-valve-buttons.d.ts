import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import "../../components/ha-control-button";
import "../../components/ha-control-button-group";
import "../../components/ha-control-slider";
import "../../components/ha-svg-icon";
import { ValveEntity } from "../../data/valve";
import { HomeAssistant } from "../../types";
type ValveButton = "open" | "close" | "stop" | "none";
export declare const getValveButtons: import("memoize-one").MemoizedFn<(stateObj: ValveEntity) => ValveButton[]>;
export declare class HaStateControlValveButtons extends LitElement {
    hass: HomeAssistant;
    stateObj: ValveEntity;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    protected renderButton(button: ValveButton | undefined): typeof nothing | TemplateResult<1>;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-valve-buttons": HaStateControlValveButtons;
    }
}
export {};
