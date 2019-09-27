<template>
  <div>
    <breadcrumb
      :breadcrumbs="[
        { to: '/', label: 'HOME' },
        { to: `/plan/business/${plan.slug}`, label: plan.title }
      ]"
    />
    <detail-section :plan="plan" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Breadcrumb from '~/components/molecules/Breadcrumb.vue'
import DetailSection from '~/components/organisms/plan/DetailSection.vue'
import plans from '~/assets/json/businessPlans.json'

export default Vue.extend({
  components: { Breadcrumb, DetailSection },
  validate({ params }): boolean {
    /* eslint arrow-parens: [2, "always"] */
    return params.slug && plans.find((p) => params.slug === p.slug)
  },
  head(): MetaInfo {
    return {
      title: `${this.plan.title} - Powerd by Growhub`
    }
  },
  asyncData({ params }) {
    /* eslint arrow-parens: [2, "always"] */
    return {
      plan: plans.find((p) => p.slug === params.slug)
    }
  }
})
</script>
