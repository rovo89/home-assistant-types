import type { LovelaceCardConfig } from "./card";
import type { LovelaceStrategyConfig } from "./strategy";
export interface LovelaceBaseSectionConfig {
    title?: string;
}
export interface LovelaceSectionConfig extends LovelaceBaseSectionConfig {
    type?: string;
    cards?: LovelaceCardConfig[];
}
export interface LovelaceStrategySectionConfig extends LovelaceBaseSectionConfig {
    strategy: LovelaceStrategyConfig;
}
export type LovelaceSectionRawConfig = LovelaceSectionConfig | LovelaceStrategySectionConfig;
export declare function isStrategySection(section: LovelaceSectionRawConfig): section is LovelaceStrategySectionConfig;
