import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-clickable-list-item";
import type { HomeAssistant } from "../../../types";
declare class IntegrationsStartupTime extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _manifests?;
    private _setups?;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchManifests;
    private _fetchSetups;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "integrations-startup-time": IntegrationsStartupTime;
    }
}
export {};
