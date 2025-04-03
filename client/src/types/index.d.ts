interface WeaponsDataTypes {
  weapons: Weapon[];
}

interface WeaponProps {
  id: number;
  name: string;
  manufacturer_id: number;
  type_weapon: string;
  picture_url: string;
  caliber: string;
  created_at: string;
  updated_at: string;
  manufacturer: string;
  category_id: number;
}

interface WeaponsCardProps {
  weapon: WeaponProps;
}
