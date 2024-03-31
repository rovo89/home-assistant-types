import { CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-textfield";
import { StopAction } from "../../../../../data/script";
import { HomeAssistant } from "../../../../../types";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaStopAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: StopAction;
    disabled: boolean;
    static get defaultConfig(): {
        stop: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _stopChanged;
    private _responseChanged;
    private _errorChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-stop": HaStopAction;
    }
}
