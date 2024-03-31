import { HomeAssistant } from "../../types";
export declare const createHassioSession: (hass: HomeAssistant) => Promise<string>;
export declare const validateHassioSession: (hass: HomeAssistant, session: string) => Promise<void>;
