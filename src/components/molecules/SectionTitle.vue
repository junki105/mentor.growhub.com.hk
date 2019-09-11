<template>
  <div>
    <h2 class="title" v-text="title" />
    <div class="title-underline" />
    <p v-show="subtitle" class="subtitle" v-text="subtitle" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: null
    }
  }
})
</script>

<style scoped>
.title {
  @apply text-center text-gray-900 text-3xl;
}
.subtitle {
  @apply text-center text-sm text-gray-800;
}
.title-underline {
  @apply w-10 mx-auto border-t-4 border-gray-900 rounded-full mt-2 mb-4;
}
</style>
