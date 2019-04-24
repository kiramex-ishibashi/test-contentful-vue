<template>
<li>
  <router-link :to="{ name: 'news-detail', params: { id: post.sys.id }}">
    <span>{{ post.sys.createdAt | formatDate }}</span>
    <span>{{ post.fields.title }}</span>
  </router-link>
  </a>
</li>
</template>

<script>
export default {
  name: 'NewsListItem',
  props: {
    post: Object,
  },
};
</script>

<style scoped lang="scss">
li {
    list-style: none;
    text-align: left;
    padding: 10px;

    span {
        display: inline-block;
        padding-right: 15px;
    }
}
</style>
