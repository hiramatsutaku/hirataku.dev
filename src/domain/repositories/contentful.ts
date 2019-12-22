/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from 'contentful';

export const client = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
  ? createClient({
      host: 'preview.contentful.com',
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
    })
  : createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
