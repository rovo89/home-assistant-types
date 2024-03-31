import { CSSResultGroup, LitElement } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-svg-icon";
import "../../../components/ha-button";
export declare class CloudDiscover extends LitElement {
    hass: HomeAssistant;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-discover": CloudDiscover;
    }
}
