const products = [
  { id: 1, title: 'Moto Edge 60', price: '24,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/v/5/-original-imahgqnzfpgfhfap.jpeg?q=70', description: 'Powerful performance with a sleek design and great camera.' },
  { id: 2, title: 'realme p4 5G', price: '14,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/4/p/-original-imahf47e6gzt3ggw.jpeg?q=70', description: 'Affordable 5G smartphone with long battery life.' },
  { id: 3, title: 'Realme P3x 5G', price: '10,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70', description: 'Compact design and reliable everyday performance.' },
  { id: 4, title: 'Realme P4 5G', price: '21,499', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/b/o/-original-imahfghxxmadhjm4.jpeg?q=70', description: 'Great display and camera features for the price.' },
  { id: 5, title: 'Samsung Galaxy', price: '17,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=70', description: 'Reliable brand with good after-sales support.' },
  { id: 6, title: 'Premium TVs', price: '15,999', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/television/t/w/t/-original-imahfugqyvv6ktc6.jpeg?q=60', description: 'Crisp visuals and immersive sound.' },
  { id: 7, title: 'Microwave Ovens', price: '4,999', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/microwave-new/s/x/b/-original-imahd82ez72afreh.jpeg?q=60', description: 'Compact and efficient cooking solutions.' },
  { id: 8, title: 'True Wireless', price: '999', img: 'https://rukminim1.flixcart.com/image/420/420/xif0q/headphone/3/c/f/new-edition-tws-m19-gaming-earbuds-bluetooth-5-0-wireless-led-original-imah96zwnpzh4gu7.jpeg?q=60', description: 'Low latency audio for gaming and music.' },
  { id: 9, title: 'Kitchen Essentials', price: '1,499', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/mixer-grinder-juicer/i/0/m/-original-imaghy69gbrjwkvz.jpeg?q=60', description: 'Durable small appliances for everyday use.' },
  { id: 10, title: 'Home Essentials', price: '2,999', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/water-purifier/q/d/w/m2-needs-no-service-for-2-years-10-stage-filtration-native-by-original-imah2usukstmh2ru.jpeg?q=60', description: 'Keep your home clean and safe.' },
  { id: 11, title: 'Ethnic Set', price: '599', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/ethnic-set/7/t/k/s-al-style-9-grey-black-abha-lifestyle-original-imaguv28xqqrafge.jpeg?q=70', description: 'Stylish ethnic wear perfect for celebrations.' },
  { id: 12, title: "Men's Shoes", price: '299', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/3/e/q/8-brd-sh-1362-8-birde-beige-original-imahcyrm5jdrtwm4.jpeg?q=70', description: 'Comfortable everyday shoes.' },
  { id: 13, title: 'Lehenga', price: '499', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/lehenga-choli/b/r/y/free-half-sleeve-7406-maroon-women-lehenga-choli-latest-tasrika-original-imahywrstjbkhruw.jpeg?q=70', description: 'Elegant lehenga for festive occasions.' },
  { id: 14, title: "Men's Watches", price: '399', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/watch/y/i/7/1-abx4568-skb-abrexo-men-original-imahgdejbyshbxsz.jpeg?q=70', description: 'Classic designs with reliable movement.' },
  { id: 15, title: 'Spoil', price: '199', img: 'https://rukminim2.flixcart.com/fk-p-flap/300/300/image/f912baca91e0bc2d.png?q=70', description: 'A small treat for gifting.' }
];

const getProductById = (id) => {
  const num = Number(id);
  return products.find(p => p.id === num) || null;
}

export { products, getProductById };
