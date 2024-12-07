<template>
  <NuxtLink
    exact-active-class="active"
    class="px-2 transition-all"
    :class="
      primary
        ? 'text-primary hover:text-primary-100'
        : 'text-primary-50 hover:text-primary-700'
    "
    :to="props.to"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: String,
  primary: Boolean,
});
</script>
