<template>
    <div class="container mx-auto bg-yellow flex flex-wrap justify-center text-center">
            <!-- BLOG POSTS -->
            <div v-for="post in posts">
                <BlogPostCard  
                :title="post.frontmatter.title" 
                :tags="post.frontmatter.tags" 
                :path="post.path" 
                :image="post.frontmatter.image"
                :description="post.frontmatter.description"
                :date="post.frontmatter.date"
                />
            </div>
        </div>
    </div>
</template>

<script>
import BlogPostCard from '@theme/components/BlogPostCard';

export default {
    components: {
        BlogPostCard,
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/articles/') && x.frontmatter.index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        },
    },
}
</script>