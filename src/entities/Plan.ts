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

export const plans: Array<Plan> = [
  {
      id: 1,
      title: '気軽にチャットで相談コース',
      description: 'SlackのDMを利用してマンツーマンでサポートします。',
      price: 1000,
      items: [
        {
          plan: 'plan_Fn1JwWF1ff098f',
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
          plan: 'plan_Fn1JHGkqgCpuxU',
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
          plan: 'plan_Fn1KWvhbnkOjO2',
          quantity: 1
        }
      ]
  }
]
