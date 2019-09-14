<template>
    <div class="">
        <div class="rounded-lg overflow-hidden shadow-lg p-1 border" style="margin: 8px;">
            <router-link :to="path">
                <img class="w-full thumb" :src="image" alt="Sunset in the mountains">
            </router-link>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"><router-link :to="path">{{ title }}</router-link></div>
                <pre class="pb-4">Posted on: {{ formatDate(date)}}</pre>
                <p class="text-gray-700 text-base break-normal pb-2 border-b mb-4" v-text="description" />
                <p class="text-gray-700 text-base" v-html="excerpt" />
            </div>
            <hr class="w-4/5 mx-auto" />
            <div class="px-6 py-4" >
                <font-awesome-icon
                class="mr-1"
                :icon="['fas', 'tag']">
                </font-awesome-icon>
                <Tag v-for="tag in tags" :tag="tag" />
            </div>
        </div>
    </div>
</template>
<style>
.post {
    width: 100%;
    height: 650px;
}
.thumb {
    height: 300px;
}
</style>
<script>
import Tag from './Tag';

export default {
    components: {
        Tag,
    },
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
        },
        featured: {
            default: 'false',
        },
        excerpt: {
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