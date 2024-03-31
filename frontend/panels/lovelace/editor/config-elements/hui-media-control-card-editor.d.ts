import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/ha-theme-picker";
import { HomeAssistant } from "../../../../types";
import { MediaControlCardConfig } from "../../cards/types";
import { LovelaceCardEditor } from "../../types";
export declare class HuiMediaControlCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: MediaControlCardConfig): void;
    get _entity(): string;
    get _theme(): string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-control-card-editor": HuiMediaControlCardEditor;
    }
}
