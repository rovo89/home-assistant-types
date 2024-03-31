import { HomeAssistant } from "../types";
interface IntentTarget {
    type: "area" | "device" | "entity" | "domain" | "device_class" | "custom";
    name: string;
    id: string | null;
}
interface IntentResultBase {
    language: string;
    speech: {
        [SpeechType in "plain" | "ssml"]: {
            extra_data: any;
            speech: string;
        };
    } | null;
}
interface IntentResultActionDone extends IntentResultBase {
    response_type: "action_done";
    data: {
        targets: IntentTarget[];
        success: IntentTarget[];
        failed: IntentTarget[];
    };
}
interface IntentResultQueryAnswer extends IntentResultBase {
    response_type: "query_answer";
    data: {
        targets: IntentTarget[];
        success: IntentTarget[];
        failed: IntentTarget[];
    };
}
interface IntentResultError extends IntentResultBase {
    response_type: "error";
    data: {
        code: "no_intent_match" | "no_valid_targets" | "failed_to_handle" | "unknown";
    };
}
export interface ConversationResult {
    conversation_id: string | null;
    response: IntentResultActionDone | IntentResultQueryAnswer | IntentResultError;
}
export interface Agent {
    id: string;
    name: string;
    supported_languages: "*" | string[];
}
export interface AssitDebugResult {
    intent: {
        name: string;
    };
    entities: Record<string, {
        name: string;
        value: string;
        text: string;
    }>;
}
export interface AssistDebugResponse {
    results: (AssitDebugResult | null)[];
}
export declare const processConversationInput: (hass: HomeAssistant, text: string, conversation_id: string | null, language: string) => Promise<ConversationResult>;
export declare const listAgents: (hass: HomeAssistant, language?: string, country?: string) => Promise<{
    agents: Agent[];
}>;
export declare const prepareConversation: (hass: HomeAssistant, language?: string) => Promise<void>;
export declare const debugAgent: (hass: HomeAssistant, sentences: string[] | string, language: string, device_id?: string) => Promise<AssistDebugResponse>;
export {};
