import { CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-textfield";
import { ConversationTrigger } from "../../../../../data/automation";
import { HomeAssistant } from "../../../../../types";
import { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaConversationTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: ConversationTrigger;
    disabled: boolean;
    private _optionInput?;
    static get defaultConfig(): Omit<ConversationTrigger, "platform">;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleKeyAdd;
    private _addOption;
    private _updateOption;
    private _removeOption;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-conversation": HaConversationTrigger;
    }
}
