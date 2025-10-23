import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, title: 'Moto Edge 60', price: '₹24,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/v/5/-original-imahgqnzfpgfhfap.jpeg?q=70' },
    { id: 2, title: 'realme p4 5G', price: '₹14,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/4/p/-original-imahf47e6gzt3ggw.jpeg?q=70' },
    { id: 3, title: 'Realme P3x 5G', price: '₹10,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70' },
    { id: 4, title: 'Realme P4 5G', price: '₹21,499', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/b/o/-original-imahfghxxmadhjm4.jpeg?q=70' },
    { id: 5, title: 'Samsung Galaxy', price: '₹17,999', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=70' }
  ];

  const electronics = [
    { id: 6, title: 'Premium TVs', price: '₹15,999', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/television/t/w/t/-original-imahfugqyvv6ktc6.jpeg?q=60' },
    { id: 7, title: 'Microwave Ovens', price: '₹4,999', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/microwave-new/s/x/b/-original-imahd82ez72afreh.jpeg?q=60' },
    { id: 8, title: 'True Wireless', price: '₹999', img: 'https://rukminim1.flixcart.com/image/420/420/xif0q/headphone/3/c/f/new-edition-tws-m19-gaming-earbuds-bluetooth-5-0-wireless-led-original-imah96zwnpzh4gu7.jpeg?q=60' },
    { id: 9, title: 'Kitchen Essentials', price: '₹1,499', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/mixer-grinder-juicer/i/0/m/-original-imaghy69gbrjwkvz.jpeg?q=60' },
    { id: 10, title: 'Home Essentials', price: '2,999', img: 'https://rukminim1.flixcart.com/image/240/240/xif0q/water-purifier/q/d/w/m2-needs-no-service-for-2-years-10-stage-filtration-native-by-original-imah2usukstmh2ru.jpeg?q=60' }
  ];

  const fashion = [
    { id: 11, title: 'Ethnic Set', price: '₹599', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/ethnic-set/7/t/k/s-al-style-9-grey-black-abha-lifestyle-original-imaguv28xqqrafge.jpeg?q=70' },
    { id: 12, title: "Men's Shoes", price: '₹299', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/3/e/q/8-brd-sh-1362-8-birde-beige-original-imahcyrm5jdrtwm4.jpeg?q=70' },
    { id: 13, title: 'Lehenga', price: '₹499', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/lehenga-choli/b/r/y/free-half-sleeve-7406-maroon-women-lehenga-choli-latest-tasrika-original-imahywrstjbkhruw.jpeg?q=70' },
    { id: 14, title: "Men's Watches", price: '₹399', img: 'https://rukminim2.flixcart.com/image/300/300/xif0q/watch/y/i/7/1-abx4568-skb-abrexo-men-original-imahgdejbyshbxsz.jpeg?q=70' },
    { id: 15, title: 'Spoil', price: '₹199', img: 'https://rukminim2.flixcart.com/fk-p-flap/300/300/image/f912baca91e0bc2d.png?q=70' }
  ];

  const renderList = (title, list) => (
    <div className='m-[20px] mt-[10px] bg-gray-100 p-[30px] pl-[50px]'>
      <h1 className='font-bold text-3xl pt-[-10px]'>{title}</h1>
      <br />
      <div className='flex gap-12 flex-wrap'>
        {list.map((p) => (
          <div
            key={p.id}
            role='button'
            tabIndex={0}
            onClick={() => navigate(`/product/${p.id}`)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/product/${p.id}`); }}
            className='  w-45 h-55 bg-white pl-5 rounded-md shadow-sm flex flex-col  mb-4'
            aria-label={`Open details for ${p.title}`}
          >
            <img className='w-32 h-40 object-cover mb-2 ' src={p.img} alt={p.title} />
            <span className='text-sm'>{p.title}</span>
            <span className='font-bold'>From {p.price}*</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {renderList('Best deals on smartphones', products)}
      {renderList('Best deals on Electronics', electronics)}
      {renderList('Best deals on Fashion', fashion)}
    </>
  );
};

export default ProductCard
