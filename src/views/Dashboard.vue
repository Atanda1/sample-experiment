<template>
  <div class="container-dashboard dashboard__rows dashboard__bg">
    <div class="container-dashboard__inner">
      <sidebar-wrapper />
      <div class="container-dashboard__inner__content">
        <search-bar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarWrapper from "../components/sidebar/sidebarWrapper.vue";
import SearchBar from "../components/searchbar/SearchBar.vue";
export default {
  name: "Dashboard",
  components: {
    SearchBar,
    SidebarWrapper,
  },
  setup() {
    const openDocs = () => {
      window.open("https://david-atanda.gitbook.io/inferus/", "_blank");
    };

    return { openDocs };
  },
};
</script>
