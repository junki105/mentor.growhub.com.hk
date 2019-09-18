<template>
  <div>
    <introduction-section />
    <mentor-section />
    <how-to-use-section />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import IntroductionSection from '~/components/organisms/home/IntroductionSection.vue'
import MentorSection from '~/components/organisms/home/MentorSection.vue'
import HowToUseSection from '~/components/organisms/home/HowToUseSection.vue'

export default createComponent({
  components: {
    IntroductionSection,
    MentorSection,
    HowToUseSection
  }
})
</script>
