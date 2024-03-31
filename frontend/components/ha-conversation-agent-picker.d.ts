import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { Agent } from "../data/conversation";
import { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaConversationAgentPicker extends LitElement {
    value?: string;
    language?: string;
    label?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _agents?: Agent[];
    private _configEntry?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _maybeFetchConfigEntry;
    private _debouncedUpdateAgents;
    private _updateAgents;
    private _openOptionsFlow;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-conversation-agent-picker": HaConversationAgentPicker;
    }
    interface HASSDomEvents {
        "supported-languages-changed": {
            value: "*" | string[] | undefined;
        };
    }
}
