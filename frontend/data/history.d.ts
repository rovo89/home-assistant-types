import { LocalizeFunc } from "../common/translations/localize";
import { HomeAssistant } from "../types";
export interface LineChartState {
    state: string;
    last_changed: number;
    attributes?: Record<string, any>;
}
export interface LineChartEntity {
    domain: string;
    name: string;
    entity_id: string;
    states: LineChartState[];
    statistics?: LineChartState[];
}
export interface LineChartUnit {
    unit: string;
    device_class?: string;
    identifier: string;
    data: LineChartEntity[];
}
export interface TimelineState {
    state_localize: string;
    state: string;
    last_changed: number;
}
export interface TimelineEntity {
    name: string;
    entity_id: string;
    data: TimelineState[];
}
export interface HistoryResult {
    line: LineChartUnit[];
    timeline: TimelineEntity[];
}
export interface HistoryStates {
    [entityId: string]: EntityHistoryState[];
}
export interface EntityHistoryState {
    /** state */
    s: string;
    /** attributes */
    a: {
        [key: string]: any;
    };
    /** last_changed; if set, also applies to lu */
    lc?: number;
    /** last_updated */
    lu: number;
}
export interface HistoryStreamMessage {
    states: HistoryStates;
    start_time?: number;
    end_time?: number;
}
export declare const entityIdHistoryNeedsAttributes: (hass: HomeAssistant, entityId: string) => boolean;
export declare const fetchDateWS: (hass: HomeAssistant, startTime: Date, endTime: Date, entityIds: string[]) => Promise<HistoryStates>;
export declare const subscribeHistory: (hass: HomeAssistant, callbackFunction: (data: HistoryStates) => void, startTime: Date, endTime: Date, entityIds: string[]) => Promise<() => Promise<void>>;
export declare const subscribeHistoryStatesTimeWindow: (hass: HomeAssistant, callbackFunction: (data: HistoryStates) => void, hoursToShow: number, entityIds: string[], minimalResponse?: boolean, significantChangesOnly?: boolean, noAttributes?: boolean) => Promise<() => Promise<void>>;
export declare const computeHistory: (hass: HomeAssistant, stateHistory: HistoryStates, entityIds: string[], localize: LocalizeFunc, sensorNumericalDeviceClasses: string[], splitDeviceClasses?: boolean) => HistoryResult;
export declare const computeGroupKey: (unit: string | undefined, device_class: string | undefined, splitDeviceClasses: boolean) => string;
