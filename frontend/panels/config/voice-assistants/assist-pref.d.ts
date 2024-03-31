import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import { CloudStatus } from "../../../data/cloud";
import { ExposeEntitySettings } from "../../../data/expose";
import type { HomeAssistant } from "../../../types";
export declare class AssistPref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatus;
    private _pipelines;
    private _preferred;
    private _devices;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _exposedEntitiesCount;
    protected render(): import("lit-html").TemplateResult<1>;
    private _editPipeline;
    private _addPipeline;
    private _openDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pref": AssistPref;
    }
}
