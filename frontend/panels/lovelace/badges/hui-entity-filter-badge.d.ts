import { PropertyValues, ReactiveElement } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceBadge } from "../types";
import { EntityFilterBadgeConfig } from "./types";
export declare class HuiEntityFilterBadge extends ReactiveElement implements LovelaceBadge {
    hass: HomeAssistant;
    private _config?;
    private _elements?;
    private _configEntities?;
    private _oldEntities?;
    setConfig(config: EntityFilterBadgeConfig): void;
    protected createRenderRoot(): this;
    protected shouldUpdate(changedProperties: PropertyValues): boolean;
    protected update(changedProperties: PropertyValues): void;
    private haveEntitiesChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-filter-badge": HuiEntityFilterBadge;
    }
}
