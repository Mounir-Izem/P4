interface WeaponsDataTypes {
  weapons: Weapon[];
}

interface WeaponProps {
  id: number;
  name: string;
  manufacturer_name: number;
  type_weapon: string;
  picture_url: string;
  caliber: string;
  created_at: string;
  updated_at: string;
  manufacturer: string;
  category_name: number;
}

interface WeaponsCardProps {
  weapon: WeaponProps;
}
