import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import "../../../../../components/buttons/ha-call-service-button";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import "../../../../../components/ha-textfield";
import { Cluster, ZHADevice } from "../../../../../data/zha";
import { HomeAssistant } from "../../../../../types";
export declare class ZHAClusterAttributes extends LitElement {
    hass?: HomeAssistant;
    device?: ZHADevice;
    selectedCluster?: Cluster;
    private _attributes;
    private _selectedAttributeId?;
    private _attributeValue?;
    private _manufacturerCodeOverride?;
    private _readingAttribute;
    private _setAttributeServiceData?;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderAttributeInteractions;
    private _fetchAttributesForCluster;
    private _computeReadAttributeServiceData;
    private _computeSetAttributeServiceData;
    private _onAttributeValueChanged;
    private _onManufacturerCodeOverrideChanged;
    private _onGetZigbeeAttributeClick;
    private _selectedAttributeChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-cluster-attributes": ZHAClusterAttributes;
    }
}
