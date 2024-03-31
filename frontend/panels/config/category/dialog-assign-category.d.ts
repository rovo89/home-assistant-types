import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-icon-picker";
import "../../../components/ha-settings-row";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import "./ha-category-picker";
import { AssignCategoryDialogParams } from "./show-dialog-assign-category";
declare class DialogAssignCategory extends LitElement {
    hass: HomeAssistant;
    private _scope?;
    private _category?;
    private _error?;
    private _params?;
    private _submitting?;
    showDialog(params: AssignCategoryDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _categoryChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-assign-category": DialogAssignCategory;
    }
}
export {};
