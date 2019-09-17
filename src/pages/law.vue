<template>
  <div>
    <breadcrumb
      :breadcrumbs="[{ to: '/', label: 'HOME' }, { to: '/law', label: 'Law' }]"
    />
    <law-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Breadcrumb from '~/components/molecules/Breadcrumb.vue'
import LawSection from '~/components/organisms/law/LawSection.vue'

export default createComponent({
  components: {
    Breadcrumb,
    LawSection
  }
})
</script>
