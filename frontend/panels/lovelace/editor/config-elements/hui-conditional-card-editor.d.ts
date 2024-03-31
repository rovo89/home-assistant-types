import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-svg-icon";
import { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { ConditionalCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../card-editor/hui-card-element-editor";
import "../card-editor/hui-card-picker";
import "../conditions/ha-card-conditions-editor";
import "../hui-element-editor";
export declare class HuiConditionalCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    protected _clipboard?: LovelaceCardConfig;
    private _config?;
    private _GUImode;
    private _guiModeAvailable?;
    private _cardTab;
    private _cardEditorEl?;
    setConfig(config: ConditionalCardConfig): void;
    focusYamlEditor(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _selectTab;
    private _toggleMode;
    private _setMode;
    private _handleGUIModeChanged;
    private _handleCardPicked;
    protected _handleCopyCard(): void;
    private _handleCardChanged;
    private _handleReplaceCard;
    private _conditionChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-card-editor": HuiConditionalCardEditor;
    }
}
