import { CSSResultGroup, LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-icon-button";
import "./ha-textfield";
declare class HaMultiTextField extends LitElement {
    hass?: HomeAssistant;
    value?: string[];
    disabled: boolean;
    label?: string;
    inputType?: string;
    inputSuffix?: string;
    inputPrefix?: string;
    autocomplete?: string;
    addLabel?: string;
    removeLabel?: string;
    itemIndex: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private get _items();
    private _addItem;
    private _editItem;
    private _keyDown;
    private _removeItem;
    private _fireChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-multi-textfield": HaMultiTextField;
    }
}
export {};
