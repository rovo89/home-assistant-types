import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-card";
import { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
import "./zha-clusters-data-table";
import "@material/mwc-list/mwc-list-item";
export declare class ZHAGroupBindingControl extends LitElement {
    hass?: HomeAssistant;
    device?: ZHADevice;
    private _bindTargetIndex;
    private groups;
    private _selectedClusters;
    private _clusters;
    private _bindingOperationInProgress;
    private _groupToBind?;
    private _clustersToBind?;
    private _zhaClustersDataTable;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _bindTargetIndexChanged;
    private _onBindGroupClick;
    private _onUnbindGroupClick;
    private _handleClusterSelectionChanged;
    private _fetchClustersForZhaNode;
    private get _canBind();
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-group-binding-control": ZHAGroupBindingControl;
    }
}
