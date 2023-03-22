import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const axiosInstance = axios.create({});

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

let headers: Record<string, string | boolean> = {
  "Content-Type": "application/json",
};

const buildHeaders = (requestArgs: requestArgsType) => {
  let requestHeaders = { ...headers };
  if (requestArgs.headers) {
    requestHeaders = {
      ...requestHeaders,
      ...requestArgs.headers,
    };
  }
  return requestHeaders;
};

const getBaseURL = (apiBase: string) =>{
  return apiBaseUrl+apiBase
}

export const getRequest = async (requestArgs: requestArgsType) => {
  return axiosInstance({
    method: "get",
    url: requestArgs.url,
    baseURL: getBaseURL(requestArgs.apiBase||""),
    headers: buildHeaders(requestArgs),
    params: requestArgs.params,
  } as AxiosRequestConfig)
    .then((response: AxiosResponse) => handleSuccess(response))
    .catch((error: AxiosError) => handleError(error));
};

const handleSuccess = (response: AxiosResponse): ApiResponse => {
  return {
    success: true,
    status: response.status,
    statusText: response.statusText,
    data: response.data,
    headers: response.headers,
  };
};

const handleError = (error: AxiosError): ApiResponse => {
  if (error.response) {
    return {
      success: false,
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
    };
  } else {
    return {
      success: false,
      status: 500,
      statusText: error.message,
    };
  }
};
