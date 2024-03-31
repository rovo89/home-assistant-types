import { HomeAssistant } from "../types";
export type NumberDeviceClassUnits = {
    units: string[];
};
export declare const getNumberDeviceClassConvertibleUnits: (hass: HomeAssistant, deviceClass: string) => Promise<NumberDeviceClassUnits>;
