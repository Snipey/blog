<template>
    <div class="w-1/3 justify-center">
        <div class="border rounded-lg shadow">
            <router-link :to="path">
                <img class="rounded-t-lg w-full" style="" :src="image" alt="">
            </router-link>
            <div class="p-4">
                <div class="text-center mb-4">
                    <router-link
                        class="text-xl font-bold"
                        :to="path"
                    >
                        {{ title }}
                    </router-link>
                </div>
                <p class="" v-text="description" />
                <p class="break-words" v-html="excerpt" />
            </div>
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
            default: 'https://picsum.photos/300/170',
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