// lib/sanity.server.js
import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skQRqY9kgCbxs74O6CV6IQDyxfAtNuhQKRvXeLRUMbn682eT4pdyfhrHgckQdLiznp55VvV6bz22Enz0Td23dmZewTMjv7JMs07p22X4Jzt0I67EU06BLtv1rzaCnvf3W1ajoXNX28RHoxUGb7dq0RZ0CIaTgIJN0MSfybzjvhQaWxjkmtPe",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
