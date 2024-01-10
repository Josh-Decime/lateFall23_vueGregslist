<template>
    <div class="house-card border border-secondary rounded shadow">
        <img :src="house.imgUrl" alt="">
        <div class="p-1">
            <p class="fs-3 text-center fw-bold">${{ house.price }}</p>
            <p>{{ house.bedrooms }} bds | {{ house.bathrooms }} ba | {{ house.levels }} lvls | {{ house.year }} yr</p>
            <p>{{ house.description }}</p>
        </div>


    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { House } from '../models/House.js';
export default {
    props: { house: { type: House, required: true } },
    setup(props) {


        return {


        }
    }
};
</script>


<style lang="scss" scoped>
.house-card {
    position: relative;

    img {
        width: 100%;
        height: 25vh;
        object-fit: cover;
        object-position: center;
    }
}
</style>