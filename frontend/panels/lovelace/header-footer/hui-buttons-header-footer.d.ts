import { LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../../types";
import "../components/hui-buttons-base";
import { LovelaceHeaderFooter } from "../types";
import { ButtonsHeaderFooterConfig } from "./types";
export declare class HuiButtonsHeaderFooter extends LitElement implements LovelaceHeaderFooter {
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    type: "header" | "footer";
    private _configEntities?;
    getCardSize(): number;
    setConfig(config: ButtonsHeaderFooterConfig): void;
    protected render(): TemplateResult | void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-buttons-header-footer": HuiButtonsHeaderFooter;
    }
}
