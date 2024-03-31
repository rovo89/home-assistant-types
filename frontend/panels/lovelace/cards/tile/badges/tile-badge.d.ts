import { HassEntity } from "home-assistant-js-websocket";
import { TemplateResult, nothing } from "lit";
import { HomeAssistant } from "../../../../../types";
import "../../../../../components/tile/ha-tile-badge";
import "../../../../../components/ha-svg-icon";
export type RenderBadgeFunction = (stateObj: HassEntity, hass: HomeAssistant) => TemplateResult | typeof nothing;
export declare const renderTileBadge: RenderBadgeFunction;
