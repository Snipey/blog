<template>
<div>
  <font-awesome-icon
      class="mr-1"
      :icon="['fas', 'tag']"
  />
  <span
  v-for="tag in tags"
  class="inline-block rounded-full text-md font-bold text-gray-700 mr-2 hover:bg-blue-300">
    <a :href="'/tag/'+ tag">
      #{{ tag }}
    </a>
  </span>
</div>
</template>

<script>
  export default {
    props: ['tags']
  }
</script>