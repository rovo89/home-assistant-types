import { DeviceCondition } from "../../../../data/device_automation";
import { HaDeviceAutomationCard } from "./ha-device-automation-card";
export declare class HaDeviceConditionsCard extends HaDeviceAutomationCard<DeviceCondition> {
    readonly type = "condition";
    readonly headerKey = "ui.panel.config.devices.automation.conditions.caption";
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-conditions-card": HaDeviceConditionsCard;
    }
}
