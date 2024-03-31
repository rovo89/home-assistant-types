import { DeviceAction } from "../../../../data/device_automation";
import { HaDeviceAutomationCard } from "./ha-device-automation-card";
export declare class HaDeviceActionsCard extends HaDeviceAutomationCard<DeviceAction> {
    readonly type = "action";
    readonly headerKey = "ui.panel.config.devices.automation.actions.caption";
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-actions-card": HaDeviceActionsCard;
    }
}
