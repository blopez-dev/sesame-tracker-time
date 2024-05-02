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
  <div id="app" class="bg-grey-extra-light h-screen flex items-center justify-center flex-col gap-[20px]">
    <img src="@/assets/img/spinner-svgrepo-com.svg" alt="is loading page" v-if="worker.workStatus === null"/>
    <OfflineWorker v-if="worker.workStatus === 'offline'"><Menu /></OfflineWorker>
    <OnlineWorker v-if="worker.workStatus === 'online'"><Menu /></OnlineWorker>
  </div>
</template>

<style>

</style>
