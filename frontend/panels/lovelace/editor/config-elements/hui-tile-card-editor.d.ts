import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { TileCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../hui-sub-element-editor";
import "./hui-card-features-editor";
export declare class HuiTileCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    setConfig(config: TileCardConfig): void;
    private _schema;
    private _context;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _featuresChanged;
    private subElementChanged;
    private _editDetailElement;
    private _goBack;
    private _computeLabelCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-tile-card-editor": HuiTileCardEditor;
    }
}
