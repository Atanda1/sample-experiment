<template>
  <h1 class="container-dashboard__inner__content__lead">Favourites</h1>
  <div v-if="empty">
    <h2 class="container-dashboard__inner__content__title">Name</h2>
    <accordion :nameList="nameList" />
  </div>
  <div v-else class="container-dashboard__inner__content__empty">
    <div class="container-dashboard__inner__content__empty__container">
      <img
        class="container-dashboard__inner__content__empty__container__image"
        src="../../assets/emptyLove.svg"
      />
      <h3 class="container-dashboard__inner__content__empty__container__title">
        No names have been saved
      </h3>
      <h4
        class="container-dashboard__inner__content__empty__container__subtitle"
      >
        To add names to favourites, click the like icon next to any of your
        desired names.
      </h4>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Accordion from "../accordion/Accordion.vue";
export default {
  name: "Favourites",
  components: {
    Accordion,
  },
  setup() {
    const nameList = ref([
      {
        name: "Tunde",
        price: "7",
        token: "ONE",
        registered: true,
        favourites: true,
      },
      {
        name: "orange",
        price: "12",
        token: "ONE",
        registered: false,
        favourites: true,
      },
    ]);
    const empty = ref(true);
    onMounted(() => {
      if (nameList.value.length < 1) {
        empty.value = false;
      }
    });
    return { nameList, empty };
  },
};
</script>
