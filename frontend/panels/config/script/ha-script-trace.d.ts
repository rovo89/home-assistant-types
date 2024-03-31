import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/trace/ha-trace-blueprint-config";
import "../../../components/trace/ha-trace-config";
import "../../../components/trace/ha-trace-logbook";
import "../../../components/trace/ha-trace-path-details";
import "../../../components/trace/ha-trace-timeline";
import "../../../components/trace/hat-script-graph";
import { ScriptEntity } from "../../../data/script";
import { HomeAssistant, Route } from "../../../types";
import "../../../layouts/hass-subpage";
import "../../../components/ha-button-menu";
import { EntityRegistryEntry } from "../../../data/entity_registry";
export declare class HaScriptTrace extends LitElement {
    hass: HomeAssistant;
    scriptId: string;
    scripts: ScriptEntity[];
    isWide: boolean;
    narrow: boolean;
    route: Route;
    entityRegistry: EntityRegistryEntry[];
    private _entityId?;
    private _traces?;
    private _runId?;
    private _selected?;
    private _trace?;
    private _logbookEntries?;
    private _view;
    private _graph?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    willUpdate(changedProps: any): void;
    private _pickOlderTrace;
    private _pickNewerTrace;
    private _pickTrace;
    private _pickNode;
    private _refreshTraces;
    private _loadTraces;
    private _loadTrace;
    private _downloadTrace;
    private _importTrace;
    private _loadLocalStorageTrace;
    private _loadLocalTrace;
    private _showTab;
    private _timelinePathPicked;
    private _showInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-trace": HaScriptTrace;
    }
}
