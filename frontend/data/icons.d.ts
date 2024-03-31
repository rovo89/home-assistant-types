import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
import { EntityRegistryDisplayEntry, EntityRegistryEntry } from "./entity_registry";
interface IconResources<T extends ComponentIcons | PlatformIcons | ServiceIcons> {
    resources: Record<string, T>;
}
interface PlatformIcons {
    [translation_key: string]: {
        state: Record<string, string>;
        state_attributes: Record<string, {
            state: Record<string, string>;
            default: string;
        }>;
        default: string;
    };
}
export interface ComponentIcons {
    [device_class: string]: {
        state?: Record<string, string>;
        state_attributes?: Record<string, {
            state: Record<string, string>;
            default: string;
        }>;
        default: string;
    };
}
interface ServiceIcons {
    [service: string]: string;
}
export type IconCategory = "entity" | "entity_component" | "services";
type CategoryType = {
    entity: PlatformIcons;
    entity_component: ComponentIcons;
    services: ServiceIcons;
};
export declare const getHassIcons: <T extends IconCategory>(hass: HomeAssistant, category: T, integration?: string) => Promise<IconResources<CategoryType[T]>>;
export declare const getPlatformIcons: (hass: HomeAssistant, integration: string, force?: boolean) => Promise<PlatformIcons | undefined>;
export declare const getComponentIcons: (hass: HomeAssistant, domain: string, force?: boolean) => Promise<ComponentIcons | undefined>;
export declare const getServiceIcons: (hass: HomeAssistant, domain?: string, force?: boolean) => Promise<ServiceIcons | Record<string, ServiceIcons> | undefined>;
export declare const entityIcon: (hass: HomeAssistant, stateObj: HassEntity, state?: string) => Promise<string>;
export declare const entryIcon: (hass: HomeAssistant, entry: EntityRegistryEntry | EntityRegistryDisplayEntry) => Promise<string>;
export declare const attributeIcon: (hass: HomeAssistant, state: HassEntity, attribute: string, attributeValue?: string) => Promise<string>;
export declare const serviceIcon: (hass: HomeAssistant, service: string) => Promise<string | undefined>;
export declare const domainIcon: (hass: HomeAssistant, domain: string, deviceClass?: string) => Promise<string | undefined>;
export {};
