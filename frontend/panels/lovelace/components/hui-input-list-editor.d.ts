import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
export declare class HuiInputListEditor extends LitElement {
    value?: string[];
    hass?: HomeAssistant;
    inputLabel?: string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _addEntry;
    private _valueChanged;
    private _handleKeyDown;
    private _consolidateEntries;
    private _removeEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-input-list-editor": HuiInputListEditor;
    }
}
