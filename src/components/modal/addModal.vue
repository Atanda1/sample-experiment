<template>
  <div class="modal">
    <div class="modal__header">
      <div class="modal__header__title">Add/Edit Text Records</div>
      <img
        class="modal__header__close"
        type="reset"
        src="../../assets/close.svg"
        @click="closeModal"
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
    <div v-for="(item, counter) in items" :key="counter" class="previous">
      <div class="flex">
        <input
          v-model="item.key"
          class="modal__label add__label"
          placeholder="label"
          type="text"
          required
        />
        <img
          class="add__close cursor"
          src="../../assets/close.svg"
          @click="deleteItem(counter)"
        />
      </div>
      <input
        v-model="item.value"
        class="modal__input"
        placeholder="value"
        type="text"
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

