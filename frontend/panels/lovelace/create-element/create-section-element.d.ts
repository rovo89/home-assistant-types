import { LovelaceSectionElement } from "../../../data/lovelace";
import { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import { HuiErrorCard } from "../cards/hui-error-card";
import "../sections/hui-grid-section";
export declare const createSectionElement: (config: LovelaceSectionConfig) => LovelaceSectionElement | HuiErrorCard;
