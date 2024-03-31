import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog";
import "../../components/ha-icon-button";
import "../../components/ha-list-item";
import "../../components/ha-sortable";
import { HomeAssistant } from "../../types";
import { HassDialog } from "../make-dialog-manager";
import { AreaFilterDialogParams } from "./show-area-filter-dialog";
export declare class DialogAreaFilter extends LitElement implements HassDialog<AreaFilterDialogParams> {
    hass?: HomeAssistant;
    private _dialogParams?;
    private _hidden;
    private _areas;
    showDialog(dialogParams: AreaFilterDialogParams): void;
    closeDialog(): void;
    private _submit;
    private _cancel;
    private _areaMoved;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    _toggle(ev: any): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-area-filter": DialogAreaFilter;
    }
}
