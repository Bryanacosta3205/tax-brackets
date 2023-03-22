interface ApiResponse {
  success: boolean;
  status: number;
  statusText?: string;
  data?: T;
  headers?:
    | AxiosResponseHeaders
    | Partial<
        Record<string, string> & {
          "set-cookie"?: string[] | undefined;
        }
      >;
}

interface requestArgsType {
  url: string;
  data?: any;
  params?: any;
  apiBase?: string;
  headers?: Record<string, string | boolean>;
}