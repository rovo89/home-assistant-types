import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import "../../../../../components/ha-code-editor";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-dialog-header";
import { HomeAssistant } from "../../../../../types";
import { ZHAManageZigbeeDeviceDialogParams } from "./show-dialog-zha-manage-zigbee-device";
import "./zha-cluster-attributes";
import "./zha-cluster-commands";
import "./zha-device-binding";
import "./zha-device-neighbors";
import "./zha-device-signature";
import "./zha-group-binding";
import "./zha-manage-clusters";
declare class DialogZHAManageZigbeeDevice extends LitElement {
    hass: HomeAssistant;
    large: boolean;
    private _currTab;
    private _device?;
    private _bindableDevices;
    private _groups;
    showDialog(params: ZHAManageZigbeeDeviceDialogParams): Promise<void>;
    closeDialog(): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _enlarge;
    private _handleTabChanged;
    private _getTabs;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zha-manage-zigbee-device": DialogZHAManageZigbeeDevice;
    }
}
export {};
