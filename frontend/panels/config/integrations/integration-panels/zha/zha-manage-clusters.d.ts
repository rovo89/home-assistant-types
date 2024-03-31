import "@material/mwc-list/mwc-list-item";
import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import { Cluster, ZHADevice } from "../../../../../data/zha";
import { HomeAssistant } from "../../../../../types";
import "./zha-cluster-attributes";
import "./zha-cluster-commands";
declare global {
    interface HASSDomEvents {
        "zha-cluster-selected": {
            cluster?: Cluster;
        };
    }
}
export declare class ZHAManageClusters extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    device?: ZHADevice;
    private _selectedClusterIndex;
    private _clusters;
    private _selectedCluster?;
    private _currTab;
    private _clustersLoaded;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchClustersForZhaDevice;
    private _handleTabChanged;
    private _selectedClusterChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-manage-clusters": ZHAManageClusters;
    }
}
