"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./RestaurantCard.css"
import Link from "next/link"

export default function RestaurantCard({ image, name, location, isNew, slug }) {
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`liked-${slug}`) === 'true';
  });

  const handleLike = (e) => {
    e.preventDefault();
    const newValue = !isLiked;
    setIsLiked(newValue);
    localStorage.setItem(`liked-${slug}`, newValue);
  };

  return (
    <Link href={`/restaurant/${slug}`}>
      <div className="restaurant-card">
        <img src={image} alt={name} className="card-image" />
        {isNew && <span className="badge-nouveau">Nouveau</span>}
        <div className="card-content">
          <article>
            <h3 className="card-title">{name}</h3>
            <p className="card-location">{location}</p>
          </article>
          <button
            className="heart-button"
            onClick={handleLike}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={isLiked ? 'heart-icon liked' : 'heart-icon'}
            />
          </button>
        </div>
      </div>
    </Link>
  );
}