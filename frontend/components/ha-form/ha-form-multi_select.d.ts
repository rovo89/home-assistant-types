import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../ha-button-menu";
import "../ha-check-list-item";
import "../ha-checkbox";
import "../ha-formfield";
import "../ha-svg-icon";
import "../ha-textfield";
import { HaFormElement, HaFormMultiSelectData, HaFormMultiSelectSchema } from "./types";
export declare class HaFormMultiSelect extends LitElement implements HaFormElement {
    schema: HaFormMultiSelectSchema;
    data: HaFormMultiSelectData;
    label: string;
    disabled: boolean;
    private _opened;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _selectedChanged;
    private _valueChanged;
    private _handleValueChanged;
    private _handleOpen;
    private _handleClose;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-multi_select": HaFormMultiSelect;
    }
}
