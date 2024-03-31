import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import "../../../../../components/ha-qr-code";
import { HomeAssistant } from "../../../../../types";
import { MatterManageFabricsDialogParams } from "./show-dialog-matter-manage-fabrics";
declare class DialogMatterManageFabrics extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _nodeDiagnostics?;
    showDialog(params: MatterManageFabricsDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchNodeDetails;
    private _removeFabric;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-manage-fabrics": DialogMatterManageFabrics;
    }
}
export {};
