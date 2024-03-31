import { LovelaceHeaderFooterConfig } from "../header-footer/types";
export declare const createHeaderFooterElement: (config: LovelaceHeaderFooterConfig) => import("../cards/hui-error-card").HuiErrorCard | import("../types").LovelaceHeaderFooter;
export declare const getHeaderFooterElementClass: (type: string) => Promise<import("../types").LovelaceHeaderFooterConstructor>;
