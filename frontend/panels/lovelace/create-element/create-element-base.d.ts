import { LovelaceSectionElement, LovelaceViewElement } from "../../../data/lovelace";
import { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import { LovelaceCardFeatureConfig } from "../card-features/types";
import type { HuiErrorCard } from "../cards/hui-error-card";
import type { ErrorCardConfig } from "../cards/types";
import { LovelaceElement, LovelaceElementConfig } from "../elements/types";
import { LovelaceRow, LovelaceRowConfig } from "../entity-rows/types";
import { LovelaceHeaderFooterConfig } from "../header-footer/types";
import { LovelaceBadge, LovelaceCard, LovelaceCardConstructor, LovelaceCardFeature, LovelaceCardFeatureConstructor, LovelaceHeaderFooter, LovelaceHeaderFooterConstructor, LovelaceRowConstructor } from "../types";
interface CreateElementConfigTypes {
    card: {
        config: LovelaceCardConfig;
        element: LovelaceCard;
        constructor: LovelaceCardConstructor;
    };
    badge: {
        config: LovelaceBadgeConfig;
        element: LovelaceBadge;
        constructor: unknown;
    };
    element: {
        config: LovelaceElementConfig;
        element: LovelaceElement;
        constructor: unknown;
    };
    row: {
        config: LovelaceRowConfig;
        element: LovelaceRow;
        constructor: LovelaceRowConstructor;
    };
    "header-footer": {
        config: LovelaceHeaderFooterConfig;
        element: LovelaceHeaderFooter;
        constructor: LovelaceHeaderFooterConstructor;
    };
    view: {
        config: LovelaceViewConfig;
        element: LovelaceViewElement;
        constructor: unknown;
    };
    "card-feature": {
        config: LovelaceCardFeatureConfig;
        element: LovelaceCardFeature;
        constructor: LovelaceCardFeatureConstructor;
    };
    section: {
        config: LovelaceSectionConfig;
        element: LovelaceSectionElement;
        constructor: unknown;
    };
}
export declare const createErrorCardElement: (config: ErrorCardConfig) => HuiErrorCard;
export declare const createErrorCardConfig: (error: any, origConfig: any) => {
    type: string;
    error: any;
    origConfig: any;
};
export declare const createLovelaceElement: <T extends keyof CreateElementConfigTypes>(tagSuffix: T, config: CreateElementConfigTypes[T]["config"], alwaysLoadTypes?: Set<string>, lazyLoadTypes?: {
    [domain: string]: () => Promise<unknown>;
}, domainTypes?: {
    [domain: string]: string;
    _domain_not_found: string;
}, defaultType?: string) => CreateElementConfigTypes[T]["element"] | HuiErrorCard;
export declare const tryCreateLovelaceElement: <T extends keyof CreateElementConfigTypes>(tagSuffix: T, config: CreateElementConfigTypes[T]["config"], alwaysLoadTypes?: Set<string>, lazyLoadTypes?: {
    [domain: string]: () => Promise<unknown>;
}, domainTypes?: {
    [domain: string]: string;
    _domain_not_found: string;
}, defaultType?: string) => CreateElementConfigTypes[T]["element"] | HuiErrorCard;
export declare const getLovelaceElementClass: <T extends keyof CreateElementConfigTypes>(type: string, tagSuffix: T, alwaysLoadTypes?: Set<string>, lazyLoadTypes?: {
    [domain: string]: () => Promise<unknown>;
}) => Promise<CreateElementConfigTypes[T]["constructor"]>;
export {};
