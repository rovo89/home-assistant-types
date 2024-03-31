import type { HassEntities, HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
export declare enum UpdateEntityFeature {
    INSTALL = 1,
    SPECIFIC_VERSION = 2,
    PROGRESS = 4,
    BACKUP = 8,
    RELEASE_NOTES = 16
}
interface UpdateEntityAttributes extends HassEntityAttributeBase {
    auto_update: boolean | null;
    installed_version: string | null;
    in_progress: boolean | number;
    latest_version: string | null;
    release_summary: string | null;
    release_url: string | null;
    skipped_version: string | null;
    title: string | null;
}
export interface UpdateEntity extends HassEntityBase {
    attributes: UpdateEntityAttributes;
}
export declare const updateUsesProgress: (entity: UpdateEntity) => boolean;
export declare const updateCanInstall: (entity: UpdateEntity, showSkipped?: boolean) => boolean;
export declare const updateIsInstalling: (entity: UpdateEntity) => boolean;
export declare const updateReleaseNotes: (hass: HomeAssistant, entityId: string) => Promise<string>;
export declare const filterUpdateEntities: (entities: HassEntities, language?: string) => UpdateEntity[];
export declare const filterUpdateEntitiesWithInstall: (entities: HassEntities, showSkipped?: boolean) => UpdateEntity[];
export declare const checkForEntityUpdates: (element: HTMLElement, hass: HomeAssistant) => Promise<void>;
export declare const computeUpdateStateDisplay: (stateObj: UpdateEntity, hass: HomeAssistant) => string;
export {};
