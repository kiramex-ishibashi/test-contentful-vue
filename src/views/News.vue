<template>
    <ul>
      <news-list-item v-for="news in newsList" v-bind:post="news"></news-list-item>
    </ul>
</template>

<script>

import * as contentful from 'contentful';
import { client } from '../shared/core';
import NewsListItem from '../components/NewsListItem';

export default {
  name: 'news',
  data () {
    return {
      newsList: []
    }
  },
  components: {
    NewsListItem: NewsListItem
  },
  mounted () {
    const scope = this;
    client.getEntries()
      .then(function (entries) {
        scope.newsList = entries.items;
      })
  }
};
</script>
