import "@material/mwc-button/mwc-button";
import "app-datepicker";
import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import { datePickerDialogParams } from "./ha-date-input";
import "./ha-dialog";
export declare class HaDialogDatePicker extends LitElement {
    hass: HomeAssistant;
    value?: string;
    disabled: boolean;
    label?: string;
    private _params?;
    private _value?;
    showDialog(params: datePickerDialogParams): Promise<void>;
    closeDialog(): void;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _clear;
    private _setToday;
    private _setValue;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-date-picker": HaDialogDatePicker;
    }
}
