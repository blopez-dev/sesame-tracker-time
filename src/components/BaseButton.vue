<template>
  <button
      class="rounded-[15px] text-white text-small w-[100px] h-[25px] box-border"
      :class="buttonClasses[type]"
      @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      buttonClasses: {
        primary: 'bg-green',
        danger: 'bg-salmon',
        neutral: 'bg-grey-light-1'
      }
    }
  },
}

</script>
