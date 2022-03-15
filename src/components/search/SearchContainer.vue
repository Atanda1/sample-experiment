<template>
  <div class="search__container">
    <div class="full">
      <img class="search__container__image" src="../../assets/logo.svg" />
      <div class="search__container__input">
        <img
          class="search__container__input__icon"
          src="../../assets/search.svg"
        />
        <input
          class="search__container__input__tag"
          placeholder="Search names or addresses"
        />
        <button class="search__container__button" @click="pushDashboard">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "SearchContainer",
  setup() {
    const router = useRouter();
    return {
      pushDashboard: () => router.push("./dashboard"),
    };
  },
};
</script>