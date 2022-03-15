<template>
  <div v-if="!registered">
    <h2 class="container-dashboard__inner__content__title">Name</h2>
    <accordion :name-list="nameList" />
  </div>
  <div v-else>
    <h1 class="container-dashboard__inner__content__lead">My Account</h1>
    <h2 class="container-dashboard__inner__content__title">Registered Names</h2>
    <accordion :name-list="nameList" />
  </div>
</template>

<script>
import Accordion from "../accordion/Accordion.vue";
import { ref } from "vue";
export default {
  name: "Account",
  components: {
    Accordion,
  },
  setup() {
    const registered = ref(false);
    const nameList = ref([
      { name: "Tunde", price: "7", token: "ONE", registered: true },
      { name: "orange", price: "12", token: "ONE", registered: true },
    ]);
    return {
      registered,
      nameList,
    };
  },
};
</script>
