<script setup lang="ts"></script>

<template>
  <header>
    <SiteHeader />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <SiteFooter />
  </footer>
</template>

<style scoped>
main {
  min-height: calc(100vh - var(--header-height));
}
</style>
