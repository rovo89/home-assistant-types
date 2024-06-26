import { HassEntities } from "home-assistant-js-websocket";
import { LocalizeFunc } from "../../../common/translations/localize";
import type { AreaFilterValue } from "../../../components/ha-area-filter";
import { EnergyPreferences } from "../../../data/energy";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import { HomeAssistant } from "../../../types";
import { EntitiesCardConfig } from "../cards/types";
export declare const computeSection: (entityIds: string[], sectionOptions?: Partial<LovelaceSectionConfig>) => LovelaceSectionConfig;
export declare const computeCards: (states: HassEntities, entityIds: string[], entityCardOptions: Partial<EntitiesCardConfig>, renderFooterEntities?: boolean) => LovelaceCardConfig[];
export declare const generateViewConfig: (localize: LocalizeFunc, path: string, title: string | undefined, icon: string | undefined, entities: HassEntities) => LovelaceViewConfig;
export declare const generateDefaultViewConfig: (areaEntries: HomeAssistant["areas"], deviceEntries: HomeAssistant["devices"], entityEntries: HomeAssistant["entities"], entities: HassEntities, localize: LocalizeFunc, energyPrefs?: EnergyPreferences, areasPrefs?: AreaFilterValue, hideEntitiesWithoutAreas?: boolean, hideEnergy?: boolean) => LovelaceViewConfig;
