import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { HomeAssistant } from "../../../types";
import "../../config/energy/components/ha-energy-battery-settings";
import "../../config/energy/components/ha-energy-device-settings";
import "../../config/energy/components/ha-energy-gas-settings";
import "../../config/energy/components/ha-energy-grid-settings";
import "../../config/energy/components/ha-energy-solar-settings";
import "../../config/energy/components/ha-energy-water-settings";
import { Lovelace, LovelaceCard } from "../../lovelace/types";
export declare class EnergySetupWizard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    private _info?;
    private _step;
    private _preferences;
    getCardSize(): number;
    setConfig(config: LovelaceCardConfig): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _fetchconfig;
    private _prefsChanged;
    private _back;
    private _next;
    private _setupDone;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "energy-setup-wizard-card": EnergySetupWizard;
    }
}
