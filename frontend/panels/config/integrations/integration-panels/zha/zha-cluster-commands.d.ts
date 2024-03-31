import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../../components/buttons/ha-call-service-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-select";
import "../../../../../components/ha-textfield";
import { Cluster, ZHADevice } from "../../../../../data/zha";
import { HomeAssistant } from "../../../../../types";
export declare class ZHAClusterCommands extends LitElement {
    hass?: HomeAssistant;
    isWide: boolean;
    device?: ZHADevice;
    selectedCluster?: Cluster;
    private _commands;
    private _selectedCommandId?;
    private _manufacturerCodeOverride?;
    private _issueClusterCommandServiceData?;
    private _canIssueCommand;
    private _commandData;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchCommandsForCluster;
    private _computeIssueClusterCommandServiceData;
    private _commandDataChanged;
    private _onManufacturerCodeOverrideChanged;
    private _selectedCommandChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-cluster-commands": ZHAClusterCommands;
    }
}
