import { FrontendLocaleData } from "../data/translation";
import { HomeAssistant } from "../types";
/**
 * Search for a matching translation from most specific to general
 */
export declare function findAvailableLanguage(language: string): any;
/**
 * Get user selected locale data from backend
 */
export declare function getUserLocale(hass: HomeAssistant): Promise<Partial<FrontendLocaleData>>;
/**
 * Get browser specific language
 */
export declare function getLocalLanguage(): any;
export declare function getTranslation(fragment: string | null, language: string): Promise<any>;
