<script setup lang="ts">
const cards = [
  { to: 'math', title: '数学', desc: '进制转换' },
  { to: 'about', title: 'About', desc: '关于本站' },
  { to: '', title: '敬请期待', desc: '更多工具建设中...' },
];
</script>

<template>
  <div class="home">
    <BigRouteButton
      v-for="(c, i) of cards"
      :key="i"
      :to="c.to"
      :text="c.title"
      :description="c.desc"
    />
  </div>
</template>

<style scoped>
.home {
  @apply flex flex-wrap items-center justify-center gap-5 p-5;
}
</style>
