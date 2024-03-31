import { TemplateResult } from "lit";
import { HaTextField } from "../components/ha-textfield";
export declare class HaAuthTextField extends HaTextField {
    protected renderLabel(): TemplateResult | string;
    protected renderInput(shouldRenderHelperText: boolean): TemplateResult;
    render(): TemplateResult<1>;
    protected createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-auth-textfield": HaAuthTextField;
    }
}
