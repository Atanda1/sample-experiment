<template>
  <router-view />
  <widget-container-modal />
</template>

<script>
import { container } from "jenesius-vue-modal";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";
import store from "./store/index";
const { useActions } = createNamespacedHelpers(store, "connect");
const { autoConnectMetamask } = useActions(["autoConnectMetamask"]);
import { onMounted } from "vue";

export default {
  name: "App",
  components: { WidgetContainerModal: container },
  setup() {
    onMounted(async () => {
      autoConnectMetamask();
    });
  },
};
</script>
