import { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export declare const HVAC_MODES: readonly ["auto", "heat_cool", "heat", "cool", "dry", "fan_only", "off"];
export type HvacMode = (typeof HVAC_MODES)[number];
export declare const CLIMATE_PRESET_NONE = "none";
export type HvacAction = "off" | "preheating" | "heating" | "cooling" | "drying" | "idle" | "fan";
export type ClimateEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        hvac_mode: HvacMode;
        hvac_modes: HvacMode[];
        hvac_action?: HvacAction;
        current_temperature: number;
        min_temp: number;
        max_temp: number;
        temperature: number;
        target_temp_step?: number;
        target_temp_high?: number;
        target_temp_low?: number;
        humidity?: number;
        current_humidity?: number;
        target_humidity_low?: number;
        target_humidity_high?: number;
        min_humidity?: number;
        max_humidity?: number;
        fan_mode?: string;
        fan_modes?: string[];
        preset_mode?: string;
        preset_modes?: string[];
        swing_mode?: string;
        swing_modes?: string[];
        aux_heat?: "on" | "off";
    };
};
export declare const enum ClimateEntityFeature {
    TARGET_TEMPERATURE = 1,
    TARGET_TEMPERATURE_RANGE = 2,
    TARGET_HUMIDITY = 4,
    FAN_MODE = 8,
    PRESET_MODE = 16,
    SWING_MODE = 32,
    AUX_HEAT = 64,
    TURN_OFF = 128,
    TURN_ON = 256
}
export declare const compareClimateHvacModes: (mode1: HvacMode, mode2: HvacMode) => number;
export declare const CLIMATE_HVAC_ACTION_TO_MODE: Record<HvacAction, HvacMode>;
export declare const CLIMATE_HVAC_MODE_ICONS: Record<HvacMode, string>;
export declare const climateHvacModeIcon: (mode: string) => any;
