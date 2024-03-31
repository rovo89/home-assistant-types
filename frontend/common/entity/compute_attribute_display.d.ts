import { HassConfig, HassEntity } from "home-assistant-js-websocket";
import { FrontendLocaleData } from "../../data/translation";
import { HomeAssistant } from "../../types";
import { LocalizeFunc } from "../translations/localize";
export declare const computeAttributeValueDisplay: (localize: LocalizeFunc, stateObj: HassEntity, locale: FrontendLocaleData, config: HassConfig, entities: HomeAssistant["entities"], attribute: string, value?: any) => string;
export declare const computeAttributeNameDisplay: (localize: LocalizeFunc, stateObj: HassEntity, entities: HomeAssistant["entities"], attribute: string) => string;
