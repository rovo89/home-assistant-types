import { LovelaceRowConfig } from "../../entity-rows/types";
import type { LovelaceRowEditor } from "../../types";
import { HuiElementEditor } from "../hui-element-editor";
export declare class HuiRowElementEditor extends HuiElementEditor<LovelaceRowConfig> {
    protected get configElementType(): string | undefined;
    protected getConfigElement(): Promise<LovelaceRowEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-row-element-editor": HuiRowElementEditor;
    }
}
