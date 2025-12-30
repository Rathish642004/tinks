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
  whatsapp_message: string
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
    "TINKS designs and supplies school house uniforms for daily school activities and events. Our range includes house T-shirts, track pants, and activewear uniforms for boys, girls, and kindergarten students. Built for regular use, these uniforms support consistent sizing, practical design, and dependable bulk supply for schools.",
  categories: [
    {
      id: "boys-uniform",
      title: "Boys Uniform Set",
      description: "Comfortable house uniforms with durable stitching for daily school use.",
      image: "/school-uniform-shirt-pant-set.jpg",
      cta_text: "View Details",
      cta_link: `/products/school/${"boys-uniform"}`,
      productDetails: {
        colors: [
          { name: "Red", hex: "#ff0000" },
          { name: "Blue", hex: "#0000ff" },
          { name: "Yellow", hex: "#ffff00" },
          {name: "Green", hex: "#008000" }
        ],
        sizes: [
          { size: "1-5 std", available: true },
          { size: "6-8 std", available: true },
          { size: "9-12 std", available: true }
        ],
        startingPrice: "₹499",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
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
      cta_text: "View Details",
      cta_link: `/products/school/${"girls-uniform"}`,
      productDetails: {
        colors: [
          { name: "Red", hex: "#ff0000" },
          { name: "Blue", hex: "#0000ff" },
          { name: "Yellow", hex: "#ffff00" },
          {name: "Green", hex: "#008000" }
        ],
        sizes: [
          { size: "1-5 std", available: true },
          { size: "6-8 std", available: true },
          { size: "9-12 std", available: true }
        ],
        startingPrice: "₹499",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
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
      cta_text: "View Details",
      cta_link: `/products/school/${"kindergarten-uniform"}`,
      productDetails: {
        colors: [
          { name: "Red", hex: "#ff0000" },
          { name: "Blue", hex: "#0000ff" },
          { name: "Yellow", hex: "#ffff00" },
          {name: "Green", hex: "#008000" }
        ],
        sizes: [
          { size: "2Y", available: true },
          { size: "3Y", available: true },
          { size: "4Y", available: true },
          { size: "5Y", available: true },
          { size: "6Y", available: true },
        ],
        startingPrice: "₹349",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Quality Fabric", description: "Safe & soft" },
        ],
      },
    },
  ],
  final_cta_text: "Let's discuss your uniform requirements",
  final_cta_subtext: "Start a Discussion",
  whatsapp_message: "Hello, I would like to inquire about school uniforms.",
}

export const corporateWearData: Collection = {
  id: "corporate",
  name: "Corporate Wears",
  intro:
    "At TINKS, our polo t-shirts are designed for everyday wear as part of professional corporate uniforms. Crafted from carefully selected fabrics, they provide lasting comfort for both men and women during long working hours. Each polo retains its shape after repeated washes while maintaining a clean, polished brand appearance.",
  categories: [
    {
      id: "everyday-comfort",
      title: "Everyday Comfort Polo",
      description: "100% Cotton - Soft, breathable cotton designed for all-day comfort and regular use.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "View Details",
      cta_link: `/products/corporate/${"everyday-comfort"}`,
      productDetails: {
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Blue", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Custom", hex: "#ff7f00" },
        ],
        sizes: [
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
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "100% Cotton", description: "Breathable & soft" },
        ],
      },
    },
    {
      id: "easycare-polo",
      title: "EasyCare Work Polo",
      description: "60% Cotton / 40% Polyester - Durable blend that’s easy to wash, quick to dry, and perfect for daily workwear.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "View Details",
      cta_link: `/products/corporate/${"easycare-polo"}`,
      productDetails: {
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Blue", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Custom", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹349",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "Wrinkle Resistant", description: "Easy care fabric" },
        ],
      },
    },
    {
      id: "stretchfit-polo",
      title: "StretchFit Polo",
      description: "95% Cotton / 5% Lycra - Flexible fabric with a comfortable stretch for a better fit and easy movement.",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "View Details",
      cta_link: `/products/corporate/${"stretchfit-polo"}`,
      productDetails: {
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Blue", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Custom", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹339",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
          { icon: "✂️", title: "Custom Stitching", description: "Available" },
          { icon: "📦", title: "Bulk Friendly", description: "Special discounts" },
          { icon: "✨", title: "With Lycra", description: "Flexible & comfortable" },
        ],
      },
    },
    {
      id: "premium-soft-polo",
      title: "Premium Soft Polo",
      description: "100% Bio-Washed Cotton - Smooth, premium-finish cotton that feels softer and looks refined all day..",
      image: "/corporate-formal-shirt.jpg",
      cta_text: "View Details",
      cta_link: `/products/corporate/${"premium-soft-polo"}`,
      productDetails: {
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Blue", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Custom", hex: "#ff7f00" },
        ],
        sizes: [
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
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
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
  whatsapp_message: "Hello, I would like to inquire about corporate wear uniforms.",
}

