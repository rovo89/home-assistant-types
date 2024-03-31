import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/entity/ha-entity-toggle";
import "../../../components/ha-button";
import "../../../components/ha-fab";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-overflow-menu";
import "../../../components/ha-svg-icon";
import { Blueprints } from "../../../data/blueprint";
import "../../../layouts/hass-tabs-subpage-data-table";
import { HomeAssistant, Route } from "../../../types";
declare class HaBlueprintOverview extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    blueprints: Record<"automation" | "script", Blueprints>;
    private _processedBlueprints;
    private _columns;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _showHelp;
    private _addBlueprint;
    private _addBlueprintClicked;
    private _reload;
    private _handleRowClicked;
    private _showUsed;
    private _createNew;
    private _share;
    private _reImport;
    private _delete;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-blueprint-overview": HaBlueprintOverview;
    }
}
export {};
