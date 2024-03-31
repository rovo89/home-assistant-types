import { LitElement, nothing } from "lit";
import "../../../components/ha-label-badge";
import "../../../components/ha-svg-icon";
import { LovelaceSectionElement } from "../../../data/lovelace";
import { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import { HomeAssistant } from "../../../types";
export interface ErrorSectionConfig extends LovelaceSectionConfig {
    error: string;
}
export declare const createErrorSectionElement: (config: ErrorSectionConfig) => LovelaceSectionElement;
export declare const createErrorSectionConfig: (error: string) => ErrorSectionConfig;
export declare class HuiErrorSection extends LitElement implements LovelaceSectionElement {
    hass?: HomeAssistant;
    isStrategy: boolean;
    private _config?;
    setConfig(config: ErrorSectionConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-section": HuiErrorSection;
    }
}
