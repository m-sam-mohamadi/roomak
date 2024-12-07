<template>
  <div class="flex justify-center items-center gap-3">
    <span :class="props.color && `bg-${props.color}`" class="line"></span>
    <p :class="props.color && `text-${props.color}`" class="text-xl font-bold">
      <slot />
    </p>
    <span :class="`line bg-${props.color}`"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
});
</script>
