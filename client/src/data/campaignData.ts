export interface Brand {
  name: string;
  logo: string;
  category: string;
}

export interface Campaign {
  id: number;
  brand: Brand;
  title: string;
  description: string;
  image: string;
  payoutType: string;
  payoutAmount: number;
  hiredCount: number;
  totalSlots: number;
  tags: string[];
}

export const campaignData: Campaign[] = [
  {
    id: 1,
    brand: {
      name: "Adidas",
      logo: "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
      category: "Sports & Fitness"
    },
    title: "New Ultraboost Collection Review",
    description: "Create authentic content showcasing the new Ultraboost running shoes in real-life settings.",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/32e704d0-5ac7-4d0c-9065-8f54b1a7def6/revolution-6-road-running-shoes-wide-vtRNJn.png",
    payoutType: "Fixed Pay",
    payoutAmount: 15000,
    hiredCount: 8,
    totalSlots: 15,
    tags: ["Fashion", "Sports", "Fitness"]
  },
  {
    id: 2,
    brand: {
      name: "Sephora",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Sephora-Logo-1024x640.png",
      category: "Beauty"
    },
    title: "Summer Skincare Essentials",
    description: "Share your summer skincare routine featuring our newest products. Perfect for beauty influencers.",
    image: "https://belleblushh.com/wp-content/uploads/2020/12/Summer-Fridays-Sephora-Holiday-Skincare-Set.jpg",
    payoutType: "Barter",
    payoutAmount: 8000,
    hiredCount: 12,
    totalSlots: 20,
    tags: ["Beauty", "Skincare", "Summer"]
  },
  {
    id: 3,
    brand: {
      name: "Bose",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Bose-Logo-1024x576.png",
      category: "Audio & Technology"
    },
    title: "QuietComfort Earbuds Review",
    description: "Create an unboxing and review video for our latest noise-cancelling earbuds. Ideal for tech reviewers.",
    image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/silo_images/QCEB_PDP_Ecom-Gallery-B03.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    payoutType: "Refund",
    payoutAmount: 22999,
    hiredCount: 5,
    totalSlots: 10,
    tags: ["Tech", "Audio", "Gadgets"]
  },
  {
    id: 4,
    brand: {
      name: "Zara",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/ZARA-logo.jpg",
      category: "Fashion"
    },
    title: "Fall Collection Showcase",
    description: "Style and showcase our new fall collection in your unique way. We're looking for creative fashion content.",
    image: "https://www.zara.com/assets/application/resources/public/img/categories-bg/W08_WOMAN_COLLECTION_SS24_COLLECTION.jpg",
    payoutType: "Fixed Pay",
    payoutAmount: 12000,
    hiredCount: 18,
    totalSlots: 25,
    tags: ["Fashion", "Style", "FallFashion"]
  },
  {
    id: 5,
    brand: {
      name: "Nykaa",
      logo: "https://play-lh.googleusercontent.com/eDell8rOnH6h1RXYm-jRvlXPCLu4M9ucn8JCNs0uwQA4ixHMyKB4RLtLMGUTvPfQI_Q",
      category: "Beauty"
    },
    title: "Festive Makeup Collection",
    description: "Create stunning festive makeup looks using our exclusive collection. Perfect for beauty enthusiasts.",
    image: "https://images-static.nykaa.com/uploads/39438c66-ab8e-4fff-9c8f-f741dc18c96f.jpg",
    payoutType: "Barter",
    payoutAmount: 7500,
    hiredCount: 9,
    totalSlots: 15,
    tags: ["Beauty", "Makeup", "Festival"]
  },
  {
    id: 6,
    brand: {
      name: "DoorDash",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/DoorDash-logo-768x432.png",
      category: "Food & Delivery"
    },
    title: "Food Delivery Experience",
    description: "Share your food delivery experience with DoorDash. Looking for authentic content showing our service in action.",
    image: "https://assets.bonappetit.com/photos/625ca80a3f11701bc3dcd7b9/16:9/w_2560%2Cc_limit/0419-Door-Dash-Story-Lede.jpg",
    payoutType: "Fixed Pay",
    payoutAmount: 5000,
    hiredCount: 7,
    totalSlots: 20,
    tags: ["Food", "Delivery", "Lifestyle"]
  },
  {
    id: 7,
    brand: {
      name: "Nike",
      logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-768x432.png",
      category: "Sports & Fitness"
    },
    title: "Workout Essentials",
    description: "Create content showcasing your workout routine using Nike products. We're looking for fitness enthusiasts.",
    image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/0e1af797-67fa-465e-9aad-f1ad7f5e84a4/nike-just-do-it.jpg",
    payoutType: "Fixed Pay",
    payoutAmount: 18000,
    hiredCount: 10,
    totalSlots: 15,
    tags: ["Fitness", "Sports", "Workout"]
  },
  {
    id: 8,
    brand: {
      name: "Apple",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png",
      category: "Technology"
    },
    title: "New iPhone Review",
    description: "Create an in-depth review of the latest iPhone. Looking for tech enthusiasts with a strong following.",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693009284541",
    payoutType: "Refund",
    payoutAmount: 79999,
    hiredCount: 3,
    totalSlots: 5,
    tags: ["Tech", "Apple", "iPhone"]
  }
];
