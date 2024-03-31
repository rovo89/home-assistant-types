import { HomeAssistant } from "../types";
export type BootstrapIntegrationsTimings = {
    [key: string]: number;
};
export declare const subscribeBootstrapIntegrations: (hass: HomeAssistant, callback: (message: BootstrapIntegrationsTimings) => void) => Promise<() => Promise<void>>;
