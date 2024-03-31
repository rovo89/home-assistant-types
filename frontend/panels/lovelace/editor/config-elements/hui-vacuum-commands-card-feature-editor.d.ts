import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import { LovelaceCardFeatureContext, VacuumCommandsCardFeatureConfig } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiVacuumCommandsCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: VacuumCommandsCardFeatureConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-vacuum-commands-card-feature-editor": HuiVacuumCommandsCardFeatureEditor;
    }
}
