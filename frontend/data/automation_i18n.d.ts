import "../resources/intl-polyfill";
import type { HomeAssistant } from "../types";
import { Condition, Trigger } from "./automation";
import { EntityRegistryEntry } from "./entity_registry";
export declare const describeTrigger: (trigger: Trigger, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], ignoreAlias?: boolean) => string;
export declare const describeCondition: (condition: Condition, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], ignoreAlias?: boolean) => string;
