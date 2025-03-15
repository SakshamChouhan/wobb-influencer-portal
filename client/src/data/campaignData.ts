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
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      category: "Sports & Fitness"
    },
    title: "New Ultraboost Collection Review",
    description: "Create authentic content showcasing the new Ultraboost running shoes in real-life settings.",
    image: "https://images.unsplash.com/photo-1586702358673-25ab2abc31f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sephora_Logo.svg",
      category: "Beauty"
    },
    title: "Summer Skincare Essentials",
    description: "Share your summer skincare routine featuring our newest products. Perfect for beauty influencers.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Bose_logo.svg",
      category: "Audio & Technology"
    },
    title: "QuietComfort Earbuds Review",
    description: "Create an unboxing and review video for our latest noise-cancelling earbuds. Ideal for tech reviewers.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
      category: "Fashion"
    },
    title: "Fall Collection Showcase",
    description: "Style and showcase our new fall collection in your unique way. We're looking for creative fashion content.",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://companieslogo.com/img/orig/NYKAA.NS-c31ac9e9.png",
      category: "Beauty"
    },
    title: "Festive Makeup Collection",
    description: "Create stunning festive makeup looks using our exclusive collection. Perfect for beauty enthusiasts.",
    image: "https://images.unsplash.com/photo-1530989109-7aa8e4318cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/DoorDash_Logo.svg",
      category: "Food & Delivery"
    },
    title: "Food Delivery Experience",
    description: "Share your food delivery experience with DoorDash. Looking for authentic content showing our service in action.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Nike_logo.svg",
      category: "Sports & Fitness"
    },
    title: "Workout Essentials",
    description: "Create content showcasing your workout routine using Nike products. We're looking for fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be639?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      category: "Technology"
    },
    title: "New iPhone Review",
    description: "Create an in-depth review of the latest iPhone. Looking for tech enthusiasts with a strong following.",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    payoutType: "Refund",
    payoutAmount: 79999,
    hiredCount: 3,
    totalSlots: 5,
    tags: ["Tech", "Apple", "iPhone"]
  }
];
