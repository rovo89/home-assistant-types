import { HomeAssistant } from "../types";
import { EntityRegistryEntry } from "./entity_registry";
import { ActionTypes } from "./script";
export declare const describeAction: <T extends keyof ActionTypes>(hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], action: ActionTypes[T], actionType?: T, ignoreAlias?: boolean) => string;
