import { LitElement } from "lit";
import "../../../../components/ha-yaml-editor";
import type { Condition } from "../../../../data/automation";
import type { HomeAssistant, ItemPath } from "../../../../types";
import "./types/ha-automation-condition-and";
import "./types/ha-automation-condition-device";
import "./types/ha-automation-condition-not";
import "./types/ha-automation-condition-numeric_state";
import "./types/ha-automation-condition-or";
import "./types/ha-automation-condition-state";
import "./types/ha-automation-condition-sun";
import "./types/ha-automation-condition-template";
import "./types/ha-automation-condition-time";
import "./types/ha-automation-condition-trigger";
import "./types/ha-automation-condition-zone";
export default class HaAutomationConditionEditor extends LitElement {
    hass: HomeAssistant;
    condition: Condition;
    disabled: boolean;
    yamlMode: boolean;
    path?: ItemPath;
    private _processedCondition;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onYamlChange;
    private _onUiChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-editor": HaAutomationConditionEditor;
    }
}
