<script setup>
const props = defineProps({
  width: String,
});
</script>

<template>
  <div>
    <Image src="/logo.png" alt="logo" :width="props.width ?? 60" />
  </div>
</template>
