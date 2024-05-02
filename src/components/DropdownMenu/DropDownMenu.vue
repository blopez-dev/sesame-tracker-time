<template>
  <div class="absolute ml-[-230px] mt-[20px] shadow-xl rounded-md">
    <ul class="bg-white text-grey-dark w-[247px] cursor-pointer grid grid-cols-1 rounded divide-y divide-neutral-800">
      <div @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false" class="max-h-[45px]">
        <li class="h-[45px] flex items-center justify-center">
          <img src="@/assets/img/arrow_left.png" class="relative right-[60px] w-3 h-3 rotate-180" alt="arrow_left">
          <span class="text-sm">Mis cuentas</span>
        </li>
        <SubMenu v-if="showSubMenu"/>
      </div>
      <li class="h-[45px] flex justify-center items-center text-sm">Vista empleado</li>
      <li class="h-[45px] flex justify-center items-center text-sm">Mi perfil</li>
      <li class="h-[45px] flex justify-center items-center text-sm">Cerrar sesión</li>
    </ul>
  </div>
</template>

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
