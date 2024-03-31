import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
import "../components/hui-warning";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { LogbookCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare class HuiLogbookCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entities: any[];
    };
    hass: HomeAssistant;
    private _config?;
    private _time?;
    private _entityId?;
    getCardSize(): number;
    setConfig(config: LogbookCardConfig): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-logbook-card": HuiLogbookCard;
    }
}
