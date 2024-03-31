import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/entity/state-badge";
import { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import { LovelaceElement, StateIconElementConfig } from "./types";
export declare class HuiStateIconElement extends LitElement implements LovelaceElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateIconElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-icon-element": HuiStateIconElement;
    }
}
