<template>
    <form action="" class="row">
        <div class="col-4 m-1">
            <label for="house-price">House Price</label>
            <input v-model="houseData.price" name="house-price" id="house-price" class="form-range" value="5000"
                type="range" min="1" max="100000000" required>
        </div>
        <div class="col-1 m-1">
            <label for="house-bedrooms">Bedrooms</label>
            <input v-model="houseData.bedrooms" name="house-bedrooms" id="house-year" class="form-control" type="number"
                required minlength="1" maxlength="50">
        </div>
        <div class="col-1 m-1">
            <label for="house-bathrooms">Bathrooms</label>
            <input v-model="houseData.bathrooms" name="house-bathrooms" id="house-bathrooms" class="form-control"
                type="number" required minlength="1" maxlength="50">
        </div>
        <div class="col-1 m-1">
            <label for="house-levels">Levels</label>
            <input v-model="houseData.levels" name="house-levels" id="house-levels" class="form-control" type="number"
                required minlength="1" maxlength="50">
        </div>
        <div class="col-2 m-1">
            <label for="house-year">Age of House</label>
            <input v-model="houseData.year" name="house-year" id="house-year" class="form-control" type="number" required>
        </div>
        <div class="col-12 mb-3">
            <label for="house-description">Description of the House</label>
            <textarea v-model="houseData.description" name="house-description" id="house-description" class="form-control"
                rows="3"></textarea>
        </div>
        <div class="mb-3 col-8">
            <label for="house-picture">Picture of house</label>
            <input v-model="houseData.imgUrl" class="form-control" type="url" required name="house-picture"
                id="house-picture">
        </div>
        <div class="col-4 p-3">
            <img v-if="houseData.imgUrl" :src="houseData.imgUrl" class="img-fluid" alt="">
            <div v-else class="place-holder"> preview of house image</div>
        </div>
    </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { houseService } from '../services/HouseService.js';
import { House } from '../models/House.js';
export default {
    setup() {
        const houseData = ref({})


        return {
            houseData

        }
    }
};
</script>


<style lang="scss" scoped></style>