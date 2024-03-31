import { CSSResultGroup, LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-domain-icon";
export declare class HaFilterIntegrations extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _manifests?;
    private _shouldRender;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    protected firstUpdated(): Promise<void>;
    private _integrations;
    private _integrationsSelected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-integrations": HaFilterIntegrations;
    }
}
