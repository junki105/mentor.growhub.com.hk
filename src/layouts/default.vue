<template>
  <div class="flex flex-col">
    <div class="min-h-screen flex flex-col">
      <Header />
      <div class="flex flex-grow" style="margin-top: 4.5rem;">
        <div class="w-full overflow-hidden py-8 lg:py-12">
          <nuxt />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Header from '~/components/templates/Header.vue'
import Footer from '~/components/templates/Footer.vue'

interface Data {
  title: string
}

export default createComponent({
  components: {
    Header,
    Footer
  },
  setup(): Data {
    return {
      title: 'mentor'
    }
  }
})
</script>
