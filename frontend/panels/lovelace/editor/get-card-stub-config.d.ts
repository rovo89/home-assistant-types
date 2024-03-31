import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { HomeAssistant } from "../../../types";
export declare const getCardStubConfig: (hass: HomeAssistant, type: string, entities: string[], entitiesFallback: string[]) => Promise<LovelaceCardConfig>;
