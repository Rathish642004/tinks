export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  colors: string[]
  sizes: string[]
  description: string
  bulkDiscount: boolean
}

export const products: Product[] = [
  {
    id: "school-uniform-set",
    name: "School Uniform Set",
    category: "School",
    price: 799,
    image: "/school-uniform-shirt-pant-set.jpg",
    colors: ["Navy", "White", "Maroon"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Complete school uniform set including shirt and pant/skirt with premium quality fabric.",
    bulkDiscount: true,
  },
  {
    id: "corporate-formal-shirt",
    name: "Corporate Formal Shirt",
    category: "Corporate",
    price: 499,
    image: "/corporate-formal-shirt.jpg",
    colors: ["White", "Light Blue", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Professional formal shirt perfect for corporate offices with comfortable fit and premium fabric.",
    bulkDiscount: true,
  },
  {
    id: "medical-scrubs-set",
    name: "Medical Scrubs Set",
    category: "Medical",
    price: 999,
    image: "/medical-scrubs-nurse-uniform.jpg",
    colors: ["White", "Light Blue", "Green", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Comfortable and breathable medical scrubs for healthcare professionals with stain-resistant fabric.",
    bulkDiscount: true,
  },
  {
    id: "chef-coat-apron",
    name: "Chef Coat & Apron",
    category: "Hospitality",
    price: 1199,
    image: "/chef-coat-apron-kitchen-uniform.jpg",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Professional chef coat and apron set made with heat-resistant and stain-resistant fabric.",
    bulkDiscount: true,
  },
  {
    id: "security-uniform-set",
    name: "Security Uniform Set",
    category: "Industrial",
    price: 1299,
    image: "/security-guard-uniform-shirt-pant.jpg",
    colors: ["Navy", "Black", "Dark Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Durable security uniform set with professional appearance and practical design.",
    bulkDiscount: true,
  },
  {
    id: "industrial-coverall",
    name: "Industrial Coverall",
    category: "Industrial",
    price: 1499,
    image: "/industrial-safety-coverall-uniform.jpg",
    colors: ["Orange", "Grey", "Navy", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Heavy-duty industrial coverall with reinforced seams and multiple pockets for safety and functionality.",
    bulkDiscount: true,
  },
  {
    id: "hotel-reception-uniform",
    name: "Hotel Reception Uniform",
    category: "Hospitality",
    price: 1099,
    image: "/hotel-reception-uniform-dress.jpg",
    colors: ["Navy", "Black", "Burgundy", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Elegant reception uniform dress perfect for hotel and hospitality industry with premium fabric.",
    bulkDiscount: true,
  },
  {
    id: "lab-coat",
    name: "Lab Coat",
    category: "Medical",
    price: 699,
    image: "/white-lab-coat-professional.jpg",
    colors: ["White", "Light Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Professional lab coat with multiple pockets and durable fabric for laboratory environments.",
    bulkDiscount: true,
  },
]

export const categories = [
  { id: "school", name: "School", icon: "🎓" },
  { id: "corporate", name: "Corporate", icon: "💼" },
  { id: "medical", name: "Medical", icon: "⚕️" },
  { id: "hospitality", name: "Hospitality", icon: "🏨" },
  { id: "industrial", name: "Industrial", icon: "⚙️" },
]
