export interface Item {
  plan?: string
  sku?: string
  quantity: number
}

export interface Plan {
  id: number
  title: string
  description: string
  price: number
  items: Array<Item>
}

export const mentorPlans: Array<Plan> = [
  {
      id: 1,
      title: '気軽にチャットで相談コース',
      description: 'SlackのDMを利用してマンツーマンでサポートします。',
      price: 1000,
      items: [
        {
          plan: 'plan_FpCj4xcoU6VP35',
          quantity: 1
        }
      ]
  },
  {
      id: 2,
      title: '一緒にコーディングコース',
      description: '定義レビューや分担をした共同作業など一緒に開発を行うことで成長を加速させます。',
      price: 3000,
      items: [
        {
          plan: 'plan_FpClsLgGcta1M7',
          quantity: 1
        }
      ]
  },
  {
      id: 3,
      title: 'Zoomのテレビ電話を利用した開発サポート・キャリア相談コース',
      description: '定義レビューや分担をした共同作業など一緒に開発を行うことで成長を加速させます。',
      price: 5000,
      items: [
        {
          plan: 'plan_FpCmxBeEAjmbOk',
          quantity: 1
        }
      ]
  }
]