export const retailStaffWearData: Collection = {
  id: "retail",
  name: "Retail & Staff Wears",
  intro:
    "TINKS Retail & Staff Wear helps brands maintain a neat, professional appearance through well-designed staff uniforms. Built for long working hours, frequent washing, and daily customer interaction, our garments support team comfort and brand consistency. From retail outlets to showrooms and service counters, we design practical shop uniforms suited to real work environments.",
  categories: [
    {
      id: "workcomfort-polo",
      title: "WorkComfort Polo",
      description: "Professional polo perfect for retail and hospitality staff.",
      image: "/hotel-reception-uniform-dress.jpg",
      cta_text: "View Details",
      cta_link: `/products/retail/${"workcomfort-polo"}`,
      productDetails: {
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Blue", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Custom", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹249",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
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
      cta_text: "View Details",
      cta_link: `/products/retail/${"airflow-knit"}`,
      productDetails: {
        colors: [
          { name: "Black", hex: "#000000" },
          { name: "Blue", hex: "#1e4b96" },
          { name: "White", hex: "#ffffff" },
          { name: "Custom", hex: "#ff7f00" },
        ],
        sizes: [
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹199",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
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
      cta_text: "View Details",
      cta_link: `/products/retail/${"gracewear-saree"}`,
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
        startingPrice: "₹299",
        bulkDiscountNote: "Bulk discounts available for larger quantities",
        addOnsNote: "Logo embroidery, name tags, custom printing (details can be provided after quote request)",
        features: [
          { icon: "🚚", title: "Fast Delivery", description: "across India" },
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
  whatsapp_message: "Hello, I would like to inquire about retail and staff wear uniforms.",
}

export const sportsJerseyData: Collection = {
  id: "sports",
  name: "Sports & Jersey Wears",
  intro:
    "TINKS Sports & Jersey Wear is designed for active performance, with each sports jersey supporting movement, sweat management, and regular use. Ideal for schools, colleges, academies, and teams, our team jersey designs focus on functionality and consistency, helping players stay comfortable, confident, and ready on the field.",
    categories: [
    {
      id: "team-jerseys",
      title: "Team Jerseys",
      description: "Custom-designed jerseys for sports teams with durability and performance.",
      image: "/security-guard-uniform-shirt-pant.jpg",
      cta_text: "View Details",
      cta_link: `/products/sports/${"team-jerseys"}`,
      productDetails: {
        colors: [
          { name: "Custom", hex: "#1e4b96" },
        ],
        sizes: [
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
      cta_text: "View Details",
      cta_link: `/products/sports/${"custom-sportswear"}`,
      productDetails: {
        colors: [
          { name: "Custom", hex: "#1e4b96" },
        ],
        sizes: [
          { size: "S", available: true },
          { size: "M", available: true },
          { size: "L", available: true },
          { size: "XL", available: true },
          { size: "XXL", available: true },
        ],
        startingPrice: "₹329",
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
  whatsapp_message: "Hello, I would like to inquire about custom sports uniforms.",
}

export const allCollections = [schoolUniformsData, corporateWearData, retailStaffWearData, sportsJerseyData]
