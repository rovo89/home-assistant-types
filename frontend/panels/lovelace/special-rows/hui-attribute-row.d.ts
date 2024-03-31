import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-attribute-value";
import { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import "../components/hui-timestamp-display";
import { AttributeRowConfig, LovelaceRow } from "../entity-rows/types";
declare class HuiAttributeRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: AttributeRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-attribute-row": HuiAttributeRow;
    }
}
export {};
