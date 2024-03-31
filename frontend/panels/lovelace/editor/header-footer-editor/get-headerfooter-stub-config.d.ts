import { HomeAssistant } from "../../../../types";
import { LovelaceHeaderFooterConfig } from "../../header-footer/types";
export declare const getHeaderFooterStubConfig: (hass: HomeAssistant, type: LovelaceHeaderFooterConfig["type"], entities: string[], entitiesFallback: string[]) => Promise<LovelaceHeaderFooterConfig>;
