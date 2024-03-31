import "@material/mwc-button";
import "@material/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-next";
import "../../../components/ha-list-item";
import { EntityRegistryEntry } from "../../../data/entity_registry";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-subpage";
import { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
declare class HaConfigAreaPage extends LitElement {
    hass: HomeAssistant;
    areaId: string;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    _entityReg: EntityRegistryEntry[];
    private _related?;
    private _logbookTime;
    private _memberships;
    private _allDeviceIds;
    private _allEntities;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _prepareEntities;
    private _renderScene;
    private _renderAutomation;
    private _renderScript;
    private _findRelated;
    private _showSettings;
    private _openEntity;
    private _openDialog;
    private _deleteConfirm;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-area-page": HaConfigAreaPage;
    }
}
export {};
