import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { HumidifierCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../hui-sub-element-editor";
import "./hui-card-features-editor";
export declare class HuiHumidifierCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    setConfig(config: HumidifierCardConfig): void;
    private _context;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _featuresChanged;
    private subElementChanged;
    private _editDetailElement;
    private _goBack;
    private _computeLabelCallback;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-card-editor": HuiHumidifierCardEditor;
    }
}
