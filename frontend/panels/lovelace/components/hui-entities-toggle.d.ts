import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-switch";
import type { HomeAssistant } from "../../../types";
declare class HuiEntitiesToggle extends LitElement {
    entities?: string[];
    hass?: HomeAssistant;
    private _toggleEntities?;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-toggle": HuiEntitiesToggle;
    }
}
export {};
