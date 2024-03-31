import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-next";
import "../../../components/search-input";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
declare class DialogHardwareAvailable extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _hardware?;
    private _filter?;
    showDialog(): Promise<Promise<void>>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-hardware-available": DialogHardwareAvailable;
    }
}
export {};
