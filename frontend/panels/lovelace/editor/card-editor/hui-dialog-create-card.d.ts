import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./hui-card-picker";
import "./hui-entity-picker-table";
import { CreateCardDialogParams } from "./show-create-card-dialog";
declare global {
    interface HASSDomEvents {
        "selected-changed": SelectedChangedEvent;
    }
}
interface SelectedChangedEvent {
    selectedEntities: string[];
}
export declare class HuiCreateDialogCard extends LitElement implements HassDialog<CreateCardDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _containerConfig;
    private _selectedEntities;
    private _currTabIndex;
    showDialog(params: CreateCardDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _ignoreKeydown;
    static get styles(): CSSResultGroup;
    private _handleCardPicked;
    private _handleTabChanged;
    private _handleSelectedChanged;
    private _cancel;
    private _suggestCards;
    private _allEntities;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-create-card": HuiCreateDialogCard;
    }
}
export {};
