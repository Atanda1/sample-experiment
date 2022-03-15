<template>
  <div class="container home-rows">
    <search-wrapper />
  </div>
</template>

<script>
import SearchWrapper from "../components/search/SearchWrapper.vue";
import { useRouter } from "vue-router";

export default {
  name: "Search",
  components: {
    SearchWrapper,
  },
  setup() {
    const router = useRouter();
    return {
      pushDashboard: () => router.push("./dashboard"),
    };
  },
};
</script>
