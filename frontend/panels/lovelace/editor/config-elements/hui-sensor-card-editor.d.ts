import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { SensorCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiSensorCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: SensorCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sensor-card-editor": HuiSensorCardEditor;
    }
}
