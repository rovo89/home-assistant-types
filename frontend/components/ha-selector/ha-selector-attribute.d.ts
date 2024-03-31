import { LitElement, PropertyValues } from "lit";
import { AttributeSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../entity/ha-entity-attribute-picker";
export declare class HaSelectorAttribute extends LitElement {
    hass: HomeAssistant;
    selector: AttributeSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        filter_entity?: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-attribute": HaSelectorAttribute;
    }
}
