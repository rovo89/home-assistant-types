import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-circular-progress";
import "../../components/ha-code-editor";
import "../../components/ha-icon-button";
import type { HomeAssistant } from "../../types";
import type { Lovelace } from "./types";
import "../../components/ha-top-app-bar-fixed";
declare class LovelaceFullConfigEditor extends LitElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    closeEditor?: () => void;
    private _saving?;
    private _changed?;
    protected render(): TemplateResult | void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
    private _yamlChanged;
    private _closeEditor;
    private _removeConfig;
    private _handleSave;
    private get yamlEditor();
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-editor": LovelaceFullConfigEditor;
    }
}
export {};
