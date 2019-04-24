<template>
  <div class="News">
    <h2>トップお知らせ</h2>
    <ul>
      <news-list-item v-for="post in posts" :post='post'></news-list-item>
    </ul>
  </div>
</template>

<script>

import { client } from '../shared/core';
import NewsListItem from '../components/NewsListItem';

export default {
  name: 'home',
  data() {
    return {
      posts: [],
    };
  },
  components: {
    NewsListItem,
  },
  mounted() {
    const scope = this;
    client.getEntries()
      .then((entries) => {
        scope.posts = entries.items;
      });
  },
};
</script>

<style scoped lang="scss">
  .News {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 0 0;
  }
</style>
