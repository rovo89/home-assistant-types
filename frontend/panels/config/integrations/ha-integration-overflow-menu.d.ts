import { LitElement } from "lit";
import "../../../components/ha-button-menu";
import "../../../components/ha-clickable-list-item";
import "../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../types";
export declare class HaIntegrationOverflowMenu extends LitElement {
    hass: HomeAssistant;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-overflow-menu": HaIntegrationOverflowMenu;
    }
}
