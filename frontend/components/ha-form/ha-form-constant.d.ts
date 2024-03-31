import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HaFormConstantSchema, HaFormElement } from "./types";
export declare class HaFormConstant extends LitElement implements HaFormElement {
    schema: HaFormConstantSchema;
    label: string;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-constant": HaFormConstant;
    }
}
