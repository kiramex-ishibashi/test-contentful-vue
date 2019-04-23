<template>
  <div class="NewsDetail">
    <h2>お知らせ詳細</h2>
    <div v-html="body" class="NewsDetail_body"></div>
  </div>
</template>

<script>

import * as contentful from 'contentful';
import { client } from '../shared/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default {
  name: 'news-detail',
  data () {
    return {
      body: ""
    }
  },
  created () {
    // Date取得のタイミングが悪い
    const scope = this;
    const id = this.$route.params.id;
    console.log(id)
    client.getEntry(id)
      .then(function (entry) {
        console.log(entry.fields.body)
        const rawRichTextField = entry.fields.body;
        const options = {
          renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node) => `<div>${customComponentRenderer(node)}</div>`,
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`
          }
        }
        scope.body = documentToHtmlString(rawRichTextField, options);
      })
  }
};
</script>


<style lang="scss">
  .NewsDetail {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 0 0;
  }
  .NewsDetail_body {
    text-align: left;
    padding: 40px 0 0 0;
  }
</style>
