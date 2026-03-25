export interface ChatApiResponse {
  data?: {
    response?: {
      message?: string;
      redirectUrl?: string;
      [key: string]: unknown; // Since LLM payload is still flexible for now.
    };
    context?: {
      domain?: string;
      intent?: string;
      entities?: Record<string, unknown>;
      [key: string]: unknown;
    };
  };
  statusCode?: number;
  errors?: unknown[];
  requestIdentifier?: string;
  messages?: unknown | null;
  additionalInfo?: unknown | null;
  user?: unknown | null;
}
