import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/entity/state-info";
import "../../components/ha-alert";
import "../../components/ha-date-input";
import "../../components/ha-time-input";
import { HomeAssistant } from "../../types";
import "../lovelace/components/hui-generic-entity-row";
import { CalendarEventDetailDialogParams } from "./show-dialog-calendar-event-detail";
declare class DialogCalendarEventDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _calendarId?;
    private _submitting;
    private _error?;
    private _data;
    showDialog(params: CalendarEventDetailDialogParams): Promise<void>;
    private closeDialog;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderRRuleAsText;
    private _formatDateRange;
    private _editEvent;
    private _deleteEvent;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-calendar-event-detail": DialogCalendarEventDetail;
    }
}
export {};
