import { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { LovelaceContainerPath } from "../lovelace-path";
export interface SuggestCardDialogParams {
    lovelaceConfig?: LovelaceConfig;
    yaml?: boolean;
    saveConfig?: (config: LovelaceConfig) => void;
    path?: LovelaceContainerPath;
    entities?: string[];
    cardConfig: LovelaceCardConfig[];
    sectionConfig?: LovelaceSectionConfig;
}
export declare const showSuggestCardDialog: (element: HTMLElement, suggestCardDialogParams: SuggestCardDialogParams) => void;
