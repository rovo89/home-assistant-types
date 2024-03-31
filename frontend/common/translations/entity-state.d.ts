import type { HassConfig, HassEntity } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
import type { HomeAssistant } from "../../types";
import type { LocalizeFunc } from "./localize";
export type FormatEntityStateFunc = (stateObj: HassEntity, state?: string) => string;
export type FormatEntityAttributeValueFunc = (stateObj: HassEntity, attribute: string, value?: any) => string;
export type formatEntityAttributeNameFunc = (stateObj: HassEntity, attribute: string) => string;
export declare const computeFormatFunctions: (localize: LocalizeFunc, locale: FrontendLocaleData, config: HassConfig, entities: HomeAssistant["entities"]) => Promise<{
    formatEntityState: FormatEntityStateFunc;
    formatEntityAttributeValue: FormatEntityAttributeValueFunc;
    formatEntityAttributeName: formatEntityAttributeNameFunc;
}>;
