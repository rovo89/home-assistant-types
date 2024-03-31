import { LitElement, PropertyValues, nothing } from "lit";
import "../../components/ha-circular-progress";
import { HomeAssistant } from "../../types";
import "./ha-logbook-renderer";
export declare class HaLogbook extends LitElement {
    hass: HomeAssistant;
    time: {
        range: [Date, Date];
    } | {
        recent: number;
    };
    entityIds?: string[];
    deviceIds?: string[];
    narrow: boolean;
    virtualize: boolean;
    noIcon: boolean;
    noName: boolean;
    showIndicator: boolean;
    relativeTime: boolean;
    showMoreLink: boolean;
    private _logbookEntries?;
    private _traceContexts;
    private _userIdToName;
    private _error?;
    private _subscribed?;
    private _liveUpdatesEnabled;
    private _pendingStreamMessages;
    private _throttleGetLogbookEntries;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    refresh(force?: boolean): Promise<void>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    private _handleLogbookLive;
    private get _filterAlwaysEmptyResults();
    private _unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Unsubscribe because we are unloading
     * or about to resubscribe.
     * Setting this._logbookEntries to undefined
     * will put the page in a loading state.
     */
    private _unsubscribeSetLoading;
    /** Unsubscribe because there are no results.
     * Setting this._logbookEntries to an empty
     * list will show a no results message.
     */
    private _unsubscribeNoResults;
    private _calculateLogbookPeriod;
    private _subscribeLogbookPeriod;
    private _getLogBookData;
    private _nonExpiredRecords;
    private _processOrQueueStreamMessage;
    private _processStreamMessage;
    private _updateTraceContexts;
    private _updateUsers;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook": HaLogbook;
    }
}
