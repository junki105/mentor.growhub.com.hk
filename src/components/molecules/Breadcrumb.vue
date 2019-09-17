<template>
  <nav class="container mx-auto">
    <ol class="breadcrumb">
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.to">
        <nuxt-link :to="breadcrumb.to">
          {{ breadcrumb.label }}
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
.breadcrumb {
  @apply flex text-gray-600 px-4 py-3;
}
.breadcrumb > li {
  @apply flex items-center;
}
.breadcrumb > li + li:before {
  content: '\0227B';
  @apply mx-2;
}
.breadcrumb > li a {
  @apply font-bold no-underline;
}
.breadcrumb > li a.nuxt-link-exact-active {
  @apply font-normal text-black cursor-default;
}
</style>
