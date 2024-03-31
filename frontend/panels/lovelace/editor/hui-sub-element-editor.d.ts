import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-button-prev";
import type { HomeAssistant } from "../../../types";
import "./entity-row-editor/hui-row-element-editor";
import "./header-footer-editor/hui-header-footer-element-editor";
import "./feature-editor/hui-card-feature-element-editor";
import type { SubElementEditorConfig } from "./types";
declare global {
    interface HASSDomEvents {
        "go-back": undefined;
    }
}
export declare class HuiSubElementEditor extends LitElement {
    hass: HomeAssistant;
    config: SubElementEditorConfig;
    context?: any;
    private _guiModeAvailable;
    private _guiMode;
    private _editorElement?;
    protected render(): TemplateResult;
    private _goBack;
    private _toggleMode;
    private _handleGUIModeChanged;
    private _handleConfigChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sub-element-editor": HuiSubElementEditor;
    }
}
