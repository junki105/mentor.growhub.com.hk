<template>
  <div>
    <breadcrumb
      :breadcrumbs="[
        { to: '/', label: 'HOME' },
        { to: '/policy/privacy', label: 'Privacy Policy' }
      ]"
    />
    <privacy-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Breadcrumb from '~/components/molecules/Breadcrumb.vue'
import PrivacySection from '~/components/organisms/policy/PrivacySection.vue'

export default createComponent({
  components: {
    Breadcrumb,
    PrivacySection
  }
})
</script>
