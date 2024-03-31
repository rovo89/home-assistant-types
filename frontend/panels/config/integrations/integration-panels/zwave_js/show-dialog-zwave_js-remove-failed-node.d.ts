export interface ZWaveJSRemoveFailedNodeDialogParams {
    device_id: string;
}
export declare const loadRemoveFailedNodeDialog: () => Promise<typeof import("./dialog-zwave_js-remove-failed-node")>;
export declare const showZWaveJSRemoveFailedNodeDialog: (element: HTMLElement, removeFailedNodeDialogParams: ZWaveJSRemoveFailedNodeDialogParams) => void;
