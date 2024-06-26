<script setup lang="ts">
const ErrorIcon = () => import('@/assets/icons/IconCode.vue');

const props = defineProps<{
  name: string;
}>();

const filename = computed(() => {
  return 'Icon' + props.name.charAt(0).toUpperCase() + props.name.slice(1);
});

const icon = defineAsyncComponent({
  loader: () => import(`@/assets/icons/${filename.value}.vue`).catch(ErrorIcon),
});
</script>

<template>
  <component :is="icon" />
</template>
