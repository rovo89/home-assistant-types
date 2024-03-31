import "@material/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-select";
import "../../../../components/ha-textfield";
import { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { AutomationModeDialog } from "./show-dialog-automation-mode";
declare class DialogAutomationMode extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params;
    private _newMode;
    private _newMax?;
    showDialog(params: AutomationModeDialog): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _modeChanged;
    private _valueChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-automation-mode": DialogAutomationMode;
    }
}
export {};
