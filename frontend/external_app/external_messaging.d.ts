import { AutomationConfig } from "../data/automation";
interface CommandInFlight {
    resolve: (data: any) => void;
    reject: (err: EMError) => void;
}
export interface EMMessage {
    id?: number;
    type: string;
}
interface EMError {
    code: string;
    message: string;
}
interface EMMessageResultSuccess {
    id: number;
    type: "result";
    success: true;
    result: unknown;
}
interface EMMessageResultError {
    id: number;
    type: "result";
    success: false;
    error: EMError;
}
interface EMOutgoingMessageConfigGet extends EMMessage {
    type: "config/get";
}
interface EMOutgoingMessageBarCodeScan extends EMMessage {
    type: "bar_code/scan";
    title: string;
    description: string;
    alternative_option_label?: string;
}
interface EMOutgoingMessageBarCodeClose extends EMMessage {
    type: "bar_code/close";
}
interface EMOutgoingMessageBarCodeNotify extends EMMessage {
    type: "bar_code/notify";
    message: string;
}
interface EMOutgoingMessageMatterCommission extends EMMessage {
    type: "matter/commission";
}
interface EMOutgoingMessageImportThreadCredentials extends EMMessage {
    type: "thread/import_credentials";
}
type EMOutgoingMessageWithAnswer = {
    "config/get": {
        request: EMOutgoingMessageConfigGet;
        response: ExternalConfig;
    };
};
interface EMOutgoingMessageExoplayerPlayHLS extends EMMessage {
    type: "exoplayer/play_hls";
    payload: {
        url: string;
        muted: boolean;
    };
}
interface EMOutgoingMessageExoplayerResize extends EMMessage {
    type: "exoplayer/resize";
    payload: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
}
interface EMOutgoingMessageExoplayerStop extends EMMessage {
    type: "exoplayer/stop";
}
interface EMOutgoingMessageThemeUpdate extends EMMessage {
    type: "theme-update";
}
interface EMOutgoingMessageHaptic extends EMMessage {
    type: "haptic";
    payload: {
        hapticType: string;
    };
}
interface EMOutgoingMessageConnectionStatus extends EMMessage {
    type: "connection-status";
    payload: {
        event: string;
    };
}
interface EMOutgoingMessageAppConfiguration extends EMMessage {
    type: "config_screen/show";
}
interface EMOutgoingMessageTagWrite extends EMMessage {
    type: "tag/write";
    payload: {
        name: string | null;
        tag: string;
    };
}
interface EMOutgoingMessageSidebarShow extends EMMessage {
    type: "sidebar/show";
}
interface EMOutgoingMessageAssistShow extends EMMessage {
    type: "assist/show";
    payload?: {
        pipeline_id: "preferred" | "last_used" | string;
        start_listening: boolean;
    };
}
type EMOutgoingMessageWithoutAnswer = EMMessageResultError | EMMessageResultSuccess | EMOutgoingMessageAppConfiguration | EMOutgoingMessageAssistShow | EMOutgoingMessageBarCodeClose | EMOutgoingMessageBarCodeNotify | EMOutgoingMessageBarCodeScan | EMOutgoingMessageConnectionStatus | EMOutgoingMessageExoplayerPlayHLS | EMOutgoingMessageExoplayerResize | EMOutgoingMessageExoplayerStop | EMOutgoingMessageHaptic | EMOutgoingMessageImportThreadCredentials | EMOutgoingMessageMatterCommission | EMOutgoingMessageSidebarShow | EMOutgoingMessageTagWrite | EMOutgoingMessageThemeUpdate;
interface EMIncomingMessageRestart {
    id: number;
    type: "command";
    command: "restart";
}
interface EMIncomingMessageShowNotifications {
    id: number;
    type: "command";
    command: "notifications/show";
}
interface EMIncomingMessageToggleSidebar {
    id: number;
    type: "command";
    command: "sidebar/toggle";
}
interface EMIncomingMessageShowSidebar {
    id: number;
    type: "command";
    command: "sidebar/show";
}
interface EMIncomingMessageShowAutomationEditor {
    id: number;
    type: "command";
    command: "automation/editor/show";
    payload?: {
        config?: Partial<AutomationConfig>;
    };
}
export interface EMIncomingMessageBarCodeScanResult {
    id: number;
    type: "command";
    command: "bar_code/scan_result";
    payload: {
        rawValue: string;
        format: "aztec" | "code_128" | "code_39" | "code_93" | "codabar" | "data_matrix" | "ean_13" | "ean_8" | "itf" | "pdf417" | "qr_code" | "upc_a" | "upc_e" | "unknown";
    };
}
export interface EMIncomingMessageBarCodeScanAborted {
    id: number;
    type: "command";
    command: "bar_code/aborted";
    payload: {
        reason: "canceled" | "alternative_options";
    };
}
export type EMIncomingMessageCommands = EMIncomingMessageRestart | EMIncomingMessageShowNotifications | EMIncomingMessageToggleSidebar | EMIncomingMessageShowSidebar | EMIncomingMessageShowAutomationEditor | EMIncomingMessageBarCodeScanResult | EMIncomingMessageBarCodeScanAborted;
type EMIncomingMessage = EMMessageResultSuccess | EMMessageResultError | EMIncomingMessageCommands;
type EMIncomingMessageHandler = (msg: EMIncomingMessageCommands) => boolean;
export interface ExternalConfig {
    hasSettingsScreen: boolean;
    hasSidebar: boolean;
    canWriteTag: boolean;
    hasExoPlayer: boolean;
    canCommissionMatter: boolean;
    canImportThreadCredentials: boolean;
    hasAssist: boolean;
    hasBarCodeScanner: number;
}
export declare class ExternalMessaging {
    config: ExternalConfig;
    commands: {
        [msgId: number]: CommandInFlight;
    };
    msgId: number;
    private _commandHandler?;
    attach(): Promise<void>;
    addCommandHandler(handler: EMIncomingMessageHandler): void;
    /**
     * Send message to external app that expects a response.
     * @param msg message to send
     */
    sendMessage<T extends keyof EMOutgoingMessageWithAnswer>(msg: EMOutgoingMessageWithAnswer[T]["request"]): Promise<EMOutgoingMessageWithAnswer[T]["response"]>;
    /**
     * Send message to external app without expecting a response.
     * @param msg message to send
     */
    fireMessage(msg: EMOutgoingMessageWithoutAnswer): void;
    receiveMessage(msg: EMIncomingMessage): void;
    protected _sendExternal(msg: EMMessage): void;
}
export {};
