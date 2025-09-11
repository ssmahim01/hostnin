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

export interface PricingFeature {
  category: string
  items: string[]
}

export interface PricingPlansData {
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
  features: PricingFeature[]
  cta: string
  guarantee: string
  badge?: string
}
