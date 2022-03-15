<template>
  <search-header />
  <search-container />
</template>

<script>
import SearchHeader from "./SearchHeader.vue";
import SearchContainer from "./SearchContainer.vue";
//import { useRouter } from "vue-router";
export default {
  name: "SearchWrapper",
  components: {
    SearchHeader,
    SearchContainer,
  },
  setup() {},
};
</script>