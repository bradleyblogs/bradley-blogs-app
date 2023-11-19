import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "prst6htq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-30",
});

export default client;
