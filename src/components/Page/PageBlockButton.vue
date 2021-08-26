<template>
  <div class="page-block-button">
    <router-link :to="item.data.link">
      {{ item.data.title }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PageBlockButton from '@/classes/Page/PageBlockButton'
export default Vue.extend({
  name: 'PageBlockButton',
  props: {
    item: Object as PropType<PageBlockButton>,
  },
})
</script>

<style lang="scss">
.page-block-button {
  color: #d5e5fb;
  font-size: 400;
  text-decoration: none;
  background: #3680ec;
  padding: 10px 20px;
  border-radius: 12px;
  display: inline-block;
  align-items: center;
  box-shadow: 0 6px 15px 0 rgba(54, 128, 236, 0.2);
}
</style>
