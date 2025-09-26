export interface CDNLocation {
  id: string
  name: string
  country: string
  region: string
  left: string
  bottom: string
  flag: string
}

export interface CDNRegion {
  name: string
  locations: CDNLocation[]
}
