/// <reference types="sortablejs" />
import { LitElement, nothing, PropertyValues } from "lit";
import type { SortableInstance } from "../resources/sortable";
import { ItemPath } from "../types";
declare global {
    interface HASSDomEvents {
        "item-moved": {
            oldIndex: number;
            newIndex: number;
            oldPath?: ItemPath;
            newPath?: ItemPath;
        };
        "drag-start": undefined;
        "drag-end": undefined;
    }
}
export type HaSortableOptions = Omit<SortableInstance.SortableOptions, "onStart" | "onChoose" | "onEnd">;
export declare class HaSortable extends LitElement {
    private _sortable?;
    disabled: boolean;
    path?: ItemPath;
    noStyle: boolean;
    draggableSelector?: string;
    handleSelector?: string;
    group?: string | SortableInstance.GroupOptions;
    invertSwap: boolean;
    options?: HaSortableOptions;
    rollback: boolean;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _shouldBeDestroy;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected createRenderRoot(): this;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _createSortable;
    private _handleEnd;
    private _handleStart;
    private _handleChoose;
    private _destroySortable;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sortable": HaSortable;
    }
}
