import { PropertyValues, ReactiveElement } from "lit";
import { HASSDomEvent } from "../../../common/dom/fire_event";
import "../../../components/entity/ha-state-label-badge";
import "../../../components/ha-svg-icon";
import { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import type { HuiErrorCard } from "../cards/hui-error-card";
import { LovelaceCardPath } from "../editor/lovelace-path";
import "../sections/hui-section";
import type { HuiSection } from "../sections/hui-section";
import type { Lovelace, LovelaceBadge, LovelaceCard } from "../types";
declare global {
    interface HASSDomEvents {
        "ll-create-card": {
            suggested?: string[];
        } | undefined;
        "ll-edit-card": {
            path: LovelaceCardPath;
        };
        "ll-delete-card": {
            path: LovelaceCardPath;
            confirm: boolean;
        };
    }
    interface HTMLElementEventMap {
        "ll-create-card": HASSDomEvent<HASSDomEvents["ll-create-card"]>;
        "ll-edit-card": HASSDomEvent<HASSDomEvents["ll-edit-card"]>;
        "ll-delete-card": HASSDomEvent<HASSDomEvents["ll-delete-card"]>;
    }
}
export declare class HUIView extends ReactiveElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    narrow: boolean;
    index: number;
    private _cards;
    private _badges;
    private _sections;
    private _layoutElementType?;
    private _layoutElement?;
    private _viewConfigTheme?;
    createCardElement(cardConfig: LovelaceCardConfig): HuiErrorCard | LovelaceCard;
    createBadgeElement(badgeConfig: LovelaceBadgeConfig): LovelaceBadge;
    createSectionElement(sectionConfig: LovelaceSectionConfig): HuiSection;
    protected createRenderRoot(): this;
    willUpdate(changedProperties: PropertyValues): void;
    protected update(changedProperties: PropertyValues): void;
    private _initializeConfig;
    private _createLayoutElement;
    private _createBadges;
    private _createCards;
    private _createSections;
    private _rebuildCard;
    private _rebuildBadge;
    private _rebuildSection;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view": HUIView;
    }
}
