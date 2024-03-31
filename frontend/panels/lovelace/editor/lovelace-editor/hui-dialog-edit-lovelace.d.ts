import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-circular-progress";
import "../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../types";
import type { Lovelace } from "../../types";
import "./hui-lovelace-editor";
export declare class HuiDialogEditLovelace extends LitElement {
    hass?: HomeAssistant;
    private _lovelace?;
    private _config?;
    private _saving;
    showDialog(lovelace: Lovelace): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _save;
    private _ConfigChanged;
    private _isConfigChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-lovelace": HuiDialogEditLovelace;
    }
}
