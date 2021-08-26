<template>
  <div class="page-list">
    <div
      class="page-list__item"
      v-for="(comp, index) in configData"
      :key="index"
    >
      <template v-if="comp.data">
        <component
          v-if="comp.type"
          :is="comp.data.componentName"
          :item="comp"
        ></component>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import json from '@/config/pages.json'
import PageBlock from '@/classes/Page/PageBlock'
import PageBlockButton from '@/components/Page/PageBlockButton.vue'
import PageBlockTable from '@/components/Page/PageBlockTable.vue'

export default Vue.extend({
  name: 'PageList',
  components: {
    PageBlockButton: PageBlockButton,
    PageBlockTable: PageBlockTable,
  },
  data() {
    return {
      json: json,
    }
  },
  computed: {
    configData() {
      return json[0].data.map((data) => new PageBlock(data.type, data.data))
    },
  },
  mounted() {
    console.log(this.configData, this.configData.length)
  },
})
</script>

<style lang="scss"></style>
