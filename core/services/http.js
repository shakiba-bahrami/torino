export const serverFetch = async (
  endpoint,
  cache = { cache: "force-cache" },
  searchParams,
) => {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (endpoint) url += endpoint;
  if (searchParams)
    url += `${url.includes("?") ? "&" : "?"}${new URLSearchParams(searchParams).toString()}`;
  const res = await fetch(`${url}`, cache);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  const json = await res.json();

  return json;
};
