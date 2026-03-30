const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(
  "localhost",
  window.location.hostname,
);
interface RequestConfig extends RequestInit {
  token?: string;
  data?: unknown;
}

export async function apiClient<T, R = T>(
  endpoint: string,
  { token, headers, data, ...customConfig }: RequestConfig = {},
  map?: (data: T) => R,
): Promise<R> {
  const config: RequestInit = {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...customConfig,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, config);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Something went wrong");
  }

  const json: { data: T } = await response.json();

  // The API wraps most responses in a `data` property. Let's unwrap it.
  console.log("API response for", endpoint, ":", json.data);
  return map ? map(json.data) : (json.data as unknown as R);
}
