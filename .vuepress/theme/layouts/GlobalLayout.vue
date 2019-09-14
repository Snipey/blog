<template>
  <div id="global-layout">
    <Header></Header>
    <component :is="layout"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

export default {
    components: { 
      Header,
      Footer
    },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>