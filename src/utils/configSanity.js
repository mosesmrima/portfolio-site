import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "3zihx63r",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true
});