import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-textarea";
import "../../../../components/ha-textfield";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { AutomationRenameDialog } from "./show-dialog-automation-rename";
declare class DialogAutomationRename extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _error?;
    private _params;
    private _newName?;
    private _newDescription?;
    showDialog(params: AutomationRenameDialog): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-automation-rename": DialogAutomationRename;
    }
}
export {};
