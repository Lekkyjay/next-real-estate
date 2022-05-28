export interface IBanner {
  id?: string
  purpose?: string
  title1?: string 
  title2?: string 
  desc1?: string 
  desc2?: string 
  buttonText?: string 
  linkName?: string 
  imageUrl?: string
}

export interface IProperty { 
  id?: string
  coverPhoto?: {
    externalID: string
    id: string
    main: boolean
    nimaScore: string
    orderIndex: number
    title: string| null
    url: string
  } 
  price?: string 
  rentFrequency?: string 
  rooms?: string 
  title?: string 
  baths?: string 
  area?: number 
  agency?: {
    active: boolean
    commercialNumber: number | null
    createdAt: string
    externalID: string
    id: string
    logo: { 
      id: string
      url: string
    }
  }
  isVerified?: string 
  externalID?: string
  description?: string
  type?: string
  purpose?: string
  furnishingStatus?: string
  amenities?: any[]
  photos?: any[]
}

export interface IFilterValues {
  purpose: string
  rentFrequency: string
  categoryExternalID: string
  minPrice: string
  maxPrice: string
  areaMax: string
  roomsMin: string
  bathsMin: string
  sort: string
  locationExternalIDs: string
}

export interface ILocation {
  id: string
  name: string
  externalID: string
}