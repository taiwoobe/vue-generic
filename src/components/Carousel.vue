<template>
    <div class="wrapper">
    <slot name="defaultCarousel">
        <carousel-3d>
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                </template>
            </slide>
        </carousel-3d>
    </slot>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    name: 'Carousel',
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
            slides: [
                { id: 1, src: 'https://placehold.it/360x270' },
                { id: 2, src: 'https://placehold.it/360x270' },
                { id: 3, src: 'https://placehold.it/360x270' },
                { id: 4, src: 'https://placehold.it/360x270' },
                { id: 5, src: 'https://placehold.it/360x270' },
            ]
        }
    },
}
</script>

<style scoped lang="scss">

</style>