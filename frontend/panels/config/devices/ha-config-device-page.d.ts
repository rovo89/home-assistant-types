import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import "@material/mwc-list/mwc-list-item";
import "@polymer/paper-item/paper-item";
import "@polymer/paper-item/paper-item-body";
import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-alert";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-next";
import "../../../components/ha-svg-icon";
import { ConfigEntry } from "../../../data/config_entries";
import { EntityRegistryEntry } from "../../../data/entity_registry";
import { IntegrationManifest } from "../../../data/integration";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
import "../ha-config-section";
import "./device-detail/ha-device-entities-card";
import "./device-detail/ha-device-info-card";
import "./device-detail/ha-device-via-devices-card";
export interface EntityRegistryStateEntry extends EntityRegistryEntry {
    stateName?: string | null;
}
export interface DeviceAction {
    href?: string;
    target?: string;
    action?: (ev: any) => void;
    label: string;
    icon?: string;
    trailingIcon?: string;
    classes?: string;
}
export interface DeviceAlert {
    level: "warning" | "error" | "info";
    text: string;
}
export declare class HaConfigDevicePage extends LitElement {
    hass: HomeAssistant;
    entries: ConfigEntry[];
    manifests: IntegrationManifest[];
    deviceId: string;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    private _related?;
    private _diagnosticDownloadLinks?;
    private _deleteButtons?;
    private _deviceActions?;
    private _deviceAlerts?;
    _entityReg: EntityRegistryEntry[];
    private _logbookTime;
    private _integrations;
    private _entities;
    private _deviceIdInList;
    private _entityIds;
    private _entitiesByCategory;
    private _batteryEntity;
    private _batteryChargingEntity;
    willUpdate(changedProps: any): void;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _getDiagnosticButtons;
    private _getDeleteActions;
    private _getDeviceActions;
    private _getDeviceAlerts;
    private _computeEntityName;
    private _onImageLoad;
    private _onImageError;
    private _findRelated;
    private _createScene;
    private _showScriptDialog;
    private _showAutomationDialog;
    private _renderIntegrationInfo;
    private _showSettings;
    private _enableDevice;
    private _signUrl;
    private _deviceActionClicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-device-page": HaConfigDevicePage;
    }
}
