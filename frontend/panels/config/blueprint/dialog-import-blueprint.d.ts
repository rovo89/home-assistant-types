import "@material/mwc-button";
import { LitElement, nothing } from "lit";
import "../../../components/ha-circular-progress";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-markdown";
import "../../../components/ha-alert";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
declare class DialogImportBlueprint extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _importing;
    private _saving;
    private _error?;
    private _result?;
    private _url?;
    private _input?;
    showDialog(params: any): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _import;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-import-blueprint": DialogImportBlueprint;
    }
}
export {};
