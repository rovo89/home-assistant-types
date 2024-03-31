import { HomeAssistant } from "../types";
interface ValidConfig {
    valid: true;
    error: null;
}
interface InvalidConfig {
    valid: false;
    error: string;
}
export declare const validateConfig: <T extends Partial<{
    trigger: unknown;
    condition: unknown;
    action: unknown;
}>>(hass: HomeAssistant, config: T) => Promise<Record<keyof T, ValidConfig | InvalidConfig>>;
export {};
