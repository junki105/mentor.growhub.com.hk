export interface Item {
  plan?: string
  sku?: string
  quantity: number
}

export interface EnvironmentItem {
  [k: string]: Array<Item>
}

export interface Plan {
  id: number
  slug: string
  title: string
  description: string
  price: number
  items: EnvironmentItem
}

