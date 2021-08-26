<template>
  <div class="page-block-table">
    <div class="page-block-table__description">
      <div class="page-block-table__name">{{ item.data.name }}</div>
      <div class="page-block-table__search-wrapper">
        <input
          id="table-search"
          class="page-block-table__search-input"
          placeholder="Поиск"
        />
        <label class="page-block-table__search-label" for="table-search">
          <SearchIcon class="page-block-table__seatch-icon" size="14" />
        </label>
      </div>
    </div>
    <table class="page-block-table__table">
      <tr class="page-block-table__tr">
        <th
          v-for="(th, index) in item.data.th"
          :key="index"
          class="page-block-table__cell page-block-table__cell--th"
        >
          <span
            ><component
              :is="th.icon"
              :size="'1x'"
              class="page-block-table__th-icon"
            ></component>
            {{ th.name }}
          </span>
        </th>
      </tr>
      <tr v-for="tr in item.data.tr" :key="tr.id" class="page-block-table__tr">
        <td
          v-for="(td, index) in tr"
          :key="index"
          class="page-block-table__cell"
          :class="{
            'page-block-table__cell--id':
              item.data.th[index].type === enums.TableCellEnum.id,
          }"
        >
          <span
            v-if="item.data.th[index].type !== enums.TableCellEnum.action"
            >{{ td }}</span
          >
          <span class="page-block-table__action" v-else
            ><Popover :options="settingsPopover">
              <MoreHorizontalIcon size="1.5x" /> </Popover
          ></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PageBlockTable from '@/classes/Page/PageBlockTable'
import { TableCellEnum } from '@/classes/enums/table-cell-type.enum'
import Popover from '@/components/Popover.vue'
import {
  MoreHorizontalIcon,
  ListIcon,
  UserIcon,
  MailIcon,
  InfoIcon,
  DiscIcon,
  SearchIcon,
} from 'vue-feather-icons'
export default Vue.extend({
  name: 'PageBlockTable',
  props: {
    item: Object as PropType<PageBlockTable>,
  },
  components: {
    MoreHorizontalIcon,
    ListIcon,
    UserIcon,
    MailIcon,
    InfoIcon,
    DiscIcon,
    SearchIcon,
    Popover,
  },
  data() {
    return {
      enums: {
        TableCellEnum: TableCellEnum,
      },
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
.page-block-table {
  margin-bottom: 20px;
  &__description {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__name {
    color: #82838a;
    font-size: 12px;
    font-weight: 600;
  }

  &__search-wrapper {
    margin-left: auto;
    position: relative;
  }
  &__search-input {
    width: 200px;
    height: 22px;
    border-radius: 10em;
    text-indent: 26px;
    background: transparent;
    outline: none;
    border: 1px solid #242529;
    color: #b8b9be;
    &::placeholder {
      color: #44474d;
    }
    &:focus {
      outline: none;
    }
  }
  &__search-label {
    color: #44474d;
  }
  &__search-label {
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 14px;
  }

  &__table {
    width: 100%;
    display: table;
    table-layout: fixed;
  }
  &__tr {
    display: flex;
    &:not(:last-child) {
      border-bottom: 1px solid #292a2f;
    }
  }
  &__cell {
    text-align: left;
    display: flex;
    align-items: center;
    padding: 10px 8px;
    font-weight: 500;
    width: 100%;
    overflow: hidden;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
    }
    &:last-child {
      overflow: unset;
      span {
        overflow: unset;
      }
    }
    &:not(:last-child) {
      border-right: 1px solid #292a2f;
    }
    &--th {
      color: #4a4e53;
      font-weight: 400;
    }
    &--id {
      color: #205699;
    }
  }
  &__th-icon {
    margin-right: 6px;
    margin-bottom: 2px;
  }
}
</style>
