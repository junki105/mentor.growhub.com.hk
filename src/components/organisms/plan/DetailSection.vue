<template>
  <div class="my-8">
    <section-title
      :title="plan.title"
      :subtitle="
        `「${plan.title}」は、あなたの企業のWeb開発を手助けするためのBusinessプランです`
      "
    />
    <div class="mt-5 bg-gray-200">
      <div class="container mx-auto py-10 px-4">
        <div class="w-full mx-auto lg:w-2/5">
          <p class="whitespace-pre-line leading-relaxed mb-10">
            {{ plan.description }}
          </p>
          <div class="mb-5 text-center">
            <p
              class="inline-flex items-center font-semibold text-4xl text-gray-800"
            >
              <span v-show="subscription" class="text-3xl mr-2">
                月額
              </span>
              <span class="mr-1">¥</span>
              {{ plan.price.toLocaleString() }}
            </p>
          </div>
          <p class="text-gray-700 text-xs text-center mb-2">
            ※ Checkoutボタンを押下し、Stripe画面から決済してください。
          </p>
          <button
            type="type"
            class="w-full inline-flex justify-center items-center py-4 bg-red-500 text-2xl text-white rounded hover:opacity-75"
            :disabled="state.loading"
            @click.prevent="onClickCheckout"
          >
            <div v-show="state.loading" class="btn-spinner mr-2" />
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  PropType,
  reactive,
  computed
} from '@vue/composition-api'
import SectionTitle from '~/components/molecules/SectionTitle.vue'
import { Plan } from '~/entities/Plan'

export default createComponent({
  components: {
    SectionTitle
  },
  props: {
    plan: {
      type: Object as PropType<Plan>,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      loading: false,
      key: process.env.STRIPE_PUBLISHABLE_KEY,
      environment: process.env.NODE_ENV
    })

    const subscription = computed(
      () => props.plan.items[state.environment].plan
    )

    function onClickCheckout() {
      if (props) {
        state.loading = true
        try {
          window.Stripe(state.key).redirectToCheckout({
            items: props.plan.items[state.environment],
            successUrl: `${location.origin}/checkout/thanks`,
            cancelUrl: location.href
          })
        } catch (e) {
          /* eslint-disable */
          console.error(e)
        }
      }
    }

    return {
      state,
      subscription,
      onClickCheckout
    }
  }
})
</script>
