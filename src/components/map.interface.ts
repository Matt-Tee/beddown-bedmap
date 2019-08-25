export default interface ProviderType {
  id: Number,
  name: String,
  location: { address: String, directions: String};
  beds:{
    male?: { available: Number , max: Number },
    female?: { available: Number , max: Number },
    mixed?: { available: Number, max: Number},
    youth?: { available: Number , max: Number }
  },
  image: String ,
  contact:{ phone: String, email: String }
}
