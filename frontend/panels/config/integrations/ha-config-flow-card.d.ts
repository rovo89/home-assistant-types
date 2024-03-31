import { LitElement, TemplateResult } from "lit";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { DataEntryFlowProgressExtended } from "./ha-config-integrations";
import "./ha-integration-action-card";
import "../../../components/ha-button-menu";
import "../../../components/ha-button";
import "../../../components/ha-list-item";
export declare class HaConfigFlowCard extends LitElement {
    hass: HomeAssistant;
    flow: DataEntryFlowProgressExtended;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _continueFlow;
    private _ignoreFlow;
    private _handleFlowUpdated;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-flow-card": HaConfigFlowCard;
    }
}
