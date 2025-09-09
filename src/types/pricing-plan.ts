export interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  originalPrice?: {
    monthly: number
    yearly: number
  }
  isPopular?: boolean
  features: string[]
  cta: string
  guarantee: string
  badge?: string
}
