import { HomeAssistant } from "../../types";
interface HassioDockerRegistries {
    [key: string]: {
        username: string;
        password?: string;
    };
}
export declare const fetchHassioDockerRegistries: (hass: HomeAssistant) => Promise<HassioDockerRegistries>;
export declare const addHassioDockerRegistry: (hass: HomeAssistant, data: HassioDockerRegistries) => Promise<void>;
export declare const removeHassioDockerRegistry: (hass: HomeAssistant, registry: string) => Promise<void>;
export {};
