export default interface ProviderType {
  id: number,
  name: String,
  location: { address: String, directions: String};
  beds:{
    male?: { available: number , max: number },
    female?: { available: number , max: number },
    mixed?: { available: number, max: number},
    youth?: { available: number , max: number }
  },
  image: String ,
  contact:{ phone: String, email: String },
  geoLocation: [number, number]
}
