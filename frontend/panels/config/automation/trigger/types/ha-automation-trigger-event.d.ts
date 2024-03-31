import { CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-yaml-editor";
import "../../../../../components/user/ha-users-picker";
import { EventTrigger } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
import { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaEventTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: EventTrigger;
    disabled: boolean;
    static get defaultConfig(): {
        event_type: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    private _wrapUsersInArray;
    private _valueChanged;
    private _dataChanged;
    private _usersChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-event": HaEventTrigger;
    }
}
