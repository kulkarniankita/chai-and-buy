interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hot Chai Cold Revenge",
    price: 9.99,
    image:
      "https://res.cloudinary.com/dkfnd7xy7/image/upload/v1728937062/hot-tips/ihatecopy_k5ve2s.webp",
  },
  {
    id: 2,
    name: "Wake up Didi",
    price: 14.99,
    image:
      "https://res.cloudinary.com/dkfnd7xy7/image/upload/v1728937061/hot-tips/wakeup_sjv4mi.webp",
  },
  {
    id: 3,
    name: "Want to JEE and be FREE",
    price: 19.99,
    image:
      "https://res.cloudinary.com/dkfnd7xy7/image/upload/v1728937061/hot-tips/jee-be-free_midyjb.webp",
  },
];
