<script setup lang="ts">
import Logo from '@/assets/Logo.vue';

const router = useRouter();

function clickLogo() {
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="site-header">
    <div class="content">
      <Logo class="logo cursor-pointer" @click="clickLogo" />
    </div>
  </div>
</template>

<style scoped>
.site-header {
  @apply flex items-center justify-center;
}

.site-header .content {
  @apply flex items-center justify-between w-full px-5;
  max-width: var(--page-width);
  height: var(--header-height);
  border-bottom: 1px solid #ccc;
}

.site-header .logo {
  height: var(--header-logo-size);
  width: var(--header-logo-size);
}
</style>
