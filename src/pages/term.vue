<template>
  <div>
    <term-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import TermSection from '~/components/organisms/term/TermSection.vue'

export default createComponent({
  components: {
    TermSection
  }
})
</script>
