<script lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import OnlineWorker from "@/components/OnlineWorker.vue";
import OfflineWorker from "@/components/OfflineWorker.vue";
import Menu from "@/components/DropdownMenu/DropDownMenu.vue";
export default {
  name: 'Tracker-Offline',
  components: {
    Menu,
    OfflineWorker,
    OnlineWorker,
    BaseButton,
  },
  data () {
    return {
      showMenu: false,
      timeoutMenu: null
    }
  },
  methods: {
    async clickOnClockIn () {
      await clockIn({ employeeId: this.worker.id, workEntryIn: { coordinates: { latitude: 39.4697500, longitude: -0.3773900 } } })
      this.getWorkerInfo()
    },

  }
}
</script>

<template>
  <header class="flex justify-between max-w-full px-8 py-4 mx-auto">
    <div class="relative flex items-center">
      <a class="mr-3 flex-none w-2.5 md:w-auto" href="Header.vue">
        <img
            class="header-default__logo"
            src="@/assets/img/sesamehr-logo.svg"
            :alt="Sesame"
        />
      </a>
    </div>
    <div class="bg-grey-extra-light">
      <div class="bg-grey-extra-light">
          <OfflineWorker><Menu/></OfflineWorker>
<!--      <OnlineWorker  v-if="worker.workStatus === 'online'"><Menu/></OnlineWorker>-->
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-default__logo{

}
</style>
