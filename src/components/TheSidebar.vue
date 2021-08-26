<template>
  <div class="sidebar">
    <SidebarUser />
    <SidebarList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidebarUser from '@/components/Sidebar/SidebarUser.vue'
import SidebarList from '@/components/Sidebar/SidebarList.vue'
export default Vue.extend({
  components: {
    SidebarUser: SidebarUser,
    SidebarList: SidebarList,
  },
  name: 'SideBar',
})
</script>

<style lang="scss">
.sidebar {
  width: 280px;
  height: 100%;
  background: $background;
  border-right: 1px solid #1a1c1f;
}
</style>
