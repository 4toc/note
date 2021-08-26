<template>
  <div class="popover">
    <slot class="popover__component"></slot>
    <div class="popover__menu">
      <div
        class="popover__item"
        v-for="(option, index) in options"
        :key="index"
      >
        <component
          class="popover__icon"
          :is="option.icon"
          :size="'14'"
        ></component>
        <span class="popover__name">{{ option.name }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SettingsIcon, MenuIcon, AlertTriangleIcon } from 'vue-feather-icons'

export default Vue.extend({
  name: 'Popover',
  props: {
    options: Array,
  },
  components: {
    SettingsIcon,
    MenuIcon,
    AlertTriangleIcon,
  },
})
</script>

<style lang="scss">
.popover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    .popover__menu {
      display: flex;
    }
  }
  &__menu {
    position: absolute;
    top: 100%;
    right: -15px;
    width: 260px;
    background: #17191c;
    display: none;
    flex-direction: column;
    border: 1px solid #313236;
    border-radius: 8px;
  }
  &__item {
    height: 36px;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #909198;
    &:hover {
      background: #222428;
    }
  }
  &__icon {
    margin: 0 10px;
  }
}
</style>
