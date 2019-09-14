<template>
  <div class="container mx-auto">
    <!-- BLOG POSTS -->
    <div class="flex flex-wrap justify-center">
        <div v-for="page in $pagination.pages">
            <PostCard
            class="post"
            :title="page.frontmatter.title" 
            :path="page.path" 
            :image="page.frontmatter.image"
            :description="page.frontmatter.description"
            :date="page.frontmatter.date"
            :tags="page.frontmatter.tag"
            :excerpt="page.excerpt"
            :featured="page.frontmatter.featured"
            />
        </div>
    </div>
    <div>
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>
<style>
  .post {
    @apply w-full h-full;
  }
</style>
<script>
import PostCard from '@theme/components/PostCard';

export default {
    components: {
      PostCard
    }
}
</script>