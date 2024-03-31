import { HomeAssistant } from "../types";
import { MediaPlayerItem } from "./media-player";
export interface ResolvedMediaSource {
    url: string;
    mime_type: string;
}
export declare const resolveMediaSource: (hass: HomeAssistant, media_content_id: string) => Promise<ResolvedMediaSource>;
export declare const browseLocalMediaPlayer: (hass: HomeAssistant, mediaContentId?: string) => Promise<MediaPlayerItem>;
export declare const isLocalMediaSourceContentId: (mediaId: string) => boolean;
export declare const uploadLocalMedia: (hass: HomeAssistant, media_content_id: string, file: File) => Promise<any>;
export declare const removeLocalMedia: (hass: HomeAssistant, media_content_id: string) => Promise<unknown>;
