import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { IframeCardConfig } from "./types";
export declare class HuiIframeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): IframeCardConfig;
    isPanel: boolean;
    hass?: HomeAssistant;
    protected _config?: IframeCardConfig;
    getCardSize(): number;
    setConfig(config: IframeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-iframe-card": HuiIframeCard;
    }
}
