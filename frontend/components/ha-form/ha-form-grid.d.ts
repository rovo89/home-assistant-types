import "./ha-form";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import type { HaFormGridSchema, HaFormDataContainer, HaFormElement, HaFormSchema } from "./types";
import type { HomeAssistant } from "../../types";
export declare class HaFormGrid extends LitElement implements HaFormElement {
    hass: HomeAssistant;
    data: HaFormDataContainer;
    schema: HaFormGridSchema;
    disabled: boolean;
    computeLabel?: (schema: HaFormSchema, data?: HaFormDataContainer) => string;
    computeHelper?: (schema: HaFormSchema) => string;
    focus(): Promise<void>;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-grid": HaFormGrid;
    }
}
