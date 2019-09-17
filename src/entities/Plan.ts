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

