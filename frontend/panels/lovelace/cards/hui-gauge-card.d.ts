import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-gauge";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { GaugeCardConfig } from "./types";
export declare const DEFAULT_MIN = 0;
export declare const DEFAULT_MAX = 100;
export declare const severityMap: {
    red: string;
    green: string;
    yellow: string;
    normal: string;
};
declare class HuiGaugeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GaugeCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: GaugeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _computeSeverity;
    private _severityLevels;
    private _handleClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-gauge-card": HuiGaugeCard;
    }
}
export {};
