import Image from "next/image";
import styles from "./page.module.css";
import Steps from "@/components/Steps/Steps";
import datas from '../data/restaurants.json';
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";


export default function Home() {

const restaurants = datas.restaurants.map((data) =>
  <RestaurantCard
    key={data.id}
    image={data.image}
    name={data.name}
    location={data.location}
    isNew={data.isNew}
  />
);

  return (
    <>
      <div className={styles.location}>
        <Image src="/icons/location.svg" alt="" width={16} height={16} />
        <span>Paris, Belleville</span>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Réservez le menu qui vous convient</h1>
          <p>Découvrez des restaurants d'exception, sélectionnés par nos soins.</p>
          <button className={styles.cta}>Explorer nos restaurants</button>
        </div>
      </section>

      <Steps />

      <section className={styles.restaurants}>
        <div className={styles.restaurantsContent}>
          <h2>Restaurants</h2>
          <div className={styles.restaurantGrid}>
            {restaurants}
          </div>
        </div>
      </section>
    </>
  );
}
