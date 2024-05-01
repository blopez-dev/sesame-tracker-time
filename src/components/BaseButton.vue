<template>
  <button
    class="rounded-[12px] px-[38px] primary-btn text-small w-[110px] h-[27px] box-borde"
    :class="Type"
    type="button"
    >
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    Type: {
      Type: String,
      default: 'btn-primary'
    },
  },
}
</script>

<style scoped>
.btn-primary{
  font-size:12px;
  line-height:16px;
  border: none;
  background-color: #52ea8e;
  padding: 0.5rem 1rem;
  color: #ffffff;
  cursor: pointer;
}
.btn-primary:hover{
  color: #2C2B30;
  text-decoration: none;
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  background-color: #fff;
}
.btn-primary:focus{
  color: #2C2B30;
  text-decoration: none;
  outline: none;
}
.btn-primary.white{
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  background-color: #fff;
}
</style>
