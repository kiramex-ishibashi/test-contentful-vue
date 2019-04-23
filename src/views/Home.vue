<template>
  <div class="News">
    <h2>トップお知らせ</h2>
    <ul>
      <news-list-item v-for="news in newsList" v-bind:post="news"></news-list-item>
    </ul>
  </div>
</template>

<script>

import * as contentful from 'contentful';
import { client } from '../shared/core';
import NewsListItem from '../components/NewsListItem';

export default {
  name: 'home',
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

<style scoped lang="scss">
  .News {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 0 0;
  }
</style>
