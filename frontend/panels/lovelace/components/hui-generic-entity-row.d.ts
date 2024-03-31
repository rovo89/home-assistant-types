import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-relative-time";
import { HomeAssistant } from "../../../types";
import { EntitiesCardEntityConfig } from "../cards/types";
export declare class HuiGenericEntityRow extends LitElement {
    hass?: HomeAssistant;
    config?: EntitiesCardEntityConfig;
    secondaryText?: string;
    hideName: boolean;
    catchInteraction?: any;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-generic-entity-row": HuiGenericEntityRow;
    }
}
