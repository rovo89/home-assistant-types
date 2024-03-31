import "@material/mwc-button";
import "@material/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-check-list-item";
import "../../../components/search-input";
import { HomeAssistant } from "../../../types";
import "./entity-voice-settings";
import { ExposeEntityDialogParams } from "./show-dialog-expose-entity";
declare class DialogExposeEntity extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _filter?;
    private _selected;
    showDialog(params: ExposeEntityDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleSelected;
    private _itemClicked;
    private _filterChanged;
    private _filterEntities;
    private _renderItem;
    private _expose;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-expose-entity": DialogExposeEntity;
    }
}
export {};
