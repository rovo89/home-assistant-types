import "@material/mwc-ripple";
import { HassConfig, HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { LocalizeFunc } from "../../../common/translations/localize";
import "../../../components/ha-card";
import { EntityRegistryDisplayEntry } from "../../../data/entity_registry";
import { FrontendLocaleData } from "../../../data/translation";
import { Themes } from "../../../data/ws-themes";
import { HomeAssistant } from "../../../types";
import { LovelaceCard, LovelaceCardEditor, LovelaceLayoutOptions } from "../types";
import { ButtonCardConfig } from "./types";
export declare const getEntityDefaultButtonAction: (entityId?: string) => "toggle" | "more-info";
export declare class HuiButtonCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): ButtonCardConfig;
    hass: HomeAssistant;
    private _config?;
    _stateObj?: HassEntity;
    _themes: Themes;
    _localize: LocalizeFunc;
    _locale: FrontendLocaleData;
    _hassConfig: HassConfig;
    _entity?: EntityRegistryDisplayEntry;
    private _ripple;
    private _shouldRenderRipple;
    private getStateColor;
    getCardSize(): number;
    getLayoutOptions(): LovelaceLayoutOptions;
    setConfig(config: ButtonCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _rippleHandlers;
    private handleRippleActivate;
    private handleRippleDeactivate;
    private handleRippleMouseEnter;
    private handleRippleMouseLeave;
    static get styles(): CSSResultGroup;
    private _computeColor;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card": HuiButtonCard;
    }
}
