import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { ItemType } from "../data/search";
import { HomeAssistant } from "../types";
import "./ha-icon-next";
import "./ha-list-item";
import "./ha-state-icon";
import "./ha-switch";
export declare class HaRelatedItems extends LitElement {
    hass: HomeAssistant;
    itemType: ItemType;
    itemId: string;
    private _entries?;
    private _blueprints?;
    private _related?;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _fetchConfigEntries;
    private _fetchBlueprints;
    protected updated(changedProps: PropertyValues): void;
    private _relatedEntities;
    private _relatedAutomations;
    private _relatedScripts;
    private _relatedGroups;
    private _relatedScenes;
    private _toEntities;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _navigateAwayClose;
    private _findRelated;
    private _openMoreInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-related-items": HaRelatedItems;
    }
}
