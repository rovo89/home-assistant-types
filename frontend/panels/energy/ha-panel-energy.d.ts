import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-menu-button";
import "../../components/ha-list-item";
import "../../components/ha-top-app-bar-fixed";
import { HomeAssistant } from "../../types";
import "../lovelace/components/hui-energy-period-selector";
import "../lovelace/views/hui-view";
declare class PanelEnergy extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _viewIndex;
    private _lovelace?;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _setLovelace;
    private _navigateConfig;
    private _dumpCSV;
    private _reloadView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-energy": PanelEnergy;
    }
}
declare global {
    interface HASSDomEvents {
        "reload-energy-panel": undefined;
    }
}
export {};
