import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list";
import "@material/mwc-list/mwc-list-item";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import type { MediaPlayerItem } from "../../data/media-player";
import { MediaPickedEvent, MediaPlayerBrowseAction, MediaPlayerLayoutType } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../entity/ha-entity-picker";
import "../ha-alert";
import "../ha-button-menu";
import "../ha-card";
import "../ha-circular-progress";
import "../ha-fab";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./ha-browse-media-tts";
declare global {
    interface HASSDomEvents {
        "media-picked": MediaPickedEvent;
        "media-browsed": {
            ids: MediaPlayerItemId[];
            current?: MediaPlayerItem;
            replace?: boolean;
        };
    }
}
export interface MediaPlayerItemId {
    media_content_id: string | undefined;
    media_content_type: string | undefined;
}
export declare class HaMediaPlayerBrowse extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    action: MediaPlayerBrowseAction;
    preferredLayout: MediaPlayerLayoutType;
    dialog: boolean;
    navigateIds: MediaPlayerItemId[];
    narrow: boolean;
    scrolled: boolean;
    private _error?;
    private _parentItem?;
    private _currentItem?;
    private _header?;
    private _content?;
    private _virtualizer?;
    private _observed;
    private _headerOffsetHeight;
    private _resizeObserver?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    refresh(): Promise<void>;
    play(): void;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1>;
    private _renderGridItem;
    private _renderListItem;
    private _getThumbnailURLorBase64;
    private _actionClicked;
    private _runAction;
    private _ttsPicked;
    private _childClicked;
    private _fetchData;
    private _measureCard;
    private _attachResizeObserver;
    private _closeDialogAction;
    private _setError;
    private _renderError;
    private _setHeaderHeight;
    private _animateHeaderHeight;
    private _scroll;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-player-browse": HaMediaPlayerBrowse;
    }
}
