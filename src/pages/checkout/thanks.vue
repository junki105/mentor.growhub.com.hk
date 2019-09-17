<template>
  <div>
    <breadcrumb
      :breadcrumbs="[
        { to: '/', label: 'HOME' },
        { to: '/checkout/thanks', label: 'Thank you for checkout' }
      ]"
    />
    <thanks-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Breadcrumb from '~/components/molecules/Breadcrumb.vue'
import ThanksSection from '~/components/organisms/checkout/ThanksSection.vue'

export default createComponent({
  components: {
    ThanksSection,
    Breadcrumb
  }
})
</script>
