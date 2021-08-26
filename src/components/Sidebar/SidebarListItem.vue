<template>
  <div class="sidebar-list-item">
    <h6 class="sidebar-list-item__title padding-sidebar">{{ item.title }}</h6>
    <div class="sidebar-list-item__links">
      <router-link
        v-for="link in item.data"
        :key="link.id"
        :to="'note/' + link.id"
        class="sidebar-list-item__link padding-sidebar"
        :class="{ 'sidebar-list-item__link--special': link.special }"
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ISidebarItem } from '@/classes/SidebarItem'
export default Vue.extend({
  name: 'SidebarListItem',
  props: {
    item: Object as PropType<{ title: string; data: Array<ISidebarItem> }>,
  },
})
</script>

<style lang="scss">
.sidebar-list-item {
  &__title {
    color: #494d52;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 14px;
    margin: 18px 0;
  }
  &__links {
    display: flex;
    flex-direction: column;
  }
  &__link {
    font-size: 14px;
    text-decoration: none;
    color: #7b7c83;
    font-weight: 500;
    padding-top: 6px;
    padding-bottom: 5px;
    transition: all 0.2s;
    &:hover {
      background: #23252a;
      cursor: pointer;
    }
  }
  &__link--special {
    margin-bottom: 20px;
    margin-top: 20px;
  }
}
</style>
