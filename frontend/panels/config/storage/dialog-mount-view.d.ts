import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/buttons/ha-progress-button";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-icon-button";
import { HomeAssistant } from "../../../types";
import { MountViewDialogParams } from "./show-dialog-view-mount";
declare class ViewMountDialog extends LitElement {
    hass: HomeAssistant;
    private _data?;
    private _waiting?;
    private _error?;
    private _validationError?;
    private _validationWarning?;
    private _existing?;
    private _showCIFSVersion?;
    private _reloadMounts?;
    showDialog(dialogParams: MountViewDialogParams): Promise<Promise<void>>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
    private _computeHelperCallback;
    private _computeErrorCallback;
    private _computeWarningCallback;
    private _valueChanged;
    private _connectMount;
    private _deleteMount;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-mount-view": ViewMountDialog;
    }
}
export {};
