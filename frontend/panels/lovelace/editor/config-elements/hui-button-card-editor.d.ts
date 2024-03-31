import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { ButtonCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiButtonCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ButtonCardConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card-editor": HuiButtonCardEditor;
    }
}
