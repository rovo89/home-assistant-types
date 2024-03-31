import type { LovelaceHeaderFooterConfig } from "../../header-footer/types";
import type { LovelaceHeaderFooterEditor } from "../../types";
import { HuiElementEditor } from "../hui-element-editor";
export declare class HuiHeaderFooterElementEditor extends HuiElementEditor<LovelaceHeaderFooterConfig> {
    protected getConfigElement(): Promise<LovelaceHeaderFooterEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-headerfooter-element-editor": HuiHeaderFooterElementEditor;
    }
}
