<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap bg-yellow-200 border" v-for="tag in $tag.list">
      <router-link class="text-center" :to="tag.path">
        <img class="h-24" :src="$withBase('/icons/' + tag.name + '.svg')"></img>
      {{ tag.name }}</router-link>
    </div>
  </div>
</template>
