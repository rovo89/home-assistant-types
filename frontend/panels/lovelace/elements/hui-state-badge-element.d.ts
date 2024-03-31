import { LitElement, PropertyValues, nothing } from "lit";
import "../../../components/entity/ha-state-label-badge";
import { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import { LovelaceElement, StateBadgeElementConfig } from "./types";
export declare class HuiStateBadgeElement extends LitElement implements LovelaceElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateBadgeElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-badge-element": HuiStateBadgeElement;
    }
}
