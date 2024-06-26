<script setup lang="ts">
const router = useRouter();

function clickLogo() {
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="site-header">
    <div class="content">
      <SiteLogo class="logo" @click="clickLogo" />
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
  @apply cursor-pointer;
  height: var(--header-logo-size);
  width: var(--header-logo-size);
}
</style>
