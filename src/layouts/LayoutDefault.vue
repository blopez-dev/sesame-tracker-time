<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
</script>

<template>
    <Header />
  <div id="app" class="bg-grey-extra-light h-screen flex items-center justify-center flex-col gap-[20px]">

  <slot />
</template>
