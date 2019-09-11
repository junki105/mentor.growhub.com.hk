<template>
  <div>
    <mentor-section />
    <how-to-use-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import MentorSection from '~/components/organisms/home/MentorSection.vue'
import HowToUseSection from '~/components/organisms/home/HowToUseSection.vue'

export default createComponent({
  components: {
    MentorSection,
    HowToUseSection
  }
})
</script>
