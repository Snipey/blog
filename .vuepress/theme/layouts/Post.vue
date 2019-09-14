<template>
    <div class="container mx-auto my-10 rounded-t-lg border shadow-xl">
        <img class="w-full rounded-t-lg" src="http://placekitten.com/1920/700" alt="Sunset in the mountains">
        <div class="xl:px-40 xl:mb-12 xl:py-10">
            
            <div class="xl:mb-4 xl:mx-10 xl:px-10">
                <span class="text-xl sm:text-5xl font-bold">{{ $page.frontmatter.title }}</span>
            </div>
            <div class="bg-gray-400 border-t-2 border-b-2 border-gray-700 opacity-75 px-10 py-1">
                <ul class="flex justify-between">
                    <li class="mr-3">
                        <pre>{{ momentFormat($page.frontmatter.date) }}</pre>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-20">
            <Content/>
        </div>
        <ClientOnly>
          <div class="p-20">
            <Disqus :shortname="'snipeydev'" :identifier="$page.key" :title="$page.frontmatter.title"/>
          </div>
        </ClientOnly>
    </div>
</template>

<script>
import moment from "moment"

export default {
    methods: {
        momentFormat(date) {
            return moment(date).format("YYYY-MM-DD @hh:mma");
        },
    }
}
</script>