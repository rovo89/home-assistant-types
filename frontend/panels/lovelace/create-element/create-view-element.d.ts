import { LovelaceViewElement } from "../../../data/lovelace";
import { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import { HuiErrorCard } from "../cards/hui-error-card";
import "../views/hui-masonry-view";
export declare const createViewElement: (config: LovelaceViewConfig) => LovelaceViewElement | HuiErrorCard;
