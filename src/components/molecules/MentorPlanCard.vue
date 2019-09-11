<template>
  <div class="bg-white rounded-lg border p-4 hover:shadow-lg">
    <div class="h-32">
      <p class="text-lg font-bold mb-2" v-text="plan.title" />
      <p class="text-xs text-gray-700" v-text="plan.description" />
    </div>
    <div class="flex justify-between items-center">
      <div>
        <p class="font-semibold text-4xl text-gray-800">
          <span class="mr-1">¥</span>
          {{ plan.price.toLocaleString() }}
        </p>
      </div>
      <button
        type="type"
        class="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded hover:opacity-75"
        :disabled="loading"
        @click.prevent="onClickCheckout"
      >
        <div v-show="loading" class="btn-spinner mr-2" />
        Checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, PropType } from '@vue/composition-api'
import { Plan } from '~/entities/Plan'

export default createComponent({
  props: {
    plan: {
      type: Object as PropType<Plan>,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    function onClickCheckout() {
      if (props) {
        context.emit('checkout', props.plan)
      }
    }

    return {
      onClickCheckout
    }
  }
})
</script>
