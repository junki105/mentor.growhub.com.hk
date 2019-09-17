<template>
  <div>
    <breadcrumb
      :breadcrumbs="[
        { to: '/', label: 'HOME' },
        { to: '/contact/thanks', label: 'Thank you for contact' }
      ]"
    />
    <thanks-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Breadcrumb from '~/components/molecules/Breadcrumb.vue'
import ThanksSection from '~/components/organisms/contact/ThanksSection.vue'

export default createComponent({
  components: {
    Breadcrumb,
    ThanksSection
  }
})
</script>
