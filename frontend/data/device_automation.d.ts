import type { HaFormSchema } from "../components/ha-form/types";
import { HomeAssistant } from "../types";
import { BaseTrigger } from "./automation";
import { EntityRegistryEntry } from "./entity_registry";
export interface DeviceAutomation {
    alias?: string;
    device_id: string;
    domain: string;
    entity_id?: string;
    type?: string;
    subtype?: string;
    event?: string;
    enabled?: boolean;
    metadata?: {
        secondary: boolean;
    };
}
export interface DeviceAction extends DeviceAutomation {
    entity_id: string;
}
export interface DeviceCondition extends DeviceAutomation {
    condition: "device";
}
export type DeviceTrigger = DeviceAutomation & BaseTrigger & {
    platform: "device";
};
export interface DeviceCapabilities {
    extra_fields: HaFormSchema[];
}
export declare const fetchDeviceActions: (hass: HomeAssistant, deviceId: string) => Promise<DeviceAction[]>;
export declare const fetchDeviceConditions: (hass: HomeAssistant, deviceId: string) => Promise<DeviceCondition[]>;
export declare const fetchDeviceTriggers: (hass: HomeAssistant, deviceId: string) => Promise<DeviceTrigger[]>;
export declare const fetchDeviceActionCapabilities: (hass: HomeAssistant, action: DeviceAction) => Promise<DeviceCapabilities>;
export declare const fetchDeviceConditionCapabilities: (hass: HomeAssistant, condition: DeviceCondition) => Promise<DeviceCapabilities>;
export declare const fetchDeviceTriggerCapabilities: (hass: HomeAssistant, trigger: DeviceTrigger) => Promise<DeviceCapabilities>;
export declare const deviceAutomationsEqual: (entityRegistry: EntityRegistryEntry[], a: DeviceAutomation, b: DeviceAutomation) => boolean;
export declare const localizeDeviceAutomationAction: (hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], action: DeviceAction) => string;
export declare const localizeDeviceAutomationCondition: (hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], condition: DeviceCondition) => string;
export declare const localizeDeviceAutomationTrigger: (hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], trigger: DeviceTrigger) => string;
export declare const sortDeviceAutomations: (automationA: DeviceAutomation, automationB: DeviceAutomation) => 0 | 1 | -1;
