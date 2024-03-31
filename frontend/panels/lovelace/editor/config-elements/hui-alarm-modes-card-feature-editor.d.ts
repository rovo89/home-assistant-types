import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import { LovelaceCardFeatureContext, AlarmModesCardFeatureConfig } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
import "../../../../components/ha-form/ha-form";
export declare class HuiAlarmModesCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: AlarmModesCardFeatureConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alarm-modes-card-feature-editor": HuiAlarmModesCardFeatureEditor;
    }
}
