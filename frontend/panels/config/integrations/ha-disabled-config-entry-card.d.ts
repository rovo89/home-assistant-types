import { LitElement, TemplateResult } from "lit";
import "../../../components/ha-button";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { ConfigEntryExtended } from "./ha-config-integrations";
import "./ha-integration-action-card";
export declare class HaDisabledConfigEntryCard extends LitElement {
    hass: HomeAssistant;
    entry: ConfigEntryExtended;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _handleEnable;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-disabled-config-entry-card": HaDisabledConfigEntryCard;
    }
}
