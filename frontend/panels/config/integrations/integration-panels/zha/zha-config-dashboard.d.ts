import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-fab";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-next";
import "../../../../../layouts/hass-tabs-subpage";
import type { PageNavigation } from "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../../ha-config-section";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-settings-row";
export declare const zhaTabs: PageNavigation[];
declare class ZHAConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId?: string;
    private _configuration?;
    private _networkSettings?;
    private _generatingBackup;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _fetchConfiguration;
    private _fetchSettings;
    private _showChannelMigrationDialog;
    private _createAndDownloadBackup;
    private _openOptionFlow;
    private _dataChanged;
    private _updateConfiguration;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-config-dashboard": ZHAConfigDashboard;
    }
}
export {};
