<template>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-blue-300">
    <a :href="'/tag/'+ tag">
      #{{ tag }}
    </a>
  </span>
</template>

<script>
  export default {
    props: ['tag', 'slug']
  }
</script>