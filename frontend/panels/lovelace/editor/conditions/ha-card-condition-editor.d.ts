import { LitElement, PropertyValues, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import { Condition, LegacyCondition } from "../../common/validate-condition";
export declare class HaCardConditionEditor extends LitElement {
    hass: HomeAssistant;
    condition: Condition | LegacyCondition;
    _yamlMode: boolean;
    _uiAvailable: boolean;
    _uiWarnings: string[];
    _condition?: Condition;
    private _testingResult?;
    private get _editor();
    expand(): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _timeout?;
    private _testCondition;
    private _delete;
    private _onYamlChange;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-editor": HaCardConditionEditor;
    }
}
