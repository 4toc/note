<template>
  <div class="sidebar-user">
    <div class="sidebar-user__avatar">
      <img src="@/assets/img/avatar.jpg" alt="" />
    </div>
    <div class="sidebar-user__name">KMTT admin</div>
    <div class="sidebar-user__icon-more">
      <Popover :options="settingsPopover">
        <chevron-down-icon size="1.5x"></chevron-down-icon>
      </Popover>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ChevronDownIcon } from 'vue-feather-icons'
import Popover from '@/components/Popover.vue'

export default Vue.extend({
  name: 'SidebarUser',
  components: {
    ChevronDownIcon: ChevronDownIcon,
    Popover: Popover,
  },
  data() {
    return {
      settingsPopover: [
        { name: 'Основные настройки', icon: 'SettingsIcon' },
        { name: 'Настроить меню', icon: 'MenuIcon' },
        { name: 'Сообщить о проблеме', icon: 'AlertTriangleIcon' },
      ],
    }
  },
})
</script>

<style lang="scss">
.sidebar-user {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #1a1c1f;
  padding: 0 18px;
  &__avatar {
    height: 20px;
    width: 20px;
    margin-right: 12px;
    background: red;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
  &__name {
    color: #f2f2f2;
  }
  &__icon-more {
    margin-left: auto;
  }
}
</style>
