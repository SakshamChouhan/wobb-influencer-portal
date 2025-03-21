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
      logo: "https://images.seeklogo.com/logo-png/16/2/adidas-logo-png_seeklogo-168370.png",
      category: "Sports & Fitness"
    },
    title: "New Ultraboost Collection Review",
    description: "Create authentic content showcasing the new Ultraboost running shoes in real-life settings.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      logo: "https://images.seeklogo.com/logo-png/19/1/sephora-logo-png_seeklogo-194408.png",
      category: "Beauty"
    },
    title: "Summer Skincare Essentials",
    description: "Share your summer skincare routine featuring our newest products. Perfect for beauty influencers.",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      logo: "https://images.seeklogo.com/logo-png/49/1/bose-logo-png_seeklogo-498544.png",
      category: "Audio & Technology"
    },
    title: "QuietComfort Earbuds Review",
    description: "Create an unboxing and review video for our latest noise-cancelling earbuds. Ideal for tech reviewers.",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      logo: "https://images.seeklogo.com/logo-png/15/1/zara-logo-png_seeklogo-155775.png",
      category: "Fashion"
    },
    title: "Fall Collection Showcase",
    description: "Style and showcase our new fall collection in your unique way. We're looking for creative fashion content.",
    image: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      logo: "https://images.seeklogo.com/logo-png/35/1/nykaa-logo-png_seeklogo-358073.png",
      category: "Beauty"
    },
    title: "Festive Makeup Collection",
    description: "Create stunning festive makeup looks using our exclusive collection. Perfect for beauty enthusiasts.",
    image: "https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      logo: "https://images.seeklogo.com/logo-png/47/1/doordash-logo-png_seeklogo-479739.png",
      category: "Food & Delivery"
    },
    title: "Food Delivery Experience",
    description: "Share your food delivery experience with DoorDash. Looking for authentic content showing our service in action.",
    image: "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      logo: "https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png",
      category: "Sports & Fitness"
    },
    title: "Workout Essentials",
    description: "Create content showcasing your workout routine using Nike products. We're looking for fitness enthusiasts.",
    image: "https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    payoutType: "Refund",
    payoutAmount: 79999,
    hiredCount: 3,
    totalSlots: 5,
    tags: ["Tech", "Apple", "iPhone"]
  }
];
