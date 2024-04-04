import { CSSResultGroup, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-checkbox";
import "../ha-svg-icon";
import "../search-input";
declare global {
    interface HASSDomEvents {
        "selection-changed": SelectionChangedEvent;
        "row-click": RowClickedEvent;
        "sorting-changed": SortingChangedEvent;
    }
}
export interface RowClickedEvent {
    id: string;
}
export interface SelectionChangedEvent {
    value: string[];
}
export interface SortingChangedEvent {
    column: string;
    direction: SortingDirection;
}
export type SortingDirection = "desc" | "asc" | null;
export interface DataTableColumnContainer<T = any> {
    [key: string]: DataTableColumnData<T>;
}
export interface DataTableSortColumnData {
    sortable?: boolean;
    filterable?: boolean;
    filterKey?: string;
    valueColumn?: string;
    direction?: SortingDirection;
    groupable?: boolean;
}
export interface DataTableColumnData<T = any> extends DataTableSortColumnData {
    main?: boolean;
    title: TemplateResult | string;
    label?: TemplateResult | string;
    type?: "numeric" | "icon" | "icon-button" | "overflow" | "overflow-menu" | "flex";
    template?: (row: T) => TemplateResult | string | typeof nothing;
    width?: string;
    maxWidth?: string;
    grows?: boolean;
    forceLTR?: boolean;
    hidden?: boolean;
}
export type ClonedDataTableColumnData = Omit<DataTableColumnData, "title"> & {
    title?: TemplateResult | string;
};
export interface DataTableRowData {
    [key: string]: any;
    selectable?: boolean;
}
export interface SortableColumnContainer {
    [key: string]: ClonedDataTableColumnData;
}
export declare class HaDataTable extends LitElement {
    hass: HomeAssistant;
    columns: DataTableColumnContainer;
    data: DataTableRowData[];
    selectable: boolean;
    clickable: boolean;
    hasFab: boolean;
    /**
     * Add an extra row at the bottom of the data table
     * @type {TemplateResult}
     */
    appendRow?: any;
    autoHeight: boolean;
    id: string;
    noDataText?: string;
    searchLabel?: string;
    noLabelFloat?: boolean;
    filter: string;
    groupColumn?: string;
    sortColumn?: string;
    sortDirection: SortingDirection;
    private _filterable;
    private _filter;
    private _filteredData;
    private _headerHeight;
    private _header;
    private _items;
    private _checkableRowsCount?;
    private _checkedRows;
    private _sortColumns;
    private curRequest;
    private _savedScrollPos?;
    private _debounceSearch;
    clearSelection(): void;
    selectAll(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    willUpdate(properties: PropertyValues): void;
    protected render(): TemplateResult<1>;
    private _keyFunction;
    private _renderRow;
    private _sortFilterData;
    private _memFilterData;
    private _handleHeaderClick;
    private _handleHeaderRowCheckboxClick;
    private _handleRowCheckboxClick;
    private _handleRowClick;
    private _checkedRowsChanged;
    private _handleSearchChange;
    private _calcTableHeight;
    private _saveScrollPos;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table": HaDataTable;
    }
}
