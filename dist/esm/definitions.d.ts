import type { PluginListenerHandle } from "@capacitor/core";
export interface SpeechRecognitionPlugin {
  available(): Promise<{
    available: boolean;
  }>;
  start(
    options?: UtteranceOptions
  ): Promise<{
    matches: string[];
  }>;
  stop(): Promise<void>;
  getSupportedLanguages(): Promise<{
    languages: any[];
  }>;
  hasPermission(): Promise<{
    permission: boolean;
  }>;
  requestPermission(): Promise<void>;
  /**
   * Called when partialResults set to true and result received
   *
   * Provides partial result.
   *
   * @since 2.0.2
   */
  addListener(
    eventName: "partialResults",
    listenerFunc: (data: { matches: string[] }) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
export interface UtteranceOptions {
  language?: string;
  maxResults?: number;
  prompt?: string;
  popup?: boolean;
  partialResults?: boolean;
}
