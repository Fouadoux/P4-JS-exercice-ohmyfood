"use client";

import { use, useState , useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { notFound } from 'next/navigation';
import datas from '@/data/restaurants.json';
import MenuItem from '@/components/MenuItem/MenuItem';

export default function RestaurantPage({ params }) {
  const { slug } = use(params);
  const restaurant = datas.restaurants.find((resto) => resto.slug === slug);

  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    setIsLiked(localStorage.getItem(`liked-${slug}`) === 'true');
  }, [slug]);
  if (!restaurant) {
    notFound();
  }

  return (
    <div>
      <div className='heroImage'>
        <img
          className='image'
          src={restaurant.image}
          alt={restaurant.name}
        />
      </div>
      <div className='mainWrapper'>
        <div className='contentWrapper'>

          <div className='restaurantHeader'>
            <h1 className='restaurantName'>{restaurant.name}</h1>
            <FontAwesomeIcon
              icon={faHeart}
              className={isLiked ? 'heartIcon liked' : 'heartIcon'}
            />
          </div>

          <div className='menu'>
            <div>
              <h2 className='sectionTitle'>Entrées</h2>
              {restaurant.menu.entrées.map((entree, index) => (
                <MenuItem
                  key={entree.nom}
                  item={entree}
                  index={index}
                />
              ))}
            </div>
            <div>
              <h2 className='sectionTitle'>Plats</h2>
              {restaurant.menu.plats.map((plat, index) => (
                <MenuItem
                  key={plat.nom}
                  item={plat}
                  index={index}
                />
              ))}
            </div>
            <div>
              <h2 className='sectionTitle'>Desserts</h2>
              {restaurant.menu.desserts.map((dessert, index) => (
                <MenuItem
                  key={dessert.nom}
                  item={dessert}
                  index={index}
                />
              ))}
            </div>
          </div>
          <button className='orderButton'>Commander</button>

        </div>
      </div>
    </div>
  );
}