const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

interface RequestConfig extends RequestInit {
  token?: string;
}

export async function apiClient<T>(
  endpoint: string,
  { token, headers, ...customConfig }: RequestConfig = {},
): Promise<T> {
  const config: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...customConfig,
  };

  const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;
  const response = await fetch(url, config);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Something went wrong");
  }

  return response.json();
}
