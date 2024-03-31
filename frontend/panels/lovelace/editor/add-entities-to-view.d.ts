import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import { HomeAssistant } from "../../../types";
export declare const addEntitiesToLovelaceView: (element: HTMLElement, hass: HomeAssistant, cardConfig: LovelaceCardConfig[], sectionConfig?: LovelaceSectionConfig, entities?: string[]) => Promise<void>;
