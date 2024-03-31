import { HassConfig } from "home-assistant-js-websocket";
import { FrontendLocaleData } from "../../data/translation";
import "../../resources/intl-polyfill";
export declare const formatDateTime: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatShortDateTimeWithYear: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatShortDateTime: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateTimeWithSeconds: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatDateTimeNumeric: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
