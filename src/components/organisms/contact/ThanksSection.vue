<template>
  <div class="my-8">
    <section-title
      title="Thank you for Contact"
      subtitle="お問い合わせありがとうございます。"
    />
    <div class="mt-5 bg-gray-200">
      <div class="container mx-auto py-10 px-4">
        <div class="w-full mx-auto lg:w-2/3">
          <p class="text-center text-xl">
            お問い合わせを受け付けました。<br />
            担当より折り返しご連絡致します。しばらくお待ち下さい。<br />
          </p>
          <div class="flex justify-center mt-5">
            <nuxt-link
              to="/"
              class="py-4 px-8 rounded-full bg-indigo-700  text-gray-100 font-bold uppercase border-indigo-700 border hover:opacity-75"
            >
              Go to Home
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import SectionTitle from '~/components/molecules/SectionTitle.vue'

export default createComponent({
  components: {
    SectionTitle
  }
})
</script>
