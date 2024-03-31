import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import { LovelaceCardFeatureContext, UpdateActionsCardFeatureConfig } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiUpdateActionsCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: UpdateActionsCardFeatureConfig): void;
    private _schema;
    private get _stateObj();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-update-actions-card-feature-editor": HuiUpdateActionsCardFeatureEditor;
    }
}
