import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import { ScriptConfig } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
import "../automation/action/ha-automation-action";
import "./ha-script-fields";
export declare class HaManualScriptEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    disabled: boolean;
    config: ScriptConfig;
    private _scriptFields?;
    private _openFields;
    addFields(): void;
    protected updated(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fieldsChanged;
    private _sequenceChanged;
    private _itemMoved;
    private _duplicate;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "manual-script-editor": HaManualScriptEditor;
    }
}
