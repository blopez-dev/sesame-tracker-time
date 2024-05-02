<script lang="ts">
import {useWorker} from "@/composables/useGetStatusWorker";
import OnlineWorker from "@/components/OnlineWorker.vue";
import LayoutDefault from "@/layouts/LayoutDefault.vue";
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
  data() {
    const { worker } = useWorker()
    return { worker }

  },
  created() {
    const { getInitialWorkerState } = useWorker()
    getInitialWorkerState()
  }

}
</script>

<template>
  <LayoutDefault>
    <slot />
  </LayoutDefault>
</template>

<style>

</style>
