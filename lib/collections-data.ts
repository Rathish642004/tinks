export interface CollectionCategory {
  id: string
  title: string
  description: string
  image: string
  cta_text: string
  cta_link: string
}

export interface Collection {
  id: string
  name: string
  intro: string
  categories: CollectionCategory[]
  final_cta_text: string
  final_cta_subtext: string
}

export interface ProductColor {
  name: string
  hex: string
}

export interface ProductSize {
  size: string
  available: boolean
}

export interface ProductFeature {
  icon: string
  title: string
  description: string
}

export interface ProductDetails {
  colors: ProductColor[]
  sizes: ProductSize[]
  startingPrice: string
  bulkDiscountNote: string
  addOnsNote: string
  features: ProductFeature[]
}

// Update CollectionCategory interface to include productDetails
export interface CollectionCategory {
  id: string
  title: string
  description: string
  image: string
  cta_text: string
  cta_link: string
  productDetails: ProductDetails
}

export const schoolUniformsData: Collection = {
  id: "school",
  name: "School Uniforms",
  intro:
    "TINKS provides high-quality school house uniforms designed for comfort, fit, and durability. We manufacture house T-shirts, track pants, and activewear uniforms for boys, girls, and kindergarten students. Our uniforms are made using breathable, skin-friendly fabrics suitable for daily school activities and events. Schools trust TINKS for consistent quality, accurate sizing, and reliable bulk delivery of house uniforms.",
  categories: [
    {
      id: "boys-uniform",
      title: "Boys Uniform Set",
      description: "Comfortable house uniforms with durable stitching for daily school use.",
      image: "/school-uniform-shirt-pant-set.jpg",
      cta_text: "Enquire Now",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Maroon", hex: "#800000" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹599",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Quality Fabric", description: "Premium material" },
        ],
      },
    },
    {
      id: "girls-uniform",
      title: "Girls Uniform Set",
      description: "Well-fitted house uniforms designed for comfort and movement.",
      image: "/school-uniform-shirt-pant-set.jpg",
      cta_text: "Enquire Now",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Maroon", hex: "#800000" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹649",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Quality Fabric", description: "Premium material" },
        ],
      },
    },
    {
      id: "kindergarten-uniform",
      title: "Kindergarten Uniform Set",
      description: "Soft, safe house uniforms suitable for young children.",
      image: "/school-uniform-shirt-pant-set.jpg",
      cta_text: "Enquire Now",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Pink", hex: "#ff69b4" },
        ],
        sizes: [
          { size: "2Y", available: true },
          { size: "3Y", available: true },
          { size: "4Y", available: true },
          { size: "5Y", available: true },
          { size: "6Y", available: true },
        ],
        startingPrice: "₹449",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Quality Fabric", description: "Safe & soft" },
        ],
      },
    },
  ],
  final_cta_text: "Let's discuss your uniform requirements",
  final_cta_subtext: "Start a Discussion",
}

export const corporateWearData: Collection = {
  id: "corporate",
  name: "Corporate Wear",
  intro:
    "Professional uniforms that strengthen your brand identity. TINKS offers a range of corporate wear options from everyday comfort polos to premium soft fabrics. Each fabric is selected for durability, comfort, and professional appearance suitable for office environments.",
  categories: [
    {
      id: "everyday-comfort",
      title: "Everyday Comfort Polo",
      description: "100% Cotton - Soft, breathable, and perfect for daily wear.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "Get Quote",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#000000" },
          { name: "Orange", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹549",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "100% Cotton", description: "Breathable & soft" },
        ],
      },
    },
    {
      id: "easycare-polo",
      title: "EasyCare Work Polo",
      description: "60% Cotton / 40% Polyester - Easy to maintain and wrinkle-resistant.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "Get Quote",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#000000" },
          { name: "Orange", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹449",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Wrinkle Resistant", description: "Easy care fabric" },
        ],
      },
    },
    {
      id: "stretchfit-polo",
      title: "StretchFit Polo",
      description: "95% Cotton / 5% Lycra - Maximum comfort with flexibility for movement.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "Get Quote",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#000000" },
          { name: "Orange", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹599",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "With Lycra", description: "Flexible & comfortable" },
        ],
      },
    },
    {
      id: "premium-soft-polo",
      title: "Premium Soft Polo",
      description: "100% Bio-Washed Cotton - Luxuriously soft with a premium feel.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "Get Quote",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#000000" },
          { name: "Orange", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹699",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Bio-Washed Cotton", description: "Premium feel" },
        ],
      },
    },
  ],
  final_cta_text: "Looking to choose the right polo fabric for your institution or team?",
  final_cta_subtext:
    "Let's discuss your usage, quantity, and customization needs — we'll help you find the best fit for your requirement.",
}

