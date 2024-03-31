import "@material/mwc-formfield";
import { LitElement, TemplateResult } from "lit";
import type { HaFormBooleanData, HaFormBooleanSchema, HaFormElement } from "./types";
import "../ha-checkbox";
export declare class HaFormBoolean extends LitElement implements HaFormElement {
    schema: HaFormBooleanSchema;
    data: HaFormBooleanData;
    label: string;
    disabled: boolean;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-boolean": HaFormBoolean;
    }
}
