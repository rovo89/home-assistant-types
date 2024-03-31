import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon";
export declare class HaDomainIcon extends LitElement {
    hass: HomeAssistant;
    domain?: string;
    deviceClass?: string;
    icon?: string;
    brandFallback?: boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-domain-icon": HaDomainIcon;
    }
}
