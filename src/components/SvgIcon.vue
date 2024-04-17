<script setup lang="ts">
const ErrorIcon = () => import('@/assets/icon/code.vue');

const props = defineProps<{
  name: string;
}>();
const icon = defineAsyncComponent({
  loader: () => import(`@/assets/icon/${props.name}.vue`).catch(ErrorIcon),
});
</script>

<template>
  <component :is="icon" />
</template>
