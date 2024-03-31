import { HomeAssistant } from "../types";
export interface OTBRInfo {
    active_dataset_tlvs: string;
    channel: number;
    extended_address: string;
    url: string;
}
export declare const getOTBRInfo: (hass: HomeAssistant) => Promise<OTBRInfo>;
export declare const OTBRCreateNetwork: (hass: HomeAssistant) => Promise<void>;
export declare const OTBRSetNetwork: (hass: HomeAssistant, dataset_id: string) => Promise<void>;
export declare const OTBRSetChannel: (hass: HomeAssistant, channel: number) => Promise<{
    delay: number;
}>;
