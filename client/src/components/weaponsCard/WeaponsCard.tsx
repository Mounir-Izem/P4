import "./weaponsCard.css";

export default function WeaponsCard({ weapon }: WeaponsCardProps) {
  console.info("WeaponsCard props:", weapon);
  return (
    <>
      <article className="popular-container">
        <div className="weapons-container">
          <div className="weapon-image">
            <img
              src={`${import.meta.env.VITE_API_URL}/images/${weapon.picture_url}`}
              alt={weapon.name}
            />
          </div>
          <div className="weapon-info">
            <h3>{weapon.name}</h3>
            <p>{weapon.category_id}</p>
            <p>{weapon.manufacturer_id}</p>
            <p>{weapon.type_weapon}</p>
            <p>{weapon.caliber}</p>
          </div>
        </div>
      </article>
    </>
  );
}
