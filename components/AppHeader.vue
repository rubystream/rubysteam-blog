<template>
  <nav class="top-0 w-full border-b">
    <div class="container mx-auto flex-1 px-4">
      <div class="flex items-center justify-between h-12">
        <div class="flex items-center pr-4">
          <nuxt-link to="/" class="flex-shrink-0 flex-1" aria-level="logo">
            <img
              class="h-8 max-w-full light-img"
              src="/rubystream.jpeg"
              alt="rubystream logo"
            />
          </nuxt-link>
        </div>
        <div class="flex-1 flex justify-start w-4/6">
          <div class="mx-auto">
            <span class="font-mono">Rubystream</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
