import { ChartOptions } from "chart.js";
import { HassConfig } from "home-assistant-js-websocket";
import { FrontendLocaleData } from "../../../../../data/translation";
export declare function getSuggestedMax(dayDifference: number, end: Date): number;
export declare function getCommonOptions(start: Date, end: Date, locale: FrontendLocaleData, config: HassConfig, unit?: string, compareStart?: Date, compareEnd?: Date): ChartOptions;
