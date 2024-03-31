import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/buttons/ha-call-service-button";
import { HomeAssistant } from "../../../types";
import { LovelaceElement, ServiceButtonElementConfig } from "./types";
export declare class HuiServiceButtonElement extends LitElement implements LovelaceElement {
    hass?: HomeAssistant;
    private _config?;
    private _domain?;
    private _service?;
    setConfig(config: ServiceButtonElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-service-button-element": HuiServiceButtonElement;
    }
}
