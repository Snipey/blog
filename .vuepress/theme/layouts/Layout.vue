<template>
  <div class="container mx-auto">
    <!-- BLOG POSTS -->
    <div class="flex flex-wrap -mx-2 justify-center">
      <PostCard
      v-for="page in $pagination.pages"
      class="post px-2 mb-4"
      :title="page.frontmatter.title" 
      :path="page.path" 
      :image="page.frontmatter.image"
      :description="page.frontmatter.description"
      :date="page.frontmatter.date"
      :tags="page.frontmatter.tag"
      :excerpt="page.excerpt"
      />
    </div>
    <div>
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>
<script>
import PostCard from '@theme/components/PostCard';

export default {
    components: {
      PostCard
    }
}
</script>