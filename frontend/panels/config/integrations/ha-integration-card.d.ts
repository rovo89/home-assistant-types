import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import "@material/mwc-ripple";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-button";
import "../../../components/ha-svg-icon";
import type { EntityRegistryEntry } from "../../../data/entity_registry";
import { IntegrationLogInfo, IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { ConfigEntryExtended } from "./ha-config-integrations";
import "./ha-integration-header";
export declare class HaIntegrationCard extends LitElement {
    hass: HomeAssistant;
    domain: string;
    items: ConfigEntryExtended[];
    manifest?: IntegrationManifest;
    entityRegistryEntries: EntityRegistryEntry[];
    supportsDiagnostics: boolean;
    logInfo?: IntegrationLogInfo;
    private _ripple;
    private _shouldRenderRipple;
    protected render(): TemplateResult;
    private _renderSingleEntry;
    private _getState;
    private _getEntities;
    private _getDevices;
    private _rippleHandlers;
    private handleRippleActivate;
    private handleRippleDeactivate;
    private handleRippleFocus;
    private handleRippleBlur;
    protected handleRippleMouseEnter(): void;
    protected handleRippleMouseLeave(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-card": HaIntegrationCard;
    }
}
