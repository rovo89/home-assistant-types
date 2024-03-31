import { HomeAssistant } from "../../types";
export declare const restartCore: (hass: HomeAssistant) => Promise<void>;
export declare const updateCore: (hass: HomeAssistant, backup: boolean) => Promise<void>;
