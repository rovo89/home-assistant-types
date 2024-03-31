import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../../components/search-input";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/ha-button-menu";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-formfield";
import "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
export declare class ZHANetworkVisualizationPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    zoomedDeviceIdFromURL?: string;
    private zoomedDeviceId?;
    private _visualization?;
    private _devices;
    private _devicesByDeviceId;
    private _nodes;
    private _network?;
    private _filter?;
    private _autoZoom;
    private _enablePhysics;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _updateDevices;
    private _getLQI;
    private _getMass;
    private _getShape;
    private _buildLabel;
    private _handleSearchChange;
    private _onZoomToDevice;
    private _zoomToDevice;
    private _zoomOut;
    private _refreshTopology;
    private _filterDevices;
    private _handleAutoZoomCheckboxChange;
    private _handlePhysicsCheckboxChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-network-visualization-page": ZHANetworkVisualizationPage;
    }
}
