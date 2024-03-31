import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import type { CloudCertificateParams as CloudCertificateDialogParams } from "./show-dialog-cloud-certificate";
declare class DialogCloudCertificate extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: CloudCertificateDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-certificate": DialogCloudCertificate;
    }
}
export {};
