import type { HomeAssistant } from "../types";
import type { ConversationResult } from "./conversation";
import type { ResolvedMediaSource } from "./media_source";
import type { SpeechMetadata } from "./stt";
export interface AssistPipeline {
    id: string;
    name: string;
    language: string;
    conversation_engine: string;
    conversation_language: string | null;
    stt_engine: string | null;
    stt_language: string | null;
    tts_engine: string | null;
    tts_language: string | null;
    tts_voice: string | null;
    wake_word_entity: string | null;
    wake_word_id: string | null;
}
export interface AssistDevice {
    device_id: string;
    pipeline_entity: string;
}
export interface AssistPipelineMutableParams {
    name: string;
    language: string;
    conversation_engine: string;
    conversation_language: string | null;
    stt_engine: string | null;
    stt_language: string | null;
    tts_engine: string | null;
    tts_language: string | null;
    tts_voice: string | null;
    wake_word_entity: string | null;
    wake_word_id: string | null;
}
export interface assistRunListing {
    pipeline_run_id: string;
    timestamp: string;
}
interface PipelineEventBase {
    timestamp: string;
}
interface PipelineRunStartEvent extends PipelineEventBase {
    type: "run-start";
    data: {
        pipeline: string;
        language: string;
        runner_data: {
            stt_binary_handler_id: number | null;
            timeout: number;
        };
    };
}
interface PipelineRunEndEvent extends PipelineEventBase {
    type: "run-end";
    data: Record<string, never>;
}
interface PipelineErrorEvent extends PipelineEventBase {
    type: "error";
    data: {
        code: string;
        message: string;
    };
}
interface PipelineWakeWordStartEvent extends PipelineEventBase {
    type: "wake_word-start";
    data: {
        engine: string;
        metadata: SpeechMetadata;
    };
}
interface PipelineWakeWordEndEvent extends PipelineEventBase {
    type: "wake_word-end";
    data: {
        wake_word_output: {
            ww_id: string;
            timestamp: number;
        };
    };
}
interface PipelineSTTStartEvent extends PipelineEventBase {
    type: "stt-start";
    data: {
        engine: string;
        metadata: SpeechMetadata;
    };
}
interface PipelineSTTEndEvent extends PipelineEventBase {
    type: "stt-end";
    data: {
        stt_output: {
            text: string;
        };
    };
}
interface PipelineIntentStartEvent extends PipelineEventBase {
    type: "intent-start";
    data: {
        engine: string;
        language: string;
        intent_input: string;
    };
}
interface PipelineIntentEndEvent extends PipelineEventBase {
    type: "intent-end";
    data: {
        intent_output: ConversationResult;
    };
}
interface PipelineTTSStartEvent extends PipelineEventBase {
    type: "tts-start";
    data: {
        engine: string;
        language: string;
        voice: string;
        tts_input: string;
    };
}
interface PipelineTTSEndEvent extends PipelineEventBase {
    type: "tts-end";
    data: {
        tts_output: ResolvedMediaSource;
    };
}
export type PipelineRunEvent = PipelineRunStartEvent | PipelineRunEndEvent | PipelineErrorEvent | PipelineWakeWordStartEvent | PipelineWakeWordEndEvent | PipelineSTTStartEvent | PipelineSTTEndEvent | PipelineIntentStartEvent | PipelineIntentEndEvent | PipelineTTSStartEvent | PipelineTTSEndEvent;
export type PipelineRunOptions = ({
    start_stage: "intent" | "tts";
    input: {
        text: string;
    };
} | {
    start_stage: "stt";
    input: {
        sample_rate: number;
    };
} | {
    start_stage: "wake_word";
    input: {
        sample_rate: number;
        timeout?: number;
        audio_seconds_to_buffer?: number;
    };
}) & {
    end_stage: "stt" | "intent" | "tts";
    pipeline?: string;
    conversation_id?: string | null;
};
export interface PipelineRun {
    init_options?: PipelineRunOptions;
    events: PipelineRunEvent[];
    stage: "ready" | "wake_word" | "stt" | "intent" | "tts" | "done" | "error";
    run: PipelineRunStartEvent["data"];
    error?: PipelineErrorEvent["data"];
    wake_word?: PipelineWakeWordStartEvent["data"] & Partial<PipelineWakeWordEndEvent["data"]> & {
        done: boolean;
    };
    stt?: PipelineSTTStartEvent["data"] & Partial<PipelineSTTEndEvent["data"]> & {
        done: boolean;
    };
    intent?: PipelineIntentStartEvent["data"] & Partial<PipelineIntentEndEvent["data"]> & {
        done: boolean;
    };
    tts?: PipelineTTSStartEvent["data"] & Partial<PipelineTTSEndEvent["data"]> & {
        done: boolean;
    };
}
export declare const processEvent: (run: PipelineRun | undefined, event: PipelineRunEvent, options?: PipelineRunOptions) => PipelineRun | undefined;
export declare const runDebugAssistPipeline: (hass: HomeAssistant, callback: (run: PipelineRun) => void, options: PipelineRunOptions) => Promise<() => Promise<void>>;
export declare const runAssistPipeline: (hass: HomeAssistant, callback: (event: PipelineRunEvent) => void, options: PipelineRunOptions) => Promise<() => Promise<void>>;
export declare const listAssistPipelineRuns: (hass: HomeAssistant, pipeline_id: string) => Promise<{
    pipeline_runs: assistRunListing[];
}>;
export declare const getAssistPipelineRun: (hass: HomeAssistant, pipeline_id: string, pipeline_run_id: string) => Promise<{
    events: PipelineRunEvent[];
}>;
export declare const listAssistPipelines: (hass: HomeAssistant) => Promise<{
    pipelines: AssistPipeline[];
    preferred_pipeline: string | null;
}>;
export declare const getAssistPipeline: (hass: HomeAssistant, pipeline_id?: string) => Promise<AssistPipeline>;
export declare const createAssistPipeline: (hass: HomeAssistant, pipeline: AssistPipelineMutableParams) => Promise<AssistPipeline>;
export declare const updateAssistPipeline: (hass: HomeAssistant, pipeline_id: string, pipeline: AssistPipelineMutableParams) => Promise<AssistPipeline>;
export declare const setAssistPipelinePreferred: (hass: HomeAssistant, pipeline_id: string) => Promise<unknown>;
export declare const deleteAssistPipeline: (hass: HomeAssistant, pipelineId: string) => Promise<void>;
export declare const fetchAssistPipelineLanguages: (hass: HomeAssistant) => Promise<{
    languages: string[];
}>;
export declare const listAssistDevices: (hass: HomeAssistant) => Promise<AssistDevice[]>;
export {};
