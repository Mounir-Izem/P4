import "./weaponsCard.css";

export default function WeaponsCard({ weapon }: WeaponsTypes) {
  return (
    <>
      <article className="weapons-container">
        <div className="weapon-image">
          <img
            src={`${import.meta.env.VITE_API_URL}/images/${weapon.picture_url}`}
            alt={weapon.name}
          />
        </div>
        <div className="weapon-info">
          <h3>{weapon.name}</h3>
          <p>{weapon.manufacturer_id}</p>
          <p>{weapon.type_weapon}</p>
          <p>{weapon.caliber}</p>
        </div>
      </article>
    </>
  );
}
