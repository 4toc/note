<template>
  <div class="sidebar-list">
    <SidebarListItem v-for="item in getList()" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import json from '@/config/sidebar.json'
import SidebarListItem from '@/components/Sidebar/SidebarListItem.vue'
import Sidebar from '@/classes/Sidebar'

export default Vue.extend({
  name: 'SidebarList',
  components: {
    SidebarListItem: SidebarListItem,
  },
  data() {
    return {
      sidebarConfig: json,
    }
  },
  methods: {
    getList(): Array<Sidebar> {
      return [...this.sidebarConfig].map((item) => new Sidebar(item))
    },
  },
})
</script>

<style lang="scss"></style>
