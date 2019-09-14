<template>
<header>
    <nav style="z-index: 99 !important;"
      class="mx-auto py-2 px-4 font-sans text-center flex justify-between static container"
    >
      <a
        href="/"
        class="text-left no-underline font-bold text-black uppercase py-3 px-3"
      v-text="$site.title"/>
      <div>
        <ul class="text-m text-black list-reset flex items-center">
          <li v-for="item in $site.themeConfig.nav">
            <a
              :href="item.link"
              class="inline-block py-4 px-3 text-black hover:text-grey-dark no-underline hover:text-teal-500 font-semibold"
            >{{item.text}}</a>
          </li>
        </ul>
      </div>
    </nav>
</header>
</template>

<script>

export default {
}
</script>