import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import { OriginalStatesDashboardStrategyConfig } from "../../strategies/original-states/original-states-dashboard-strategy";
import { LovelaceStrategyEditor } from "../../strategies/types";
export declare class HuiOriginalStatesDashboardStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: OriginalStatesDashboardStrategyConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-original-states-dashboard-strategy-editor": HuiOriginalStatesDashboardStrategyEditor;
    }
}
