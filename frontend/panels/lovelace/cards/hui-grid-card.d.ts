import { CSSResultGroup } from "lit";
import { LovelaceCardEditor } from "../types";
import { HuiStackCard } from "./hui-stack-card";
import { GridCardConfig } from "./types";
export declare const DEFAULT_COLUMNS = 3;
declare class HuiGridCard extends HuiStackCard<GridCardConfig> {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    getCardSize(): Promise<number>;
    get columns(): number;
    get square(): boolean;
    setConfig(config: GridCardConfig): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-grid-card": HuiGridCard;
    }
}
export {};
