<template>
  <div>
    <PostInList v-for="post in posts" v-bind:post="post" :key="post.slug" />
  </div>
</template>

<script>
  import { getPosts } from '../api/posts';
 
  export function formatDate(date) {
    return new Date(date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  export default {
    async asyncData () {
      const posts = await getPosts();
      console.log(posts);
      return { 
        posts: posts,
       }
    }
  }
</script>