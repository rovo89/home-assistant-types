import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-circular-progress";
import "../../../components/ha-fab";
import "../../../components/ha-icon";
import "../../../components/ha-icon-overflow-menu";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../types";
declare class HaConfigBackup extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _backupData?;
    private _columns;
    private _getItems;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _getBackups;
    private _downloadBackup;
    private _generateBackup;
    private _removeBackup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup": HaConfigBackup;
    }
}
export {};
