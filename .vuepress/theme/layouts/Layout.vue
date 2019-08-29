<template>
    <div class="">
        <Header />
        <component :is="layout" />
        <Footer />
    </div>
</template>

<script>
import { isArticle } from '@theme/utils'
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

// Available layouts.
import BlogLayout from '@theme/layouts/BlogLayout'
import ArticleLayout from '@theme/layouts/ArticleLayout'
import BasicLayout from '@theme/layouts/BasicLayout'

export default {
    components: { 
        Header, 
        Footer, 
        ArticleLayout,
        BlogLayout, 
        BasicLayout 
    },
    computed: {
        layout () {
            if (this.$page.path === '/') return 'BlogLayout'
            if (isArticle(this.$page)) return 'ArticleLayout'
            return 'BasicLayout'
        }
    },
}
</script>