import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-dialog";
import "../../components/ha-formfield";
import "../../components/ha-switch";
import type { HomeAssistant } from "../../types";
import { ConfigEntrySystemOptionsDialogParams } from "./show-dialog-config-entry-system-options";
declare class DialogConfigEntrySystemOptions extends LitElement {
    hass: HomeAssistant;
    private _disableNewEntities;
    private _disablePolling;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: ConfigEntrySystemOptionsDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _disableNewEntitiesChanged;
    private _disablePollingChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-config-entry-system-options": DialogConfigEntrySystemOptions;
    }
}
export {};
