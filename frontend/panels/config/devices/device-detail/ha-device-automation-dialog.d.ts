import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-dialog";
import { HomeAssistant } from "../../../../types";
import "./ha-device-actions-card";
import "./ha-device-conditions-card";
import "./ha-device-triggers-card";
import { DeviceAutomationDialogParams } from "./show-dialog-device-automation";
export declare class DialogDeviceAutomation extends LitElement {
    hass: HomeAssistant;
    private _triggers;
    private _conditions;
    private _actions;
    private _params?;
    showDialog(params: DeviceAutomationDialogParams): Promise<void>;
    closeDialog(): void;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-automation": DialogDeviceAutomation;
    }
}
