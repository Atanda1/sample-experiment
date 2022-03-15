  <template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <a
        class="menu__item"
        exact-active-class="exact-active"
        :href="$router.resolve({ name: 'account' }).href"
        >My Account</a
      >
      <a
        class="menu__item"
        exact-active-class="exact-active"
        :href="$router.resolve({ name: 'favourites' }).href"
        >Favourites</a
      >
    </ul>
  </div>
</template>
  <script>
export default {
  name: "MobileSidebar",
};
</script>