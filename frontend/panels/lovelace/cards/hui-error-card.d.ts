import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { ErrorCardConfig } from "./types";
export declare class HuiErrorCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: ErrorCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-card": HuiErrorCard;
    }
}
