import { CSSResultGroup, LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import "../../../components/ha-relative-time";
import { HomeAssistant } from "../../../types";
import "../components/hui-timestamp-display";
import "../components/hui-warning-element";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { GlanceCardConfig } from "./types";
export declare class HuiGlanceCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GlanceCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    getCardSize(): number;
    setConfig(config: GlanceCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
    private renderEntity;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-glance-card": HuiGlanceCard;
    }
}
