export { HomeAssistant } from './frontend/types';

export { LovelaceCard } from "./frontend/panels/lovelace/types";
export { LovelaceCardConfig } from "./frontend/data/lovelace/config/card";

import { CustomCardsWindow } from './frontend/data/lovelace_custom_cards';
export type CustomCardHelpers = typeof import('./frontend/panels/lovelace/custom-card-helpers')

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}
