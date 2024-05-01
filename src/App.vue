<script lang="ts">
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import OnlineWorker from "@/components/OnlineWorker.vue";
import OfflineWorker from "@/components/OfflineWorker.vue";
import Menu from '@/components/DropdownMenu/DropDownMenu.vue'

export default {
  name: 'App',
  components: {
    LayoutDefault,
    OnlineWorker,
    OfflineWorker,
    Menu
  },
}
</script>

<template>
  <LayoutDefault>

  </LayoutDefault>
</template>

<style>

</style>
