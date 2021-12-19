<template>
  <div class="flex flex-col h-screen">
    <app-header />
    <main class="flex-1 overflow-y-auto max-w-none">
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter },
}
</script>
