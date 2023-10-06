export interface ITour {
  startLocation: StartLocation
  ratingsAverage: number
  ratingsQuantity: number
  images: string[]
  startDates: Date[]
  _id: string
  name: string
  duration: number
  maxGroupSize: number
  difficulty: string
  guides: string[]
  price: number
  summary: string
  description: string
  imageCover: string
  locations: Location[]
}

export interface Location {
  _id: string
  description: string
  type: string
  coordinates: number[]
  day: number
}

export interface StartLocation {
  description: string
  type: string
  coordinates: number[]
  address: string
}
