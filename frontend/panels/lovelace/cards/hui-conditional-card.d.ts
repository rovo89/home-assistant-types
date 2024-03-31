import { HuiConditionalBase } from "../components/hui-conditional-base";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { ConditionalCardConfig } from "./types";
declare class HuiConditionalCard extends HuiConditionalBase implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): ConditionalCardConfig;
    setConfig(config: ConditionalCardConfig): void;
    getCardSize(): Promise<number> | number;
    private _createCardElement;
    private _rebuildCard;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-card": HuiConditionalCard;
    }
}
export {};
