import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceSectionRawConfig } from "../../../data/lovelace/config/section";
import { LovelaceConfig } from "../../../data/lovelace/config/types";
import { LovelaceViewRawConfig } from "../../../data/lovelace/config/view";
export type LovelaceCardPath = [number, number] | [number, number, number];
export type LovelaceContainerPath = [number] | [number, number];
export declare const parseLovelaceCardPath: (path: LovelaceCardPath) => {
    viewIndex: number;
    sectionIndex?: number;
    cardIndex: number;
};
export declare const parseLovelaceContainerPath: (path: LovelaceContainerPath) => {
    viewIndex: number;
    sectionIndex?: number;
};
export declare const getLovelaceContainerPath: (path: LovelaceCardPath) => LovelaceContainerPath;
export declare const findLovelaceContainer: (config: LovelaceConfig, path: LovelaceContainerPath) => LovelaceViewRawConfig | LovelaceSectionRawConfig;
export declare const findLovelaceCards: (config: LovelaceConfig, path: LovelaceContainerPath) => LovelaceCardConfig[] | undefined;
export declare const updateLovelaceContainer: (config: LovelaceConfig, path: LovelaceContainerPath, containerConfig: LovelaceViewRawConfig | LovelaceSectionRawConfig) => LovelaceConfig;
export declare const updateLovelaceCards: (config: LovelaceConfig, path: LovelaceContainerPath, cards: LovelaceCardConfig[]) => LovelaceConfig;
