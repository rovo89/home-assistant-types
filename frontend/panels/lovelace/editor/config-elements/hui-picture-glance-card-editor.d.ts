import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { ActionConfig } from "../../../../data/lovelace/config/action";
import type { HomeAssistant } from "../../../../types";
import type { PictureGlanceCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiPictureGlanceCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    setConfig(config: PictureGlanceCardConfig): void;
    get _tap_action(): ActionConfig;
    get _hold_action(): ActionConfig;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _changed;
    private _computeLabelCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-glance-card-editor": HuiPictureGlanceCardEditor;
    }
}
