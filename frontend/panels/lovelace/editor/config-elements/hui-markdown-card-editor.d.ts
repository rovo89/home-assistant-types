import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { MarkdownCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiMarkdownCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: MarkdownCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-markdown-card-editor": HuiMarkdownCardEditor;
    }
}
