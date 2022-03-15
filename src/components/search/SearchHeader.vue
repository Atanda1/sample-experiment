<template>
  <div class="search__buttons">
    <h2
      class="search__buttons__docs cursor"
      @click="openDocs"
    >
      Docs
    </h2>
    <button
      v-if="status"
      class="search__buttons__wallet"
    >
      <h3>Connected</h3>
    </button>
    <button
      v-else
      class="search__buttons__wallet"
      @click="pushModal"
    >
      <h3>Connect Wallet</h3>
    </button>
  </div>
</template>

<script>
import store from "../../store/index";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";
const { useState } = createNamespacedHelpers(store, "connect");
import { pushModal } from "jenesius-vue-modal";
import ConnectWallet from "../modal/connectWallet.vue";
export default {
  name: "SearchHeader",
  setup() {
    const { status } = useState(["status"]);
    const openDocs = () => {
      window.open("https://david-atanda.gitbook.io/inferus/", "_blank");
    };
    return {
      status,
      openDocs,
      pushModal: () => pushModal(ConnectWallet),
    };
  },
};
</script>