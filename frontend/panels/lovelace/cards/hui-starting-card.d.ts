import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-circular-progress";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
export declare class HuiStartingCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: LovelaceCardConfig): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-starting-card": HuiStartingCard;
    }
}
