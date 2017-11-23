import { CartItem } from './cart-item';

export const COMPUTERS: CartItem[] = [
  { id: 11, 
    name: 'Acer', 
    image: "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_ES1/Images/20140828/Acer-Aspire-E-ES1-411-black-nontouch-glare-sku-preview.png", 
    details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)",
    price: 35000
  },
  { id: 12, name: 'Lenovo', image: "https://img.grouponcdn.com/deal/ZzoucvpM6NXUf1JcVo5czmWsM9h/Zz-2048x1228/v1/c700x420.jpg",
  details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)", price: 40000 },
  { id: 13, name: 'Mac', image:"https://cnet2.cbsistatic.com/img/hjo7_UY6ykIh_9cfttUZYaiF7V0=/770x433/2017/06/21/39c814c4-4909-43e8-aa0d-89eff3aced37/apple-macbook-12-inch-2017-01.jpg",
  details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)", price: 35000 },
  { id: 14, name: 'Toshiba', image: "https://www.notebookcheck.net/uploads/tx_nbc2/satellite-m300-hero.png",
  details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)", price: 37500 },
  { id: 15, name: 'Windows', image: "http://www.siliconbeat.com/wp-content/uploads/2013/02/microsoft-surface-pro-windows-8-tbalet-0.jpg",
  details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)", price: 32000 },
  { id: 16, name: 'HP', image: "https://d3nevzfk7ii3be.cloudfront.net/igi/BeZmZJyP5OSaNTvf.large",
  details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)", price: 50000 },
  { id: 17, name: 'Asus', image: "https://www.asus.com/media/global/products/LxBIlKefpPOjFywg/P_setting_F5F5F5_1_90_end_765.png",
  details: "At the Acer Aspire E1's heart is Intel's dual-core Core i5 processor clocked at 1.6GHz, with a satisfying 8GB of memory to go along. ... Graphics: Nvidia GeForce GT 820M (2GB DDR3 memory) RAM: 8GB DDR3L SDRAM. Screen: 14-inch, 1366 x 768 (16:9 aspect ratio)", price: 28700 },
];

export const MOUSE: CartItem[] = [
  { id: 11, name: 'Mr. Nice', image: "", details: "", price: 500 },
  { id: 12, name: 'Narco', price: 500 },
  { id: 13, name: 'Bombasto', price: 500 },
  { id: 14, name: 'Celeritas', price: 500 },
  { id: 15, name: 'Magneta', price: 500 },
  { id: 16, name: 'RubberMan', price: 500 },
  { id: 17, name: 'Dynama', price: 500 },
  { id: 18, name: 'Dr IQ', price: 500 },
  { id: 19, name: 'Magma', price: 500 },
  { id: 20, name: 'Tornado', price: 500 }
];

export const KEYBOARDS: CartItem[] = [
  { id: 11, name: 'Mr. Nice', image: "", details: "", price: 500 },
  { id: 12, name: 'Narco', price: 500 },
  { id: 13, name: 'Bombasto', price: 500 },
  { id: 14, name: 'Celeritas', price: 500 },
  { id: 15, name: 'Magneta', price: 500 },
  { id: 16, name: 'RubberMan', price: 500 },
  { id: 17, name: 'Dynama', price: 500 },
  { id: 18, name: 'Dr IQ', price: 500 },
  { id: 19, name: 'Magma', price: 500 },
  { id: 20, name: 'Tornado', price: 500 }
];

export const TABLETS: CartItem[] = [
  { id: 11, name: 'iPad', image: "https://brain-images-ssl.cdn.dixons.com/0/8/10118380/u_10118380.jpg", details: "Apple iPad", price: 35000 },
  { id: 12, name: 'Samsung S2', image:"https://brain-images-ssl.cdn.dixons.com/7/5/10137257/l_10137257_001.jpg", details:"Samsung", price: 25500 }

];

export const PHONES: CartItem[] = [
  { id: 11, name: 'Mr. Nice', image: "", details: "", price: 15000 },
  { id: 12, name: 'Narco', price: 21500 },
  { id: 13, name: 'Bombasto', price: 25500 },
  { id: 14, name: 'Celeritas', price: 18500 },
  { id: 15, name: 'Magneta', price: 26000 },
  { id: 16, name: 'RubberMan', price: 27500 },
  { id: 17, name: 'Dynama', price: 19700 },
  { id: 18, name: 'Dr IQ', price: 38200 },
  { id: 19, name: 'Magma', price: 22500 },
  { id: 20, name: 'Tornado', price: 23800 }
];

