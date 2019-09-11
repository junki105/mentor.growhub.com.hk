<template>
  <div class="my-8">
    <section-title title="How to Use" subtitle="本サービスの利用方法" />
    <div class="mt-5 bg-gray-200">
      <div class="container mx-auto">
        <div class="flex flex-col lg:items-center lg:flex-row">
          <div class="lg:w-2/5 p-4">
            <browser-window>
              <div class="w-full h-56 flex items-center justify-center">
                <button
                  class="inline-flex items-center px-8 py-4 bg-red-500 text-white rounded hover:opacity-75"
                >
                  Checkout
                </button>
              </div>
            </browser-window>
          </div>
          <div class="lg:w-3/5 p-4">
            <h3 class="font-bold text-xl lg:text-2xl mb-4">
              購入したいプランを選択
            </h3>
            <p class="text-base text-gray-700 mb-2">
              あなたが求めているスキルは見つかりましたか？<br />
              あなたに合ったプランが見つかったら<strong>Checkout</strong>ボタンから購入できます。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 bg-white">
      <div class="container mx-auto">
        <div class="flex flex-col lg:items-center lg:flex-row-reverse">
          <div class="lg:w-2/5 p-4">
            <browser-window>
              <img
                src="~/assets/images/stripe/logo-blue.png"
                alt="Stripe"
                class="w-32 mx-auto my-10 lg:my-20"
              />
            </browser-window>
          </div>
          <div class="lg:w-3/5 p-4">
            <h3 class="font-bold text-xl lg:text-2xl mb-4">
              Stripeを利用したクレジットカード決済でプランを購入
            </h3>
            <p class="text-base text-gray-700 mb-2">
              以下のブランドがご利用いただけます。
            </p>
            <div class="flex mb-5">
              <img
                src="~/assets/images/creditcard/visa.png"
                alt="Visa"
                class="mr-2 h-10"
              />
              <img
                src="~/assets/images/creditcard/mastercard.png"
                alt="Mastercard"
                class="mr-2 h-10"
              />
              <img
                src="~/assets/images/creditcard/amex.png"
                alt="Amex"
                class="h-10"
              />
            </div>
            <p class="text-xs text-red-600 mb-2">
              ※ 本サービスではStripe Checkout機能を利用しています。<br />
              入力された情報はStripeにて管理されます。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 bg-gray-200">
      <div class="container mx-auto">
        <div class="flex flex-col lg:items-center lg:flex-row">
          <div class="lg:w-2/5 p-4">
            <browser-window>
              <img
                src="~/assets/images/letter.png"
                alt="Stripe"
                class="w-32 mx-auto my-10 lg:my-20"
              />
            </browser-window>
          </div>
          <div class="lg:w-3/5 p-4">
            <h3 class="font-bold text-xl lg:text-2xl mb-4">
              メールによるご連絡
            </h3>
            <p class="text-base text-gray-700 mb-2">
              購入時にご登録頂いたメールアドレスにご連絡差し上げます。<br />
              その後、Slackにてメンタリングスタートします。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import SectionTitle from '~/components/molecules/SectionTitle.vue'
import BrowserWindow from '~/components/molecules/BrowserWindow.vue'

export default createComponent({
  components: {
    SectionTitle,
    BrowserWindow
  }
})
</script>
