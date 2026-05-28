const ERXES_API_URL = process.env.ERXES_API_URL || process.env.NEXT_PUBLIC_ERXES_API_URL || "";
const ERXES_APP_TOKEN = process.env.ERXES_APP_TOKEN || process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || "";

interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export async function graphqlRequest<T = any>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  if (!ERXES_API_URL) {
    console.warn("ERXES_API_URL not configured");
    return {} as T;
  }

  try {
    const response = await fetch(ERXES_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "erxes-app-token": ERXES_APP_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(`GraphQL request failed: ${response.status} ${response.statusText}`);
      return {} as T;
    }

    const result: GraphQLResponse<T> = await response.json();

    if (result.errors) {
      console.warn("GraphQL errors:", result.errors);
      return {} as T;
    }

    return result.data as T;
  } catch (error) {
    console.warn("GraphQL request error:", error);
    return {} as T;
  }
}
