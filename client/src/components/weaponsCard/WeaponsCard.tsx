import "./weaponsCard.css";

interface WeaponType {
  name: string;
  picture_url: string;
  category_name: string;
  manufacturer_name: string;
  type_weapon: string;
  caliber: string;
  rarity_name: string;
}

interface WeaponsCardProps {
  weapon: WeaponType;
}

export default function WeaponsCard({ weapon }: WeaponsCardProps) {
  return (
    <div className="weapon-card">
      <h3 className="weapon-name">{weapon.name}</h3>
      <p className="weapon-manufacturer">{weapon.manufacturer_name}</p>
      <p className="rarity">{weapon.rarity_name}</p>

      <div className="weapon-image-container">
        <img
          src={`${import.meta.env.VITE_API_URL}/assets/${weapon.picture_url}`}
          alt={weapon.name}
          className="weapon-image"
        />
      </div>

      <div className="weapon-stats">
        <div className="weapon-stat">
          <span className="stat-label">Catégorie:</span>
          <span className="stat-value">{weapon.category_name}</span>
        </div>
        <div className="weapon-stat">
          <span className="stat-label">Type:</span>
          <span className="stat-value">{weapon.type_weapon}</span>
        </div>
        <div className="weapon-stat">
          <span className="stat-label">Calibre:</span>
          <span className="stat-value">{weapon.caliber}</span>
        </div>
      </div>

      <div className="weapon-actions">
        <button type="button" className="action-button">
          Détails
        </button>
        <button type="button" className="action-button">
          Équiper
        </button>
      </div>
    </div>
  );
}
