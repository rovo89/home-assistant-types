import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-icon-picker";
import "../../../components/ha-settings-row";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import { CategoryRegistryDetailDialogParams } from "./show-dialog-category-registry-detail";
declare class DialogCategoryDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _icon;
    private _error?;
    private _params?;
    private _submitting?;
    showDialog(params: CategoryRegistryDetailDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _isNameValid;
    private _nameChanged;
    private _iconChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-category-registry-detail": DialogCategoryDetail;
    }
}
export {};
