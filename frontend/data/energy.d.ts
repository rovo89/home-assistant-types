import { Collection } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
import { ConfigEntry } from "./config_entries";
import { Statistics, StatisticsMetaData } from "./recorder";
export declare const emptyFlowFromGridSourceEnergyPreference: () => FlowFromGridSourceEnergyPreference;
export declare const emptyFlowToGridSourceEnergyPreference: () => FlowToGridSourceEnergyPreference;
export declare const emptyGridSourceEnergyPreference: () => GridSourceTypeEnergyPreference;
export declare const emptySolarEnergyPreference: () => SolarSourceTypeEnergyPreference;
export declare const emptyBatteryEnergyPreference: () => BatterySourceTypeEnergyPreference;
export declare const emptyGasEnergyPreference: () => GasSourceTypeEnergyPreference;
export declare const emptyWaterEnergyPreference: () => WaterSourceTypeEnergyPreference;
interface EnergySolarForecast {
    wh_hours: Record<string, number>;
}
export type EnergySolarForecasts = {
    [config_entry_id: string]: EnergySolarForecast;
};
export interface DeviceConsumptionEnergyPreference {
    stat_consumption: string;
}
export interface FlowFromGridSourceEnergyPreference {
    stat_energy_from: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
}
export interface FlowToGridSourceEnergyPreference {
    stat_energy_to: string;
    stat_compensation: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
}
export interface GridSourceTypeEnergyPreference {
    type: "grid";
    flow_from: FlowFromGridSourceEnergyPreference[];
    flow_to: FlowToGridSourceEnergyPreference[];
    cost_adjustment_day: number;
}
export interface SolarSourceTypeEnergyPreference {
    type: "solar";
    stat_energy_from: string;
    config_entry_solar_forecast: string[] | null;
}
export interface BatterySourceTypeEnergyPreference {
    type: "battery";
    stat_energy_from: string;
    stat_energy_to: string;
}
export interface GasSourceTypeEnergyPreference {
    type: "gas";
    stat_energy_from: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
}
export interface WaterSourceTypeEnergyPreference {
    type: "water";
    stat_energy_from: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
}
type EnergySource = SolarSourceTypeEnergyPreference | GridSourceTypeEnergyPreference | BatterySourceTypeEnergyPreference | GasSourceTypeEnergyPreference | WaterSourceTypeEnergyPreference;
export interface EnergyPreferences {
    energy_sources: EnergySource[];
    device_consumption: DeviceConsumptionEnergyPreference[];
}
export interface EnergyInfo {
    cost_sensors: Record<string, string>;
    solar_forecast_domains: string[];
}
export interface EnergyValidationIssue {
    type: string;
    affected_entities: [string, unknown][];
    translation_placeholders: Record<string, string>;
}
export interface EnergyPreferencesValidation {
    energy_sources: EnergyValidationIssue[][];
    device_consumption: EnergyValidationIssue[][];
}
export declare const getEnergyInfo: (hass: HomeAssistant) => Promise<EnergyInfo>;
export declare const getEnergyPreferenceValidation: (hass: HomeAssistant) => Promise<EnergyPreferencesValidation>;
export declare const getEnergyPreferences: (hass: HomeAssistant) => Promise<EnergyPreferences>;
export declare const saveEnergyPreferences: (hass: HomeAssistant, prefs: Partial<EnergyPreferences>) => Promise<EnergyPreferences>;
export interface FossilEnergyConsumption {
    [date: string]: number;
}
export declare const getFossilEnergyConsumption: (hass: HomeAssistant, startTime: Date, energy_statistic_ids: string[], co2_statistic_id: string, endTime?: Date, period?: "5minute" | "hour" | "day" | "month") => Promise<FossilEnergyConsumption>;
interface EnergySourceByType {
    grid?: GridSourceTypeEnergyPreference[];
    solar?: SolarSourceTypeEnergyPreference[];
    battery?: BatterySourceTypeEnergyPreference[];
    gas?: GasSourceTypeEnergyPreference[];
    water?: WaterSourceTypeEnergyPreference[];
}
export declare const energySourcesByType: (prefs: EnergyPreferences) => EnergySourceByType;
export interface EnergyData {
    start: Date;
    end?: Date;
    startCompare?: Date;
    endCompare?: Date;
    prefs: EnergyPreferences;
    info: EnergyInfo;
    stats: Statistics;
    statsMetadata: Record<string, StatisticsMetaData>;
    statsCompare: Statistics;
    co2SignalConfigEntry?: ConfigEntry;
    co2SignalEntity?: string;
    fossilEnergyConsumption?: FossilEnergyConsumption;
    fossilEnergyConsumptionCompare?: FossilEnergyConsumption;
}
export declare const getReferencedStatisticIds: (prefs: EnergyPreferences, info: EnergyInfo, includeTypes?: string[]) => string[];
export interface EnergyCollection extends Collection<EnergyData> {
    start: Date;
    end?: Date;
    compare?: boolean;
    prefs?: EnergyPreferences;
    clearPrefs(): void;
    setPeriod(newStart: Date, newEnd?: Date): void;
    setCompare(compare: boolean): void;
    _refreshTimeout?: number;
    _updatePeriodTimeout?: number;
    _active: number;
}
export declare const getEnergyDataCollection: (hass: HomeAssistant, options?: {
    prefs?: EnergyPreferences;
    key?: string;
}) => EnergyCollection;
export declare const getEnergySolarForecasts: (hass: HomeAssistant) => Promise<EnergySolarForecasts>;
declare const energyGasUnitClass: readonly ["volume", "energy"];
export type EnergyGasUnitClass = (typeof energyGasUnitClass)[number];
export declare const getEnergyGasUnitClass: (prefs: EnergyPreferences, statisticsMetaData?: Record<string, StatisticsMetaData>, excludeSource?: string) => EnergyGasUnitClass | undefined;
export declare const getEnergyGasUnit: (hass: HomeAssistant, prefs: EnergyPreferences, statisticsMetaData?: Record<string, StatisticsMetaData>) => string | undefined;
export declare const getEnergyWaterUnit: (hass: HomeAssistant) => string;
export declare const energyStatisticHelpUrl = "/docs/energy/faq/#troubleshooting-missing-entities";
export {};
