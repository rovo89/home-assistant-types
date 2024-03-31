import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-circular-progress";
import "../../../../../components/ha-icon-button";
import { ZHADeviceEndpoint, ZHAGroup } from "../../../../../data/zha";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-subpage";
import { HomeAssistant } from "../../../../../types";
import "../../../ha-config-section";
import "./zha-device-endpoint-data-table";
import "@material/mwc-list/mwc-list";
import "../../../../../components/ha-list-item";
export declare class ZHAGroupPage extends LitElement {
    hass: HomeAssistant;
    group?: ZHAGroup;
    groupId: number;
    narrow: boolean;
    isWide: boolean;
    deviceEndpoints: ZHADeviceEndpoint[];
    private _processingAdd;
    private _processingRemove;
    private _filteredDeviceEndpoints;
    private _selectedDevicesToAdd;
    private _selectedDevicesToRemove;
    private _zhaAddMembersDataTable;
    private _zhaRemoveMembersDataTable;
    private _firstUpdatedCalled;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _filterDevices;
    private _handleAddSelectionChanged;
    private _handleRemoveSelectionChanged;
    private _addMembersToGroup;
    private _removeMembersFromGroup;
    private _deleteGroup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-group-page": ZHAGroupPage;
    }
}
