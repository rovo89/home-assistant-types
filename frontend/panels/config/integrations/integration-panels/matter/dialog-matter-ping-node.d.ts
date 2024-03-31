import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import { HomeAssistant } from "../../../../../types";
import { MatterPingNodeDialogParams } from "./show-dialog-matter-ping-node";
declare class DialogMatterPingNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _pingResult?;
    showDialog(params: MatterPingNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startPing;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-ping-node": DialogMatterPingNode;
    }
}
export {};
