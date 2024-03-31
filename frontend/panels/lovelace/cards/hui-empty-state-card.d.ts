import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { EmptyStateCardConfig } from "./types";
export declare class HuiEmptyStateCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: EmptyStateCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-empty-state-card": HuiEmptyStateCard;
    }
}
