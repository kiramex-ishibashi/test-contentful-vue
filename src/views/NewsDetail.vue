<template>
  <span v-html="content"></span>
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
      content: ""
    }
  },
  created () {
    // Date取得のタイミングが悪い
    const scope = this;
    const id = this.$route.params.id;
    console.log(id)
    client.getEntry(id)
      .then(function (entry) {
        const rawRichTextField = entry.fields.content;
        const options = {
          renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node) => `<div>${customComponentRenderer(node)}</div>`,
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`
          }
        }
        scope.content = documentToHtmlString(rawRichTextField, options);
      })
  }
};
</script>
