<template>
  <div class="container-dashboard__inner__sidebar">
    <router-link :to="{ name: 'search' }">
      <img
        class="container-dashboard__inner__sidebar__img"
        src="../../assets/logo.svg"
      />
    </router-link>
    <div class="container-dashboard__header">
      <navdropdown />
    </div>
    <mobile-sidebar />
    <sidebar />
  </div>
</template>

<script>
import Navdropdown from "../navdropdown/Navdropdown.vue";
import MobileSidebar from "./mobileSidebar.vue";
import Sidebar from "./sidebar.vue";
export default {
  name: "SidebarWrapper",
  components: {
    Navdropdown,
    MobileSidebar,
    Sidebar,
  },
  setup() {},
};
</script>