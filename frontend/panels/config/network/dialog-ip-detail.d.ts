import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { IPDetailDialogParams } from "./show-ip-detail-dialog";
declare class DialogIPDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _interface?;
    showDialog(params: IPDetailDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-ip-detail": DialogIPDetail;
    }
}
export {};
