<template>
  <div
    class="status-card p-3 bg-primary-200 rounded-xl flex flex-col justify-center items-center"
  >
    <i class="pi md:text-6xl text-4xl" :class="props.icon" />
    <h5 class="text-xl font-bold mt-2">{{ props.count }}</h5>
    <span class="text-gray-700">{{ props.title }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  count: String,
});
</script>
