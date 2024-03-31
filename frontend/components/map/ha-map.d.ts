import type { LatLngTuple, LatLngExpression, Layer, Map } from "leaflet";
import { CSSResultGroup, PropertyValues, ReactiveElement } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "./ha-entity-marker";
export interface HaMapPathPoint {
    point: LatLngTuple;
    timestamp: Date;
}
export interface HaMapPaths {
    points: HaMapPathPoint[];
    color?: string;
    name?: string;
    gradualOpacity?: number;
    fullDatetime?: boolean;
}
export interface HaMapEntity {
    entity_id: string;
    color: string;
    label_mode?: "name" | "state";
    name?: string;
    focus?: boolean;
}
export declare class HaMap extends ReactiveElement {
    hass: HomeAssistant;
    entities?: string[] | HaMapEntity[];
    paths?: HaMapPaths[];
    layers?: Layer[];
    autoFit: boolean;
    renderPassive: boolean;
    interactiveZones: boolean;
    fitZones: boolean;
    darkMode: boolean;
    zoom: number;
    private _loaded;
    leafletMap?: Map;
    private Leaflet?;
    private _resizeObserver?;
    private _mapItems;
    private _mapFocusItems;
    private _mapZones;
    private _mapPaths;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected update(changedProps: PropertyValues): void;
    private _updateMapStyle;
    private _loadMap;
    fitMap(options?: {
        zoom?: number;
        pad?: number;
    }): void;
    fitBounds(boundingbox: LatLngExpression[], options?: {
        zoom?: number;
        pad?: number;
    }): void;
    private _drawLayers;
    private _computePathTooltip;
    private _drawPaths;
    private _drawEntities;
    private _attachObserver;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-map": HaMap;
    }
}
