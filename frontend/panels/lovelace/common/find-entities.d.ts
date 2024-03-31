import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../../../types";
export declare const findEntities: (hass: HomeAssistant, maxEntities: number, entities: string[], entitiesFallback: string[], includeDomains?: string[], entityFilter?: (stateObj: HassEntity) => boolean) => any[];
