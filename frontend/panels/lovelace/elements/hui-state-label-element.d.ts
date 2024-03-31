import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import { LovelaceElement, StateLabelElementConfig } from "./types";
declare class HuiStateLabelElement extends LitElement implements LovelaceElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateLabelElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-element": HuiStateLabelElement;
    }
}
export {};
