<template>
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
        <router-link :to="path">
            <img class="w-full" :src="image" alt="Sunset in the mountains">
        </router-link>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"><router-link :to="path">{{ title }}</router-link></div>
            <pre class="pb-4">Posted on: {{ formatDate(date) }}</pre>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
        <div class="px-6 py-4" >
            <span v-for="tag in tags" class="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-blue-300"><a :href="'/t/'+ tag">
            #{{ tag.path }}</a></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            required: true,
        },
        path: {
            required: true,
        },
        description: {
            required: true,
            default: '',
        },
        image: {
            default: 'http://placekitten.com/300/200',
        },
        date: {
            default: '',
        },
        tags: {
            default: '',
        }
    },
    methods: {
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        }
    }
}
</script>