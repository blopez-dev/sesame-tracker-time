<script lang="ts">
  import SubMenu from "@/components/DropdownMenu/SubMenu.vue";
  export default {
    name: 'DropDownMenu',
    components: {
      SubMenu
    },
    data() {
      return {
        showSubMenu: false,
      }
    }
  }
</script>

<template>
  <div class="absolute ml-[-230px] mt-[20px]">
    <ul class="bg-white text-grey-dark w-[247px] cursor-pointer">
      <div @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false" class="max-h-[45px]">
        <li class="h-[45px] flex justify-center items-center">
          <span>Mis cuentas</span>
        </li>
        <SubMenu v-if="showSubMenu"/>
      </div>
      <li class="h-[45px] flex justify-center items-center">Vista empleado</li>
      <li class="h-[45px] flex justify-center items-center">Mi perfil</li>
      <li class="h-[45px] flex justify-center items-center">Cerrar sesión</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
