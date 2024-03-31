import { HomeAssistant } from "../../types";
export interface CloudTTSInfo {
    languages: Array<[string, string]>;
}
export declare const getCloudTTSInfo: (hass: HomeAssistant) => Promise<CloudTTSInfo>;
export declare const getCloudTtsLanguages: (info?: CloudTTSInfo) => string[];
export declare const getCloudTtsSupportedVoices: (language: string, info: CloudTTSInfo | undefined) => string[];
