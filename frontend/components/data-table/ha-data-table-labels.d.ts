import { LitElement, TemplateResult } from "lit";
import { LabelRegistryEntry } from "../../data/label_registry";
import "../ha-label";
declare class HaDataTableLabels extends LitElement {
    labels: LabelRegistryEntry[];
    protected render(): TemplateResult;
    private _renderLabel;
    private _labelClicked;
    protected _handleIconOverflowMenuOpened(e: any): void;
    protected _handleIconOverflowMenuClosed(): void;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-labels": HaDataTableLabels;
    }
    interface HASSDomEvents {
        "label-clicked": {
            label: LabelRegistryEntry;
        };
    }
}
export {};
