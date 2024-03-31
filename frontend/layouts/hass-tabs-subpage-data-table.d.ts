import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import "@material/mwc-button/mwc-button";
import "@material/web/menu/menu";
import "@material/web/menu/menu-item";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { LocalizeFunc } from "../common/translations/localize";
import "../components/chips/ha-assist-chip";
import "../components/chips/ha-filter-chip";
import "../components/data-table/ha-data-table";
import type { DataTableColumnContainer, DataTableRowData } from "../components/data-table/ha-data-table";
import "../components/ha-dialog";
import "../components/search-input-outlined";
import type { HomeAssistant, Route } from "../types";
import "./hass-tabs-subpage";
import type { PageNavigation } from "./hass-tabs-subpage";
declare global {
    interface HASSDomEvents {
        "search-changed": {
            value: string;
        };
        "clear-filter": undefined;
    }
}
export declare class HaTabsSubpageDataTable extends LitElement {
    hass: HomeAssistant;
    localizeFunc?: LocalizeFunc;
    isWide: boolean;
    narrow: boolean;
    supervisor: boolean;
    mainPage: boolean;
    /**
     * Object with the columns.
     * @type {Object}
     */
    columns: DataTableColumnContainer;
    /**
     * Data to show in the table.
     * @type {Array}
     */
    data: DataTableRowData[];
    /**
     * Should rows be selectable.
     * @type {Boolean}
     */
    selectable: boolean;
    /**
     * Should rows be clickable.
     * @type {Boolean}
     */
    clickable: boolean;
    /**
     * Do we need to add padding for a fab.
     * @type {Boolean}
     */
    hasFab: boolean;
    /**
     * Add an extra row at the bottom of the data table
     * @type {TemplateResult}
     */
    appendRow?: TemplateResult;
    /**
     * Field with a unique id per entry in data.
     * @type {String}
     */
    id: string;
    /**
     * String to filter the data in the data table on.
     * @type {String}
     */
    filter: string;
    searchLabel?: string;
    /**
     * Number of active filters.
     * @type {Number}
     */
    filters?: any;
    /**
     * Number of current selections.
     * @type {Number}
     */
    selected?: any;
    /**
     * What path to use when the back button is pressed.
     * @type {String}
     * @attr back-path
     */
    backPath?: string;
    /**
     * Function to call when the back button is pressed.
     * @type {() => void}
     */
    backCallback?: () => void;
    /**
     * String to show when there are no records in the data table.
     * @type {String}
     */
    noDataText?: string;
    /**
     * Hides the data table and show an empty message.
     * @type {Boolean}
     */
    empty: boolean;
    route: Route;
    /**
     * Array of tabs to show on the page.
     * @type {Array}
     */
    tabs: PageNavigation[];
    /**
     * Show the filter menu.
     * @type {Boolean}
     */
    hasFilters: boolean;
    showFilters: boolean;
    initialGroupColumn?: string;
    private _sortColumn?;
    private _sortDirection;
    private _groupColumn?;
    private _selectMode;
    private _dataTable;
    private _groupByMenu;
    private _sortByMenu;
    private _showPaneController;
    clearSelection(): void;
    protected firstUpdated(): void;
    private _toggleGroupBy;
    private _toggleSortBy;
    protected render(): TemplateResult;
    private _clearFilters;
    private _toggleFilters;
    private _sortingChanged;
    private _handleSortBy;
    private _handleGroupBy;
    private _enableSelectMode;
    private _disableSelectMode;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hass-tabs-subpage-data-table": HaTabsSubpageDataTable;
    }
}
