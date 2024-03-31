import { LitElement, TemplateResult, PropertyValues } from "lit";
import "../ha-textfield";
import { HaFormElement, HaFormFloatData, HaFormFloatSchema } from "./types";
import { LocalizeFunc } from "../../common/translations/localize";
export declare class HaFormFloat extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    schema: HaFormFloatSchema;
    data: HaFormFloatData;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-float": HaFormFloat;
    }
}
