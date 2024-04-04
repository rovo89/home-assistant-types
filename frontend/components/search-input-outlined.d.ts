import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon-button";
import "./ha-outlined-text-field";
import "./ha-svg-icon";
declare class SearchInputOutlined extends LitElement {
    hass: HomeAssistant;
    filter?: string;
    suffix: boolean;
    autofocus: boolean;
    label?: string;
    placeholder?: string;
    focus(): void;
    private _input;
    protected render(): TemplateResult;
    private _filterChanged;
    private _filterInputChanged;
    private _clearSearch;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "search-input-outlined": SearchInputOutlined;
    }
}
export {};
