import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../../components/ha-circular-progress";
import "../../../../../layouts/hass-tabs-subpage";
import { HomeAssistant, Route } from "../../../../../types";
import "./zha-device-pairing-status-card";
import "../../../../../components/ha-textarea";
declare class ZHAAddDevicesPage extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route?: Route;
    private _error?;
    private _discoveredDevices;
    private _formattedEvents;
    private _active;
    private _showHelp;
    private _showLogs;
    private _ieeeAddress?;
    private _addDevicesTimeoutHandle;
    private _subscribed?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _toggleLogs;
    private _handleMessage;
    private _unsubscribe;
    private _deactivate;
    private _subscribe;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-add-devices-page": ZHAAddDevicesPage;
    }
}
export {};
