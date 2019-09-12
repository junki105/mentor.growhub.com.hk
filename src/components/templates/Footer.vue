<template>
  <footer>    
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
