<template>
  <div class="my-8">
    <section-title
      title="Mentor Plan"
      subtitle="プログラミングを学びたい個人の方のサポートを行うメンタープランです。定期決済のプランになります。"
    />
    <div class="container mx-auto mt-5">
      <div class="flex flex-col lg:flex-row">
        <mentor-plan-card
          v-for="plan in mentorPlans"
          :key="plan.id"
          :plan="plan"
          :loading="state.checkoutId === plan.id"
          class="lg:w-1/3 mx-2 mb-2"
          @checkout="checkout"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import SectionTitle from '~/components/molecules/SectionTitle.vue'
import MentorPlanCard from '~/components/molecules/MentorPlanCard.vue'
import { mentorPlans, Plan } from '~/entities/Plan'

export default createComponent({
  components: {
    SectionTitle,
    MentorPlanCard
  },
  setup() {
    const state = reactive({
      checkoutId: 0,
      key: process.env.STRIPE_PUBLISHABLE_KEY
    })
    function checkout(plan: Plan) {
      state.checkoutId = plan.id
      try {
        window.Stripe(state.key).redirectToCheckout({
          items: plan.items,
          successUrl: `${location.origin}/checkout/thanks`,
          cancelUrl: location.href
        })
      } catch (e) {
        /* eslint-disable */
        console.error(e)
      }
    }
    return {
      checkout,
      mentorPlans,
      state
    }
  }
})
</script>
