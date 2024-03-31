import { LitElement } from "lit";
import "../../../../../../components/ha-icon-next";
import "../../../../../../components/ha-list-item-new";
import "../../../../../../components/ha-list-new";
import { HomeAssistant } from "../../../../../../types";
declare class MatterAddDeviceMain extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1>;
    private _onItemClick;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-main": MatterAddDeviceMain;
    }
}
export {};
