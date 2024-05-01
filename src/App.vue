<script lang="ts">
import {useWorker} from "@/composables/useGetStatusWorker";
import OnlineWorker from "@/components/OnlineWorker.vue";
import OfflineWorker from "@/components/OfflineWorker.vue";
import Menu from '@/components/DropdownMenu/DropDownMenu.vue'


export default {
  name: 'App',
  components: {
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
      <img src="" alt=""/>
      <OfflineWorker v-if="worker.workStatus === 'offline'"><Menu /></OfflineWorker>
      <OnlineWorker v-if="worker.workStatus === 'online'"><Menu /></OnlineWorker>
</template>

<style>

</style>