export const retailStaffWearData: Collection = {
  id: "retail",
  name: "Retail & Staff Wear",
  intro:
    "Polished staff uniforms for confident customer interactions. TINKS offers retail and staff wear solutions designed for hospitality and retail environments. Our uniforms combine professionalism with comfort for all-day wear.",
  categories: [
    {
      id: "workcomfort-polo",
      title: "WorkComfort Polo",
      description: "Professional polo perfect for retail and hospitality staff.",
      image: "/hotel-reception-uniform-dress.jpg",
      cta_text: "Connect",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#000000" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹499",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Professional Look", description: "Quality material" },
        ],
      },
    },
    {
      id: "airflow-knit",
      title: "AirFlow Knit T-Shirt",
      description: "Breathable knit fabric ideal for high-activity retail environments.",
      image: "/hotel-reception-uniform-dress.jpg",
      cta_text: "Connect",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Black", hex: "#000000" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹399",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Breathable", description: "High activity ready" },
        ],
      },
    },
    {
      id: "gracewear-saree",
      title: "GraceWear Saree",
      description: "Traditional saree option with modern comfort for staff uniforms.",
      image: "/hotel-reception-uniform-dress.jpg",
      cta_text: "Connect",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Cream", hex: "#fffdd0" },
        ],
        sizes: [
          { size: "One Size", available: true },
          { size: "With Petticoat", available: true },
        ],
        startingPrice: "₹799",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "Across Tamil Nadu" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Traditional", description: "Modern comfort" },
        ],
      },
    },
  ],
  final_cta_text: "Planning uniforms for your retail or staff team?",
  final_cta_subtext:
    "Let's discuss your brand colors, work environment, and comfort needs — we'll help you choose the right uniform solution.",
}

export const sportsJerseyData: Collection = {
  id: "sports",
  name: "Sports & Jersey Wear",
  intro:
    "Durable, flexible uniforms made for active performance. TINKS specializes in sports uniforms and jersey wear designed to withstand intense activity while maintaining style and brand identity. Perfect for teams, schools, and sports organizations.",
  categories: [
    {
      id: "team-jerseys",
      title: "Team Jerseys",
      description: "Custom-designed jerseys for sports teams with durability and performance.",
      image: "/security-guard-uniform-shirt-pant.jpg",
      cta_text: "Order Now",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "Red", hex: "#ff0000" },
          { name: "Orange", hex: "#ff7f00" },
          { name: "White", hex: "#ffffff" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹349",
        bulkDiscountNote: "Bulk discounts available for team orders",
        addOnsNote: "Team name, player numbers, custom logos on jerseys (details can be customized)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "For sports events" },
          { icon: "✂️", title: "Custom Jersey", description: "Personalized" },
          { icon: "📦", title: "Team Friendly", description: "Discounted rates" },
          { icon: "✨", title: "Performance Fabric", description: "Moisture wicking" },
        ],
      },
    },
    {
      id: "custom-sportswear",
      title: "Custom Sportswear",
      description: "Tailored sportswear solutions for athletes and sports organizations.",
      image: "/security-guard-uniform-shirt-pant.jpg",
      cta_text: "Order Now",
      cta_link: "/contact",
      productDetails: {
        colors: [
          { name: "Navy", hex: "#1e4b96" },
          { name: "Red", hex: "#ff0000" },
          { name: "Orange", hex: "#ff7f00" },
          { name: "White", hex: "#ffffff" },
        ],
        sizes: [
          { size: "XS", available: true },
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹499",
        bulkDiscountNote: "Bulk discounts available for sports organizations",
        addOnsNote: "Team logo, custom designs, athlete names (fully customizable)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "For sports seasons" },
          { icon: "✂️", title: "Full Customization", description: "Design included" },
          { icon: "📦", title: "Organization Friendly", description: "Bulk discounts" },
          { icon: "✨", title: "Performance Tech", description: "Advanced fabric" },
        ],
      },
    },
  ],
  final_cta_text: "Ready for custom sports uniforms?",
  final_cta_subtext: "Get in touch to discuss your team's uniform requirements and specifications.",
}

export const allCollections = [schoolUniformsData, corporateWearData, retailStaffWearData, sportsJerseyData]
