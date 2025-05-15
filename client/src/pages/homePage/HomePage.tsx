import "./HomePage.css";
import { useLoaderData } from "react-router-dom";
import WeaponsCard from "../../components/weaponsCard/WeaponsCard";

// Définition de l'interface pour les données d'armes
interface WeaponType {
  id: string;
  name: string;
  picture_url: string;
  category_name: string;
  manufacturer_name: string;
  type_weapon: string;
  caliber: string;
  rarity_name: string;
}

interface WeaponsDataTypes {
  weapons: WeaponType[];
}

export default function HomePage() {
  const data = useLoaderData() as WeaponsDataTypes;
  const weapons = data.weapons;
  console.info("API:", data.weapons);

  return (
    <>
      <main>
        <div className="hero-container">
          <h1 className="title-hero">Bienvenue dans ton inventaire</h1>
        </div>

        <section>
          <div className="container-section">
            <h2>Les nouveautés</h2>
            <div className="bar" />
          </div>
        </section>

        <section className="weapons-section">
          <div className="container-section">
            <h2>Les plus populaires</h2>
            <div className="bar" />
          </div>
          <div className="weapons-grid">
            {weapons.map((weapon) => (
              <div key={weapon.id} className="weapon-grid-item">
                <WeaponsCard weapon={weapon} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="container-section">
            <h2>Les fabricants</h2>
            <div className="bar" />
          </div>
        </section>
      </main>
    </>
  );
}
