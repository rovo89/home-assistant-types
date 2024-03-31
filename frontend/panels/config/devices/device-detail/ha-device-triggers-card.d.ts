import { DeviceTrigger } from "../../../../data/device_automation";
import { HaDeviceAutomationCard } from "./ha-device-automation-card";
export declare class HaDeviceTriggersCard extends HaDeviceAutomationCard<DeviceTrigger> {
    readonly type = "trigger";
    readonly headerKey = "ui.panel.config.devices.automation.triggers.caption";
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-triggers-card": HaDeviceTriggersCard;
    }
}
