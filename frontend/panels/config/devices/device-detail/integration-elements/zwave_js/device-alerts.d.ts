import { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import { HomeAssistant } from "../../../../../../types";
import { DeviceAlert } from "../../../ha-config-device-page";
export declare const getZwaveDeviceAlerts: (hass: HomeAssistant, device: DeviceRegistryEntry) => Promise<DeviceAlert[]>;
