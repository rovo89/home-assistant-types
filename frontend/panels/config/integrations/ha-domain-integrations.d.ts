import { LitElement } from "lit";
import { DataEntryFlowProgress } from "../../../data/data_entry_flow";
import { Brand, Integration } from "../../../data/integrations";
import { HomeAssistant } from "../../../types";
import "./ha-integration-list-item";
declare class HaDomainIntegrations extends LitElement {
    hass: HomeAssistant;
    domain: string;
    integration?: Brand | Integration;
    flowsInProgress?: DataEntryFlowProgress[];
    protected render(): import("lit-html").TemplateResult<1>;
    private _integrationPicked;
    private _flowInProgressPicked;
    private _standardPicked;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-domain-integrations": HaDomainIntegrations;
    }
}
export {};
