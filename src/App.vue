<script setup lang="ts">
</script>

<template>
  <header>
    <SiteHeader />
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in" name="homeNav">
        <component :is="Component" />
      </Transition>
    </RouterView>
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
