import "./RestaurantCard.css"


export default function RestaurantCard({image, name, location, isNew }){



return(
<div className="restaurant-card">
  <img src={image} alt={name} className="card-image"/>
  {isNew && <span className="badge-nouveau">Nouveau</span>}
  <div className="card-content">
    <h3 className="card-title">{name}</h3>
    <p className="card-location">{location}</p>
    
  </div>
</div>
);
}