<script setup lang="ts">
const props = defineProps<{
  to: string;
  text: string;
  description: string;
}>();
</script>

<template>
  <RouterLink :to="{ name: to }">
    <div class="route-button">
      <div class="shrink-0">
        <SvgIcon class="h-12 w-12" :name="props.to" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">{{ text }}</div>
        <p class="text-slate-500">{{ description }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.route-button {
  @apply flex items-center p-6 w-80 bg-white rounded-xl drop-shadow-lg;
  @apply space-x-4 transition-all;
}

.route-button:hover {
  @apply transform scale-105;
}
</style>
