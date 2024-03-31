import "@polymer/paper-tabs";
import "@polymer/paper-tabs/paper-tab";
import { CSSResultGroup, LitElement, nothing } from "lit";
import { HASSDomEvent } from "../../../../common/dom/fire_event";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-arrow-prev";
import "../../../../components/ha-icon-button-arrow-next";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { HomeAssistant } from "../../../../types";
import { StackCardConfig } from "../../cards/types";
import { LovelaceCardEditor } from "../../types";
import "../card-editor/hui-card-element-editor";
import type { HuiCardElementEditor } from "../card-editor/hui-card-element-editor";
import "../card-editor/hui-card-picker";
import type { ConfigChangedEvent } from "../hui-element-editor";
import { GUIModeChangedEvent } from "../types";
export declare class HuiStackCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    protected _clipboard?: LovelaceCardConfig;
    protected _config?: StackCardConfig;
    protected _selectedCard: number;
    protected _GUImode: boolean;
    protected _guiModeAvailable?: boolean;
    protected _cardEditorEl?: HuiCardElementEditor;
    setConfig(config: Readonly<StackCardConfig>): void;
    focusYamlEditor(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _handleSelectedCard(ev: any): void;
    protected _handleConfigChanged(ev: HASSDomEvent<ConfigChangedEvent>): void;
    protected _handleCardPicked(ev: any): void;
    protected _handleCopyCard(): void;
    protected _handleCutCard(): void;
    protected _handleDeleteCard(): void;
    protected _handleMove(ev: Event): void;
    protected _handleGUIModeChanged(ev: HASSDomEvent<GUIModeChangedEvent>): void;
    protected _toggleMode(): void;
    protected _setMode(value: boolean): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-stack-card-editor": HuiStackCardEditor;
    }
}
