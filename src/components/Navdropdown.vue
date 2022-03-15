<template>
  <div class="container-dashboard__header__pro1">
    <div class="container-dashboard__header__profile">
      <img src="../assets/nft.svg" class="ma4 dp" />
      <h5 class="container-dashboard__header__profile__name ma4">
        {{ cardAddress }}
      </h5>
      <img src="../assets/dropdown.svg" />
    </div>
    <div class="container-dashboard__header__pro">
      <div class="container-dashboard__header__profi" @click="copy">
        <h2 class="container-dashboard__header__profi__title">My wallet</h2>
        <div class="container-dashboard__header__profi__wallet">
          <img src="../assets/nft.svg" />
          <div class="container-dashboard__header__profi__wallet__details">
            <h3
              class="
                container-dashboard__header__profi__wallet__details__address
              "
            >
              {{ secondCardAddress }}
            </h3>
            <h3
              class="container-dashboard__header__profi__wallet__details__net"
            >
              Mainnet
            </h3>
          </div>
          <img src="../assets/copyIcon.svg" />
        </div>
      </div>
      <div class="container-dashboard__header__profi__disconnect">
        <button class="container-dashboard__header__profi__disconnect__button">
          Disconnet Wallet
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import useClipboard from "vue-clipboard3";
  import { useToast } from "vue-toastification";
  import store from "../store/index"
  import { createNamespacedHelpers } from "vuex-composition-helpers/dist";
  const { useState } = createNamespacedHelpers(store, "connect"); 
  const { address } = useState(['address']);
  import { computed } from 'vue'
  export default {
    name: "Navdropdown",
    setup() {
      const { toClipboard } = useClipboard();
      const toast = useToast();
      const cardAddress = computed(() => return address.toString().substring(0,3) + "..." + address.toString().slice(-3))
      const secondCardAddress = computed(() => return address.substring(0,9) + "..." + address.slice(-9))
      const copy = async () => {
        try {
          await toClipboard(address.toString());
          toast(
            `Your wallet address has been copied to clipboard`,
            { type: "info" },
            { background: "#1c82ff;" }
          );
        } catch (e) {
          console.error(e);
        }
      };
      return { copy, address, cardAddress, secondCardAddress };
    },
  };
</script>
