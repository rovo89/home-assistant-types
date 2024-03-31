import type { NetworkInterface } from "../../../data/hassio/network";
export interface IPDetailDialogParams {
    interface?: NetworkInterface;
}
export declare const loadIPDetailDialog: () => Promise<typeof import("./dialog-ip-detail")>;
export declare const showIPDetailDialog: (element: HTMLElement, dialogParams: IPDetailDialogParams) => void;
