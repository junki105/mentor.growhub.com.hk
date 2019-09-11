<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="flex items-center">
          <img
            src="~/assets/images/icon/favicon.png"
            alt="Growhub"
            class="mr-2 h-10 rounded"
          />
          <div>
            <h1 class="text-xl">
              <nuxt-link to="/">
                Tech Support
              </nuxt-link>
            </h1>
            <p class="text-xs text-gray-700">
              Powerd by Growhub
            </p>
          </div>
        </div>
        <div />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

interface Data {
  title: string
}

export default createComponent({
  setup(): Data {
    return {
      title: 'mentor'
    }
  }
})
</script>

<style scoped>
.header {
  @apply fixed w-full z-10 top-0 bg-white shadow border-gray-400;
}
.nav {
  @apply w-full fixed items-center justify-between flex-wrap bg-white shadow-lg px-6 p-3;
}
.container {
  @apply mx-auto;
}
</style>
