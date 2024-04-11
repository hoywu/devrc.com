<script setup lang="ts">
import Logo from '@/assets/Logo.vue';
</script>

<template>
  <div class="site-header">
    <div class="content">
      <Logo class="logo" />
    </div>
  </div>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-header .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--page-width);
  padding: 0 20px;
  height: var(--header-height);
  border-bottom: 1px solid #ccc;
}

.site-header .logo {
  height: var(--header-logo-size);
  width: var(--header-logo-size);
}
</style>
