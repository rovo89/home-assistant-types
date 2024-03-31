import { ReactiveElement } from "lit";
import { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { LovelaceStrategyEditor } from "../types";
import { IframeViewStrategyConfig } from "./iframe-view-strategy";
export type IframeDashboardStrategyConfig = IframeViewStrategyConfig;
export declare class IframeDashboardStrategy extends ReactiveElement {
    static generate(config: IframeDashboardStrategyConfig): Promise<LovelaceConfig>;
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
    static configRequired: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "iframe-dashboard-strategy": IframeDashboardStrategy;
    }
}
