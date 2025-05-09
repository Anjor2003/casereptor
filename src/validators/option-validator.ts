// bg-zinc-900 bg-blue-950 bg-rose-950 bg-orange-950
// border-zinc-900 border-blue-950 border-rose-950 border-orange-950

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
  {label:"Black", value:"black", tw:"zinc-900"},
  {label:"Blue", value:"blue", tw:"blue-950"},
  {label: "Rose", value:"rose", tw:"rose-950"},
  {label: "Orange", value:"orange", tw:"orange-950"},
] as const 

export const MODELS = {
  name: "models",
  options: [
    { label: "IPhone X", value: "iphonex" },
    { label: "IPhone 11", value: "iphone11" },
    { label: "IPhone 12", value: "iphone12" },
    { label: "IPhone 13", value: "iphone13" },
    { label: "IPhone 14", value: "iphone14" },
    { label: "IPhone 15", value: "iphone15" },
  ]
} as const

export const MATERIALS = {
  name: "material",
  options: [
    { label: "Silicone", value: "silicone", description: undefined, price: PRODUCT_PRICES.material.silicone},
    { label: "Soft Policarbonate", value: "polycarbonate", description: "Resistente a los arañazos", price: PRODUCT_PRICES.material.polycarbonate}
  ]
} as const

export const FINISHES = {
  name: "finish",
  options: [
    { label: "Smooth Finish", value: "smooth", description: undefined, price: PRODUCT_PRICES.finish.smooth},
    { label: "Textured Finish", value: "textured", description: "Textura suave con agarre", price: PRODUCT_PRICES.finish.textured}
  ]
} as const