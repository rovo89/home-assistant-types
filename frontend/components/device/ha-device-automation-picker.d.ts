import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import { DeviceAutomation } from "../../data/device_automation";
import { EntityRegistryEntry } from "../../data/entity_registry";
import { HomeAssistant } from "../../types";
import "../ha-select";
export declare abstract class HaDeviceAutomationPicker<T extends DeviceAutomation> extends LitElement {
    hass: HomeAssistant;
    label?: string;
    deviceId?: string;
    value?: T;
    private _automations;
    private _renderEmpty;
    _entityReg: EntityRegistryEntry[];
    protected get NO_AUTOMATION_TEXT(): string;
    protected get UNKNOWN_AUTOMATION_TEXT(): string;
    private _localizeDeviceAutomation;
    private _fetchDeviceAutomations;
    private _createNoAutomation;
    constructor(localizeDeviceAutomation: HaDeviceAutomationPicker<T>["_localizeDeviceAutomation"], fetchDeviceAutomations: HaDeviceAutomationPicker<T>["_fetchDeviceAutomations"], createNoAutomation: HaDeviceAutomationPicker<T>["_createNoAutomation"]);
    private get _value();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: any): void;
    private _updateDeviceInfo;
    private _automationChanged;
    private _setValue;
    static get styles(): CSSResultGroup;
}
