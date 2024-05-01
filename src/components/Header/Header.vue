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
    <div class="relative hidden lg:flex items-center ml-auto">
      <div class="flex items-center ml-6 pl-6 dark:border-slate-800">
        <span>0:00</span>
        <BaseButton Type="btn-primary" :onClick="clickOnClockIn"  class="font-bad arrow-right-btn">Entrar</BaseButton>
      </div>
      <div class="flex items-center ml-6 pl-6 dark:border-slate-800">
        <template>
          <OfflineWorker><Menu/></OfflineWorker>
          <OnlineWorker><<Menu/></OnlineWorker>
        </template>
      </div>

      <div></div>
    </div>
  </header>
</template>

<style scoped>

</style>
