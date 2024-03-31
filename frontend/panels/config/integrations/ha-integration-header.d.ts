import { LitElement, TemplateResult } from "lit";
import "../../../components/ha-icon-next";
import "../../../components/ha-svg-icon";
import { IntegrationManifest } from "../../../data/integration";
import { HomeAssistant } from "../../../types";
export declare class HaIntegrationHeader extends LitElement {
    hass: HomeAssistant;
    error?: string;
    warning?: string;
    localizedDomainName?: string;
    domain: string;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _onImageLoad;
    private _onImageError;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-header": HaIntegrationHeader;
    }
}
