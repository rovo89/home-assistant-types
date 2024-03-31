import { HomeAssistant } from "../types";
import { IntegrationType } from "./integration";
export type IotStandards = "zwave" | "zigbee" | "homekit" | "matter";
export interface Integration {
    integration_type: IntegrationType;
    name?: string;
    config_flow?: boolean;
    iot_standards?: IotStandards[];
    iot_class?: string;
    supported_by?: string;
    is_built_in?: boolean;
    single_config_entry?: boolean;
}
export interface Integrations {
    [domain: string]: Integration;
}
export interface Brand {
    name?: string;
    integrations?: Integrations;
    iot_standards?: IotStandards[];
    is_built_in?: boolean;
}
export interface Brands {
    [domain: string]: Integration | Brand;
}
export interface IntegrationDescriptions {
    core: {
        integration: Brands;
        helper: Integrations;
        translated_name: string[];
    };
    custom: {
        integration: Brands;
        helper: Integrations;
    };
}
export declare const getIntegrationDescriptions: (hass: HomeAssistant) => Promise<IntegrationDescriptions>;
export declare const findIntegration: (integrations: Brands | undefined, domain: string) => Integration | undefined;
