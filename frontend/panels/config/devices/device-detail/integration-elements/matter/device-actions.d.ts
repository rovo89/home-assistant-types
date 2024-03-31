import { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import type { DeviceAction } from "../../../ha-config-device-page";
export declare const getMatterDeviceActions: (el: HTMLElement, hass: HomeAssistant, device: DeviceRegistryEntry) => Promise<DeviceAction[]>;
