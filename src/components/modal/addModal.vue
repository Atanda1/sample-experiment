<template>
  <div class="modal">
    <div class="modal__header">
      <div class="modal__header__title">Add/Edit Text Records</div>
      <img
        class="modal__header__close"
        type="reset"
        @click="closeModal"
        src="../../assets/close.svg"
      />
    </div>
    <label class="modal__label">email</label>
    <input type="number" placeholder="not set" class="modal__input" />
    <label class="modal__label">url</label>
    <input type="number" placeholder="not set" class="modal__input" />
    <label class="modal__label">avatar</label>
    <input type="number" placeholder="not set" class="modal__input" />
    <label class="modal__label">descriptions</label>
    <input type="number" placeholder="not set" class="modal__input" />
    <div class="previous" v-for="(item, counter) in items" v-bind:key="counter">
      <div class="flex">
        <input
          class="modal__label add__label"
          placeholder="label"
          type="text"
          v-model="item.key"
          required
        />
        <img
          class="add__close"
          @click="deleteItem(counter)"
          src="../../assets/close.svg"
        />
      </div>
      <input
        class="modal__input"
        placeholder="value"
        type="text"
        v-model="item.value"
        required
      />
    </div>
    <div class="modal__record" @click="addItem">
      <img src="../../assets/plus.svg" />
      <h2 class="modal__record__text cursor">Add New Record</h2>
    </div>
    <button class="modal__button">Save</button>
  </div>
</template>
<script>
import { closeModal } from "jenesius-vue-modal";
import { ref } from "vue";
export default {
  name: "AddModal",
  setup() {
    const items = ref([
      // {
      //   key: "d",
      //   value: "",
      // },
    ]);
    const addItem = () => {
      console.log("log");
      items.value.push({
        key: "",
        value: "",
      });
    };

    const deleteItem = (counter) => {
      items.value.splice(counter, 1);
    };
    return {
      closeModal: () => closeModal(),
      addItem,
      items,
      deleteItem,
    };
  },
};
</script>

