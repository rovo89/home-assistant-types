import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-form/ha-form";
import { HomeAssistant } from "../../../../types";
import { TodoListCardConfig } from "../../cards/types";
import { LovelaceCardEditor } from "../../types";
export declare class HuiTodoListEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: TodoListCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-todo-list-card-editor": HuiTodoListEditor;
    }
}
