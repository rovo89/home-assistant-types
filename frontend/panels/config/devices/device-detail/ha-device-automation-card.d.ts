import { LitElement, nothing } from "lit";
import "../../../../components/chips/ha-assist-chip";
import "../../../../components/chips/ha-chip-set";
import { DeviceAutomation } from "../../../../data/device_automation";
import { EntityRegistryEntry } from "../../../../data/entity_registry";
import { HomeAssistant } from "../../../../types";
declare global {
    interface HASSDomEvents {
        "entry-selected": undefined;
    }
}
export declare abstract class HaDeviceAutomationCard<T extends DeviceAutomation> extends LitElement {
    hass: HomeAssistant;
    deviceId?: string;
    script: boolean;
    automations: T[];
    entityReg?: EntityRegistryEntry[];
    _showSecondary: boolean;
    abstract headerKey: Parameters<typeof this.hass.localize>[0];
    abstract type: "action" | "condition" | "trigger";
    private _localizeDeviceAutomation;
    constructor(localizeDeviceAutomation: HaDeviceAutomationCard<T>["_localizeDeviceAutomation"]);
    protected shouldUpdate(changedProps: any): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _toggleSecondary;
    private _handleAutomationClicked;
    static styles: import("lit").CSSResult[];
}
