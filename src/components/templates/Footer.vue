<template>
  <footer>
    <div v-show="state.needContactForm" class="flex justify-center px-2">
      <div
        class="bg-gradient-blue-to-green rounded-lg w-full p-4 mb-12 lg:py-16 lg:w-2/3"
      >
        <p class="text-center text-white text-lg lg:text-2xl mb-4">
          お問い合わせはこちらから
        </p>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          action="/contact/thanks"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="flex flex-col lg:flex-row">
            <div class="lg:flex-1 px-1 mb-2">
              <input
                type="text"
                name="name"
                class="w-full rounded-lg p-4 border text-gray-800 border-gray-200"
                placeholder="山田 太郎"
              />
            </div>
            <div class="lg:flex-1 px-1 mb-2">
              <input
                type="email"
                name="email"
                class="w-full rounded-lg p-4 border text-gray-800 border-gray-200"
                placeholder="your@mail.com"
              />
            </div>
          </div>
          <div class="px-1 mb-2">
            <textarea
              name="content"
              class="w-full rounded-lg p-4 border text-gray-800 border-gray-200"
              col="6"
            />
          </div>
          <div class="flex justify-center items-center px-1">
            <button
              class="w-full py-5 px-2 rounded-lg bg-indigo-700  text-gray-100 font-bold uppercase border-indigo-700 border-t border-b border-r lg:px-4 hover:opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="bg-gray-800 text-gray-100 px-2 pt-0 pb-2 mt-0">
      <div class="container mx-auto py-8">
        <div class="flex justify-center text-xs">
          <a
            href="https://www.growhub.com.hk/ja/company"
            class="block my-2 text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powerd by GrowHub Limited.
          </a>
        </div>
        <div class="flex justify-center text-xs">
          <ul class="list-menu">
            <li>
              <nuxt-link to="/" class="my-2 text-white hover:text-gray-300">
                HOME
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/term" class="my-2 text-white hover:text-gray-300">
                利用規約
              </nuxt-link>
            </li>
            <li>
              <a
                href="https://www.growhub.com.hk/ja/policy/privacy"
                class="my-2 text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                プライバシーポリシー
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { createComponent, reactive, watch } from '@vue/composition-api'

export default createComponent({
  setup(props, context) {
    const state = reactive<{ needContactForm: boolean }>({
      needContactForm: !context.root.$route.path.includes('contact')
    })
    watch(() => {
      state.needContactForm = !context.root.$route.path.includes('contact')
    })

    /* eslint-disable */
    console.log(props)

    return {
      state
    }
  }
})
</script>

<style scoped>
ul.list-menu {
  @apply inline-flex list-none leading-tight;
}
ul.list-menu > li:not(:last-child)::after {
  content: '|';
  @apply px-2;
}
</style>
