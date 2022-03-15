<template>
  <div
    v-for="name in nameList"
    :key="name.name"
    class="container__inner__div__accordion"
  >
    <div class="col">
      <div class="tabs">
        <div class="tab">
          <input
            :id="name.name"
            type="checkbox"
          >
          <label
            class="tab-label"
            :for="name.name"
          >
            <img
              class="close"
              src="../../assets/nameIcon.svg"
            >
            <h3 class="tab-label__name">{{ name.name }}</h3>

            <div class="tab-label__available">
              <img
                class="tab-label__available__icon"
                src="../../assets/openIcon.svg"
                :class="{ hide: name.registered }"
              >
              <h3
                class="tab-label__available__text"
                :class="{ hide: name.registered }"
              >
                Available
              </h3>
              <h3
                class="tab-label__available__text"
                :class="{ hide: !name.registered }"
              >
                Registered
              </h3>
            </div>

            <img
              class="tab-label__love"
              :class="{ hide: name.favourites }"
              src="../../assets/nameLove.svg"
            >
            <img
              class="tab-label__love"
              :class="{ hide: !name.favourites }"
              src="../../assets/loveFilled.svg"
            >
          </label>
          <div class="tab-content">
            <div :class="{ hide: name.registered }">
              <div class="tab-content__inner">
                <div class="flex">
                  <div class="tab-content__inner__options">
                    <h3 class="tab-content__inner__options__text">
                      Name
                    </h3>
                    <span
                      class="ma4"
                    ><div class="tab-content__inner__options__name">
                      {{ name.name }}
                    </div>
                    </span>
                  </div>
                  <div class="tab-content__inner__options">
                    <h3 class="tab-content__inner__options__text">
                      Price
                    </h3>
                    <span
                      class="ma4"
                    ><div class="tab-content__inner__options__name">
                      0 ONE
                    </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ hide: !name.registered }">
              <div class="accordion__registered__content">
                <div class="accordion__registered__content__first">
                  <h2 class="accordion__registered__content__first__title">
                    TEXT RECORDS
                  </h2>
                  <h3 class="accordion__registered__content__label">
                    email
                  </h3>
                  <h4 class="accordion__registered__content__value">
                    not set
                  </h4>
                  <h3 class="accordion__registered__content__label">
                    avatr
                  </h3>
                  <h4 class="accordion__registered__content__value">
                    not set
                  </h4>
                </div>
                <div class="accordion__registered__content__second">
                  <h3 class="accordion__registered__content__label ma9">
                    url
                  </h3>
                  <h4 class="accordion__registered__content__value">
                    not set
                  </h4>
                  <h3 class="accordion__registered__content__label">
                    description
                  </h3>
                  <h4 class="accordion__registered__content__value">
                    not set
                  </h4>
                </div>
                <div class="accordion__registered__content__third">
                  <h3
                    class="accordion__registered__content__button ma9 cursor"
                    @click="pushModal"
                  >
                    Add/Edit records
                  </h3>
                </div>
              </div>
            </div>
            <div :class="{ hide: name.registered }">
              <p @click="pushModal">
                Register Now<span
                  class="ma4"
                ><img
                  class="container__inner__div__accordion__img"
                  src="../../assets/arrow.svg"
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pushModal } from "jenesius-vue-modal";
import AddModal from "../modal/addModal.vue";

export default {
  name: "Accordion",
  props: {
    nameList: {
      type: Array,
    },
  },
  setup() {
    return {
      pushModal: () => pushModal(AddModal),
    };
  },
  data() {
    return {
      check: Math.floor(Math.random() * 10000),
    };
  },
};
</script>
