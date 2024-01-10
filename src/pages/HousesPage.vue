<template>
  <div class="component">
    THE HOMES PAGE

  </div>

  <section class="row my-2">
    <div v-for="house in houses" class="col-4 mb-3">
      <HouseCard :house="house" />
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { houseService } from '../services/HouseService.js';
import HouseCard from '../components/HouseCard.vue';
export default {
  setup() {
    onMounted(() => {
      getHouses();
    });
    async function getHouses() {
      try {
        await houseService.getHouses();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      houses: computed(() => AppState.houses),
    };
  },
  components: { HouseCard }
};
</script>


<style lang="scss" scoped></style>
