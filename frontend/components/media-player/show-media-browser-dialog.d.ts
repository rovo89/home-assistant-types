import { MediaPickedEvent, MediaPlayerBrowseAction } from "../../data/media-player";
import { MediaPlayerItemId } from "./ha-media-player-browse";
export interface MediaPlayerBrowseDialogParams {
    action: MediaPlayerBrowseAction;
    entityId: string;
    mediaPickedCallback: (pickedMedia: MediaPickedEvent) => void;
    navigateIds?: MediaPlayerItemId[];
}
export declare const showMediaBrowserDialog: (element: HTMLElement, dialogParams: MediaPlayerBrowseDialogParams) => void;
