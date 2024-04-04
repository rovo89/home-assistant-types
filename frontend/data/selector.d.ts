import type { HassEntity } from "home-assistant-js-websocket";
import { UiAction } from "../panels/lovelace/components/hui-action-editor";
import { HomeAssistant, ItemPath } from "../types";
import { DeviceRegistryEntry } from "./device_registry";
import { EntityRegistryDisplayEntry, EntityRegistryEntry } from "./entity_registry";
import { EntitySources } from "./entity_sources";
export type Selector = ActionSelector | AddonSelector | AreaSelector | AreaFilterSelector | AttributeSelector | BooleanSelector | ColorRGBSelector | ColorTempSelector | ConditionSelector | ConversationAgentSelector | ConfigEntrySelector | ConstantSelector | CountrySelector | DateSelector | DateTimeSelector | DeviceSelector | FloorSelector | LegacyDeviceSelector | DurationSelector | EntitySelector | LegacyEntitySelector | FileSelector | IconSelector | LabelSelector | LanguageSelector | LocationSelector | MediaSelector | NavigationSelector | NumberSelector | ObjectSelector | AssistPipelineSelector | QRCodeSelector | SelectSelector | SelectorSelector | StateSelector | StatisticSelector | StringSelector | STTSelector | TargetSelector | TemplateSelector | ThemeSelector | TimeSelector | TriggerSelector | TTSSelector | TTSVoiceSelector | UiActionSelector | UiColorSelector;
export interface ActionSelector {
    action: {
        path?: ItemPath;
    } | null;
}
export interface AddonSelector {
    addon: {
        name?: string;
        slug?: string;
    } | null;
}
export interface AreaSelector {
    area: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        multiple?: boolean;
    } | null;
}
export interface AreaFilterSelector {
    area_filter: {} | null;
}
export interface AttributeSelector {
    attribute: {
        entity_id?: string;
        hide_attributes?: readonly string[];
    } | null;
}
export interface BooleanSelector {
    boolean: {} | null;
}
export interface ColorRGBSelector {
    color_rgb: {} | null;
}
export interface ColorTempSelector {
    color_temp: {
        unit?: "kelvin" | "mired";
        min?: number;
        max?: number;
        min_mireds?: number;
        max_mireds?: number;
    } | null;
}
export interface ConditionSelector {
    condition: {
        path?: ItemPath;
    } | null;
}
export interface ConversationAgentSelector {
    conversation_agent: {
        language?: string;
    } | null;
}
export interface ConfigEntrySelector {
    config_entry: {
        integration?: string;
    } | null;
}
export interface ConstantSelector {
    constant: {
        value: string | number | boolean;
        label?: string;
        translation_key?: string;
    } | null;
}
export interface CountrySelector {
    country: {
        countries: string[];
        no_sort?: boolean;
    } | null;
}
export interface DateSelector {
    date: {} | null;
}
export interface DateTimeSelector {
    datetime: {} | null;
}
interface DeviceSelectorFilter {
    integration?: string;
    manufacturer?: string;
    model?: string;
}
export interface DeviceSelector {
    device: {
        filter?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        multiple?: boolean;
    } | null;
}
export interface FloorSelector {
    floor: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        multiple?: boolean;
    } | null;
}
export interface LegacyDeviceSelector {
    device: DeviceSelector["device"] & {
        /**
         * @deprecated Use filter instead
         */
        integration?: DeviceSelectorFilter["integration"];
        /**
         * @deprecated Use filter instead
         */
        manufacturer?: DeviceSelectorFilter["manufacturer"];
        /**
         * @deprecated Use filter instead
         */
        model?: DeviceSelectorFilter["model"];
    };
}
export interface DurationSelector {
    duration: {
        enable_day?: boolean;
    } | null;
}
interface EntitySelectorFilter {
    integration?: string;
    domain?: string | readonly string[];
    device_class?: string | readonly string[];
    supported_features?: number | [number];
}
export interface EntitySelector {
    entity: {
        multiple?: boolean;
        include_entities?: string[];
        exclude_entities?: string[];
        filter?: EntitySelectorFilter | readonly EntitySelectorFilter[];
    } | null;
}
export interface LegacyEntitySelector {
    entity: EntitySelector["entity"] & {
        /**
         * @deprecated Use filter instead
         */
        integration?: EntitySelectorFilter["integration"];
        /**
         * @deprecated Use filter instead
         */
        domain?: EntitySelectorFilter["domain"];
        /**
         * @deprecated Use filter instead
         */
        device_class?: EntitySelectorFilter["device_class"];
    };
}
export interface StatisticSelector {
    statistic: {
        device_class?: string;
        multiple?: boolean;
    };
}
export interface FileSelector {
    file: {
        accept: string;
    } | null;
}
export interface IconSelector {
    icon: {
        placeholder?: string;
        fallbackPath?: string;
    } | null;
}
export interface LabelSelector {
    label: {
        multiple?: boolean;
    };
}
export interface LanguageSelector {
    language: {
        languages?: string[];
        native_name?: boolean;
        no_sort?: boolean;
    } | null;
}
export interface LocationSelector {
    location: {
        radius?: boolean;
        icon?: string;
    } | null;
}
export interface LocationSelectorValue {
    latitude: number;
    longitude: number;
    radius?: number;
}
export interface MediaSelector {
    media: {} | null;
}
export interface MediaSelectorValue {
    entity_id?: string;
    media_content_id?: string;
    media_content_type?: string;
    metadata?: {
        title?: string;
        thumbnail?: string | null;
        media_class?: string;
        children_media_class?: string | null;
        navigateIds?: {
            media_content_type: string;
            media_content_id: string;
        }[];
    };
}
export interface NavigationSelector {
    navigation: {} | null;
}
export interface NumberSelector {
    number: {
        min?: number;
        max?: number;
        step?: number | "any";
        mode?: "box" | "slider";
        unit_of_measurement?: string;
    } | null;
}
export interface ObjectSelector {
    object: {} | null;
}
export interface AssistPipelineSelector {
    assist_pipeline: {
        include_last_used?: boolean;
    } | null;
}
export interface SelectOption {
    value: any;
    label: string;
    disabled?: boolean;
}
export interface SelectSelector {
    select: {
        multiple?: boolean;
        custom_value?: boolean;
        mode?: "list" | "dropdown";
        options: readonly string[] | readonly SelectOption[];
        translation_key?: string;
        sort?: boolean;
        reorder?: boolean;
    } | null;
}
export interface SelectorSelector {
    selector: {} | null;
}
export interface StateSelector {
    state: {
        extra_options?: {
            label: string;
            value: any;
        }[];
        entity_id?: string;
        attribute?: string;
    } | null;
}
export interface BackupLocationSelector {
    backup_location: {} | null;
}
export interface QRCodeSelector {
    qr_code: {
        data: string;
        scale?: number;
        error_correction_level?: "low" | "medium" | "quartile" | "high";
        center_image?: string;
    } | null;
}
export interface StringSelector {
    text: {
        multiline?: boolean;
        type?: "number" | "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "color";
        prefix?: string;
        suffix?: string;
        autocomplete?: string;
        multiple?: true;
    } | null;
}
export interface STTSelector {
    stt: {
        language?: string;
    } | null;
}
export interface TargetSelector {
    target: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
    } | null;
}
export interface TemplateSelector {
    template: {} | null;
}
export interface ThemeSelector {
    theme: {
        include_default?: boolean;
    } | null;
}
export interface TimeSelector {
    time: {} | null;
}
export interface TriggerSelector {
    trigger: {
        path?: ItemPath;
    } | null;
}
export interface TTSSelector {
    tts: {
        language?: string;
    } | null;
}
export interface TTSVoiceSelector {
    tts_voice: {
        engineId?: string;
        language?: string;
    } | null;
}
export interface UiActionSelector {
    ui_action: {
        actions?: UiAction[];
        default_action?: UiAction;
    } | null;
}
export interface UiColorSelector {
    ui_color: {
        default_color?: boolean;
    } | null;
}
export declare const expandLabelTarget: (hass: HomeAssistant, labelId: string, areas: HomeAssistant["areas"], devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], targetSelector: TargetSelector, entitySources?: EntitySources) => {
    areas: string[];
    devices: string[];
    entities: string[];
};
export declare const expandFloorTarget: (hass: HomeAssistant, floorId: string, areas: HomeAssistant["areas"], targetSelector: TargetSelector, entitySources?: EntitySources) => {
    areas: string[];
};
export declare const expandAreaTarget: (hass: HomeAssistant, areaId: string, devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], targetSelector: TargetSelector, entitySources?: EntitySources) => {
    devices: string[];
    entities: string[];
};
export declare const expandDeviceTarget: (hass: HomeAssistant, deviceId: string, entities: HomeAssistant["entities"], targetSelector: TargetSelector, entitySources?: EntitySources) => {
    entities: string[];
};
export declare const areaMeetsTargetSelector: (hass: HomeAssistant, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], areaId: string, targetSelector: TargetSelector, entitySources?: EntitySources) => boolean;
export declare const deviceMeetsTargetSelector: (hass: HomeAssistant, entityRegistry: EntityRegistryDisplayEntry[] | EntityRegistryEntry[], device: DeviceRegistryEntry, targetSelector: TargetSelector, entitySources?: EntitySources) => boolean;
export declare const entityMeetsTargetSelector: (entity: HassEntity, targetSelector: TargetSelector, entitySources?: EntitySources) => boolean;
export declare const filterSelectorDevices: (filterDevice: DeviceSelectorFilter, device: DeviceRegistryEntry, deviceIntegrationLookup?: Record<string, string[]> | undefined) => boolean;
export declare const filterSelectorEntities: (filterEntity: EntitySelectorFilter, entity: HassEntity, entitySources?: EntitySources) => boolean;
export declare const handleLegacyEntitySelector: (selector: LegacyEntitySelector | EntitySelector) => EntitySelector;
export declare const handleLegacyDeviceSelector: (selector: LegacyDeviceSelector | DeviceSelector) => DeviceSelector;
export {};
