<template>
  <div class="modal">
    <div class="modal__connect">
      <div
        class="cursor"
        @click="connectMetamaskWallet"
      >
        <img
          class="ma-left"
          src="../../assets/metamask.svg"
        >
        <h3 class="container-dashboard__inner__content__lead__modal">
          Metamask
        </h3>
        <h4 class="container-dashboard__inner__content__title__modal">
          Connect to your Metamask Wallet
        </h4>
      </div>
      <div
        class="cursor"
        @click="connectUserWalletConnect"
      >
        <img
          class="ma-left"
          src="../../assets/walletConnect.svg"
        >
        <h3 class="container-dashboard__inner__content__lead__modal">
          Wallet Connect
        </h3>
        <h4 class="container-dashboard__inner__content__title__modal">
          Scan with WalletConnect to connect
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
import { closeModal } from "jenesius-vue-modal";
import { createNamespacedHelpers } from "vuex-composition-helpers/dist";
import store from "../../store/index";
const { useActions } = createNamespacedHelpers(store, "connect");
const { connectMetamask, connectWalletConnect } = useActions([
  "connectMetamask",
  "connectWalletConnect",
]);
export default {
  name: "ConnectWallet",
  setup: () => ({
    closeModal: () => closeModal(),
    connectMetamaskWallet: async () => {
      await connectMetamask();
      closeModal();
    },
    connectUserWalletConnect: () => connectWalletConnect(),
  }),
};
</script>