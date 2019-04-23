import * as contentful from 'contentful';
import dotenv from 'dotenv';
export const client = contentful.createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESSTOKEN,
});
