import { LitElement, nothing, CSSResultGroup, PropertyValues } from "lit";
import { HomeAssistant } from "../../../../types";
import "../../components/hui-energy-period-selector";
import { LovelaceCard } from "../../types";
import { EnergyCardBaseConfig } from "../types";
export declare class HuiEnergyDateSelectionCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    private _config?;
    getCardSize(): Promise<number> | number;
    setConfig(config: EnergyCardBaseConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-date-selection-card": HuiEnergyDateSelectionCard;
    }
}
