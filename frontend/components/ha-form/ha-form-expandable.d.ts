import { CSSResultGroup, LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-form";
import type { HaFormDataContainer, HaFormElement, HaFormExpandableSchema, HaFormSchema } from "./types";
export declare class HaFormExpendable extends LitElement implements HaFormElement {
    hass: HomeAssistant;
    data: HaFormDataContainer;
    schema: HaFormExpandableSchema;
    disabled: boolean;
    computeLabel?: (schema: HaFormSchema, data?: HaFormDataContainer) => string;
    computeHelper?: (schema: HaFormSchema) => string;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-expandable": HaFormExpendable;
    }
}
