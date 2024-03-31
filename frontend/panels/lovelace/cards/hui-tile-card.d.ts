import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import "../../../components/tile/ha-tile-badge";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-image";
import "../../../components/tile/ha-tile-info";
import { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import "../components/hui-timestamp-display";
import type { LovelaceCard, LovelaceCardEditor, LovelaceLayoutOptions } from "../types";
import type { ThermostatCardConfig, TileCardConfig } from "./types";
export declare const getEntityDefaultTileIconAction: (entityId: string) => "toggle" | "more-info";
export declare class HuiTileCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): TileCardConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ThermostatCardConfig): void;
    getCardSize(): number;
    getLayoutOptions(): LovelaceLayoutOptions;
    private _handleAction;
    private _handleIconAction;
    private _getImageUrl;
    private _computeStateColor;
    private _renderStateContent;
    private _renderState;
    private _ripple;
    private _shouldRenderRipple;
    private _rippleHandlers;
    private handleRippleActivate;
    private handleRippleDeactivate;
    private handleRippleMouseEnter;
    private handleRippleMouseLeave;
    get hasCardAction(): boolean;
    get hasIconAction(): boolean;
    protected render(): typeof nothing | TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-tile-card": HuiTileCard;
    }
}
