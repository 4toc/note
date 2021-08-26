<template>
  <div class="main">
    <span class="main__folder">Списки данных</span>
    <h2 class="main__title">Управление пользователями</h2>
    <PageList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageList from '@/components/Page/PageList.vue'
export default Vue.extend({
  name: 'TheMain',
  components: {
    PageList: PageList,
  },
})
</script>

<style lang="scss">
.main {
  background: $background;
  height: 100%;
  widows: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;

  &__folder {
    font-size: 14px;
    font-weight: 400;
  }

  &__title {
    color: #b8b9be;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 26px;
  }
}
</style>
