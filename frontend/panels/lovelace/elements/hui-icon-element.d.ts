import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import { HomeAssistant } from "../../../types";
import { IconElementConfig, LovelaceElement } from "./types";
export declare class HuiIconElement extends LitElement implements LovelaceElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: IconElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-icon-element": HuiIconElement;
    }
}
