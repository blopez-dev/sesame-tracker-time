<template>
  <div class="bg-grey-light flex justify-around items-center w-[408px] p-[5px] rounded-[12px]">
    <p class="text-grey-dark text-small">{{ timerWithFormat }}</p>
    <base-button type="primary" :onClick="clockInWorker">Entrar</base-button>
    <p class="text-grey-light-1">|</p>
    <img class="w-6 h-6 rounded-full" src="@/assets/img/avatar.png" alt={{worker.firstName}}>
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
      <img src="@/assets/img/arrow_down.png" class="w-5 h-5" alt="arrow_down">
      <slot v-if="showMenu" />
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import {useWorker} from "@/composables/useGetStatusWorker";

export default {
  name:'OfflineWorker',
  components: {
    BaseButton,
  },
  data() {
    const { worker, clockInWorker, timerWithFormat } = useWorker()
    return {
      worker,
      clockInWorker,
      timeoutMenu: null,
      showMenu: false,
      timerWithFormat,
    }

  },
  methods:{
    onMouseOver () {
     clearInterval(this.timeoutMenu)
      this.showMenu = true
    },
    onMouseLeave () {
      this.timeoutMenu = setTimeout(() => {
        this.showMenu = false
      }, 1000)
    }
  },
}
</script>
