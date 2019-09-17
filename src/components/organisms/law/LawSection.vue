<template>
  <div class="my-8">
    <section-title title="Law" subtitle="特定商取引法に基づく表記" />
    <div class="mt-5 bg-gray-200">
      <div class="container mx-auto py-10 px-4">
        <div class="w-full mx-auto lg:w-2/3">
          <dl>
            <dt>サービス名</dt>
            <dd>Programming Support</dd>
            <dt>事業者名</dt>
            <dd>GrowHub Limited</dd>
            <dt>所在地</dt>
            <dd>
              FLAT 6A 14/F BLK A FUK KEUG IND BLDG 66-68 TONG MI RD PRINCE
              EDWARD KL
            </dd>
            <dt>お支払方法</dt>
            <dd>Stripeを利用したクレジットカード決済によるお支払いが可能</dd>
            <dt>販売価格</dt>
            <dd>
              サービス内容・プランごとに表示された金額と致します（表示価格は消費税込みの金額です）。
            </dd>
            <dt>返品・キャンセルについて</dt>
            <dd>
              購入後のキャンセルはできません。ただし、支払済のプランに記載された内容が、メンターの都合によって提供されなかった場合、速やかに事実関係を調査した上で返金いたします。
            </dd>
            <dt>解約について</dt>
            <dd>
              月の途中の解約となった場合も１ヶ月分の料金が発生し、
              日割清算等による返金を含めた一切の返金は行われません。
            </dd>
          </dl>
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

<style scoped>
dt {
  @apply font-bold text-xl text-gray-900 mb-2;
}
dd {
  @apply text-gray-800 mb-6;
}
</style>
