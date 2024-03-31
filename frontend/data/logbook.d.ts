import { HassEntity } from "home-assistant-js-websocket";
import { LocalizeFunc } from "../common/translations/localize";
import { HaEntityPickerEntityFilterFunc } from "../components/entity/ha-entity-picker";
import { HomeAssistant } from "../types";
export declare const CONTINUOUS_DOMAINS: string[];
export interface LogbookStreamMessage {
    events: LogbookEntry[];
    start_time?: number;
    end_time?: number;
    partial?: boolean;
}
export interface LogbookEntry {
    when: number;
    name: string;
    message?: string;
    entity_id?: string;
    icon?: string;
    source?: string;
    domain?: string;
    state?: string;
    context_id?: string;
    context_user_id?: string;
    context_event_type?: string;
    context_domain?: string;
    context_service?: string;
    context_entity_id?: string;
    context_entity_id_name?: string;
    context_name?: string;
    context_state?: string;
    context_source?: string;
    context_message?: string;
}
export declare const getLogbookDataForContext: (hass: HomeAssistant, startDate: string, contextId?: string) => Promise<LogbookEntry[]>;
export declare const subscribeLogbook: (hass: HomeAssistant, callbackFunction: (message: LogbookStreamMessage) => void, startDate: string, endDate: string, entityIds?: string[], deviceIds?: string[]) => Promise<() => Promise<void>>;
export declare const createHistoricState: (currentStateObj: HassEntity, state?: string) => HassEntity;
export declare const localizeTriggerSource: (localize: LocalizeFunc, source: string) => string;
export declare const localizeStateMessage: (hass: HomeAssistant, localize: LocalizeFunc, state: string, stateObj: HassEntity, domain: string) => string;
export declare const filterLogbookCompatibleEntities: HaEntityPickerEntityFilterFunc;
