import { HassConfig } from "home-assistant-js-websocket";
import { FrontendLocaleData } from "../../data/translation";
import "../../resources/intl-polyfill";
export declare const formatTime: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatTimeWithSeconds: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatTimeWeekday: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
export declare const formatTime24h: (dateObj: Date, locale: FrontendLocaleData, config: HassConfig) => string;
