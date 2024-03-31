import { HassConfig, HassEntity } from "home-assistant-js-websocket";
import { EntityRegistryDisplayEntry } from "../../data/entity_registry";
import { FrontendLocaleData } from "../../data/translation";
import { HomeAssistant } from "../../types";
import { LocalizeFunc } from "../translations/localize";
export declare const computeStateDisplaySingleEntity: (localize: LocalizeFunc, stateObj: HassEntity, locale: FrontendLocaleData, config: HassConfig, entity: EntityRegistryDisplayEntry | undefined, state?: string) => string;
export declare const computeStateDisplay: (localize: LocalizeFunc, stateObj: HassEntity, locale: FrontendLocaleData, config: HassConfig, entities: HomeAssistant["entities"], state?: string) => string;
export declare const computeStateDisplayFromEntityAttributes: (localize: LocalizeFunc, locale: FrontendLocaleData, config: HassConfig, entity: EntityRegistryDisplayEntry | undefined, entityId: string, attributes: any, state: string) => string;
