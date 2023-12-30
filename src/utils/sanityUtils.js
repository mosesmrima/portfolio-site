import {createClient} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = createClient({
  projectId: "3zihx63r",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true
});




export const builder = imageUrlBuilder(clientConfig);


export function urlFor(source) {
  return builder.image(source);
}
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

