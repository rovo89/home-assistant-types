import { CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-duration-input";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-textfield";
import { WaitForTriggerAction } from "../../../../../data/script";
import { HomeAssistant, ItemPath } from "../../../../../types";
import "../../trigger/ha-automation-trigger";
import { ActionElement } from "../ha-automation-action-row";
export declare class HaWaitForTriggerAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: WaitForTriggerAction;
    disabled: boolean;
    path?: ItemPath;
    static get defaultConfig(): {
        wait_for_trigger: any[];
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _timeoutChanged;
    private _continueChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-wait_for_trigger": HaWaitForTriggerAction;
    }
}
