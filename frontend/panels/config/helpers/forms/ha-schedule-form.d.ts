import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textfield";
import { Schedule } from "../../../../data/schedule";
import { HomeAssistant } from "../../../../types";
declare class HaScheduleForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _name;
    private _icon;
    private _monday;
    private _tuesday;
    private _wednesday;
    private _thursday;
    private _friday;
    private _saturday;
    private _sunday;
    private calendar?;
    private _item?;
    set item(item: Schedule);
    disconnectedCallback(): void;
    connectedCallback(): void;
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(): void;
    private setupCalendar;
    private get _events();
    private _handleSelect;
    private _handleEventResize;
    private _handleEventDrop;
    private _handleEventClick;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-schedule-form": HaScheduleForm;
    }
}
export {};
