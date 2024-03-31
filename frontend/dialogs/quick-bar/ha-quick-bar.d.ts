import "@material/mwc-list/mwc-list";
import { LitElement, TemplateResult, nothing } from "lit";
import "../../components/ha-circular-progress";
import "../../components/ha-icon-button";
import "../../components/ha-label";
import "../../components/ha-list-item";
import "../../components/ha-textfield";
import { HomeAssistant } from "../../types";
import { QuickBarParams } from "./show-dialog-quick-bar";
export declare class QuickBar extends LitElement {
    hass: HomeAssistant;
    private _commandItems?;
    private _entityItems?;
    private _filter;
    private _search;
    private _open;
    private _commandMode;
    private _opened;
    private _narrow;
    private _hint?;
    private _filterInputField?;
    private _focusSet;
    private _focusListElement?;
    showDialog(params: QuickBarParams): Promise<void>;
    closeDialog(): void;
    protected willUpdate(): void;
    private _getItems;
    protected render(): typeof nothing | TemplateResult<1>;
    private _initializeItemsIfNeeded;
    private _handleOpened;
    private _handleRangeChanged;
    private _renderItem;
    private _renderEntityItem;
    private _renderCommandItem;
    private processItemAndCloseDialog;
    private _handleInputKeyDown;
    private _getItemAtIndex;
    private _addSpinnerToCommandItem;
    private _handleSearchChange;
    private _clearSearch;
    private _debouncedSetFilter;
    private _setFocusFirstListItem;
    private _handleListItemKeyDown;
    private _handleItemClick;
    private _generateEntityItems;
    private _generateCommandItems;
    private _generateReloadCommands;
    private _generateServerControlCommands;
    private _generateNavigationCommands;
    private _generateNavigationPanelCommands;
    private _generateNavigationConfigSectionCommands;
    private _getNavigationInfoFromConfig;
    private _finalizeNavigationCommands;
    private _toggleIfAlreadyOpened;
    private _filterItems;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-quick-bar": QuickBar;
    }
}
