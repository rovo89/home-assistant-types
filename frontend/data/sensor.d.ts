import { HomeAssistant } from "../types";
export declare const SENSOR_DEVICE_CLASS_BATTERY = "battery";
export declare const SENSOR_DEVICE_CLASS_TIMESTAMP = "timestamp";
export type SensorDeviceClassUnits = {
    units: string[];
};
export declare const getSensorDeviceClassConvertibleUnits: (hass: HomeAssistant, deviceClass: string) => Promise<SensorDeviceClassUnits>;
export type SensorNumericDeviceClasses = {
    numeric_device_classes: string[];
};
export declare const getSensorNumericDeviceClasses: (hass: HomeAssistant) => Promise<SensorNumericDeviceClasses>;
