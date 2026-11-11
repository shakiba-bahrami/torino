export const serverFetch = async (
  endpoint,
  cache = { cache: "force-cache" },
) => {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (endpoint) url += endpoint;
  try {
    const res = await fetch(`${url}`, cache);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};
