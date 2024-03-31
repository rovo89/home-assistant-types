import { ComboBoxLitRenderer } from "@vaadin/combo-box/lit";
import "@vaadin/combo-box/theme/material/vaadin-combo-box-light";
import type { ComboBoxDataProvider } from "@vaadin/combo-box/vaadin-combo-box-light";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon-button";
import "./ha-list-item";
import "./ha-textfield";
export declare class HaComboBox extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    value?: string;
    placeholder?: string;
    validationMessage?: string;
    helper?: string;
    errorMessage?: string;
    invalid: boolean;
    icon: boolean;
    items?: any[];
    filteredItems?: any[];
    dataProvider?: ComboBoxDataProvider<any>;
    allowCustomValue: boolean;
    itemValuePath: string;
    itemLabelPath: string;
    itemIdPath?: string;
    renderer?: ComboBoxLitRenderer<any>;
    disabled: boolean;
    required: boolean;
    opened: boolean;
    private _comboBox;
    private _inputElement;
    private _overlayMutationObserver?;
    private _bodyMutationObserver?;
    open(): Promise<void>;
    focus(): Promise<void>;
    disconnectedCallback(): void;
    get selectedItem(): any;
    setInputValue(value: string): void;
    protected render(): TemplateResult;
    private _defaultRowRenderer;
    private _clearValue;
    private _toggleOpen;
    private _openedChanged;
    private _observeBody;
    private _removeInert;
    private _filterChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-combo-box": HaComboBox;
    }
}
declare global {
    interface HASSDomEvents {
        "filter-changed": {
            value: string;
        };
        "opened-changed": {
            value: boolean;
        };
    }
}
