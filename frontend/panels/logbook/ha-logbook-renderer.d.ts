import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../components/entity/state-badge";
import "../../components/ha-circular-progress";
import "../../components/ha-icon-next";
import "../../components/ha-relative-time";
import { LogbookEntry } from "../../data/logbook";
import { TraceContexts } from "../../data/trace";
import { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        "hass-logbook-live": {
            enable: boolean;
        };
    }
}
declare class HaLogbookRenderer extends LitElement {
    hass: HomeAssistant;
    userIdToName: {};
    traceContexts: TraceContexts;
    entries: LogbookEntry[];
    narrow: boolean;
    virtualize: boolean;
    showIndicator: boolean;
    noIcon: boolean;
    noName: boolean;
    relativeTime: boolean;
    private _savedScrollPos?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderLogbookItem;
    private _saveScrollPos;
    private _visibilityChanged;
    private _renderIndicator;
    private _renderMessage;
    private _renderUser;
    private _renderUnseenContextSourceEntity;
    private _renderContextMessage;
    private _renderEntity;
    private _formatMessageWithPossibleEntity;
    private _entityClicked;
    _handleClick(ev: any): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook-renderer": HaLogbookRenderer;
    }
}
export {};
