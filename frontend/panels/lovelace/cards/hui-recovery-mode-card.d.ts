import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import "../../config/logs/error-log-card";
import { LovelaceCard } from "../types";
export declare class HuiRecoveryModeCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: any): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-recovery-mode-card": HuiRecoveryModeCard;
    }
}
