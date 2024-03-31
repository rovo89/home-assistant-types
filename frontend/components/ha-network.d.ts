import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, nothing, TemplateResult } from "lit";
import { NetworkConfig } from "../data/network";
import { HomeAssistant } from "../types";
import "./ha-checkbox";
import "./ha-settings-row";
import "./ha-svg-icon";
declare global {
    interface HASSDomEvents {
        "network-config-changed": {
            configured_adapters: string[];
        };
    }
}
export declare class HaNetwork extends LitElement {
    hass: HomeAssistant;
    networkConfig?: NetworkConfig;
    private _expanded?;
    protected render(): typeof nothing | TemplateResult<1>;
    private _handleAutoConfigureCheckboxClick;
    private _handleAdapterCheckboxClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-network": HaNetwork;
    }
}
