import "./HomePage.css";
import { useLoaderData } from "react-router-dom";
import WeaponsCard from "../../components/weaponsCard/WeaponsCard";

export default function HomePage() {
  const data = useLoaderData() as WeaponsDataTypes;

  const weapons = data.weapons;
  console.info("API:", weapons);
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
        <section>
          <div className="container-section">
            <h2>Les plus populaires</h2>
            <div className="bar" />
          </div>
          <ul>
            {weapons.map((weapon) => (
              <li key={weapon.id}>
                <WeaponsCard key={weapon.id} weapon={weapon} />
              </li>
            ))}
          </ul>
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
