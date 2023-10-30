import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "prst6htq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-30",
});

export default client;
