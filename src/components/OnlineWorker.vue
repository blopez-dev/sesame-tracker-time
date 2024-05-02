<template>
  <div>
    <div class="bg-grey-light flex justify-around items-center w-[596px] p-[5px] rounded-[12px] max-h-[45px]">
      <p class="text-grey-dark text-small"> {{ currentTime }}  / 07:00:53</p>
      <BaseButton :onClick="clickOnPause" type="neutral">Pausar</BaseButton>
      <BaseButton :onClick="clockOutWorker" type="danger">Salir</BaseButton>
      <p class="text-grey-light-1">|</p>
      <img class="w-6 h-6 rounded-full" src="@/assets/img/avatar.png" alt={{worker.firstName}}>
      <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
      <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
        <img src="@/assets/img/arrow_down.png" class="w-3 h-3" alt="arrow_down">
        <slot v-if="showMenu" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import {useWorker} from "@/composables/useGetStatusWorker";
import {formatTime} from '@/utils/dates';

export default {
  name:'OnlineWorker',
  components: {
    BaseButton,
  },
  data() {
    const { worker, timeWorker, clockOutWorker, timerWithFormat } = useWorker()
    return {
      worker,
      timeWorker,
      clockOutWorker,
      timerWithFormat,
      currentSeconds: 0,
      currentMinutes: 0,
      currentHours: 0,
      showMenu: false,
      timeoutMenu: null,
      intervalId: null,
    }
  },
  methods: {
    onMouseOver () {
      clearInterval(this.timeoutMenu)
      this.showMenu = true
    },
    onMouseLeave () {
      this.timeoutMenu = setTimeout(() => {
        this.showMenu = false
      }, 500)
    },
    clickOnPause () {
      clearInterval(this.intervalId)
    },
    startTracking () {
      const { hours, minutes, seconds } = this.timeWorker
      console.log(hours, minutes, seconds)
      this.currentSeconds = seconds
      this.currentMinutes = minutes
      this.currentHours = hours
    },
    calculateTimer () {
      this.currentSeconds = this.currentSeconds + 1

      const addMinute = this.currentSeconds === 60

      if(addMinute) {
        this.currentSeconds = 0
        this.currentMinutes = this.currentMinutes + 1
      }

      const addHour = this.currentMinutes === 60
      if(addHour) {
        this.currentMinutes = 0
        this.currentHours = this.currentHours + 1
      }
    },
  },
  computed: {
    currentTime() {
      return formatTime({hours: this.currentHours, minutes: this.currentMinutes, seconds: this.currentSeconds})
    }
  },
  created() {
    this.startTracking()
    this.intervalId = setInterval(this.calculateTimer, 1000)
  }
}
</script>



<style scoped>
</style>
