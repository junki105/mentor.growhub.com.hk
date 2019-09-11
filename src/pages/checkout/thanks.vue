<template>
  <div>
    <thanks-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import ThanksSection from '~/components/organisms/checkout/ThanksSection.vue'

export default createComponent({
  components: {
    ThanksSection
  }
})
</script>
