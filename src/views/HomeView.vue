<template>
  <div class="home">
    <div class="home__sidebar">
      <TheSidebar />
    </div>
    <div class="home__main">
      <TheMain />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheMain from '@/components/TheMain.vue'
export default Vue.extend({
  name: 'HomeView',
  components: {
    TheSidebar,
    TheMain,
  },
})
</script>

<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  widows: 100%;
  &__sidebar {
    height: 100%;
  }
  &__main {
    height: 100%;
    width: 100%;
  }
}
</style>
