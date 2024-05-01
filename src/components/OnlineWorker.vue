<script lang="ts">
import {useWorker} from "@/composables/useGetStatusWorker";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name:'OnlineWorker',
  components: {
    BaseButton,
  },
  data() {
    const { worker, clockOutWorker, timerWithFormat } = useWorker()
    return { worker, clockOutWorker, timerWithFormat }
  },
}
</script>

<template>
  <div>
    <div class="bg-grey-light flex justify-around items-center w-[596px] p-[8px] rounded-[12px] max-h-[45px]">
      <p class="text-grey-dark text-small"> {{ timerWithFormat }}</p>
      <BaseButton :onClick="clickOnPause" type="neutral">Pausar</BaseButton>
      <BaseButton :onClick="clockOutWorker" type="danger">Salir</BaseButton>
      <p class="text-grey-light-1">|</p>
      <div class="flex">
<!--        <img src="@/assets/avatar.png" class="mr-[-5px]" />-->
<!--        <img src="@/assets/elipse.svg" />-->
      </div>
      <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
      <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
<!--        <img src="@/assets/chevron-left.svg" class="cursor-pointer" />-->
        <slot v-if="showMenu" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
