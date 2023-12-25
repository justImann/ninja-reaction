<template lang="">
  <button
    class="group peer relative inline-block text-sm font-medium text-black focus:outline-black focus:ring active:text-black"
  >
    <span class="absolute inset-0 border border-current"></span>
    <span
      class="block border border-current uppercase bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
    >
      <slot />
    </span>
  </button>
</template>
<script>
export default {};
</script>
<style lang=""></style>
