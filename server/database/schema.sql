-- Active: 1740047371237@@127.0.0.1@3306@gun_store
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE manufacturer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL
);

CREATE TABLE weapons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    type_weapon VARCHAR(50),
    caliber VARCHAR(50),
    weight DECIMAL(5,2),
    length DECIMAL(5,2),
    category_id INT,
    manufacturer_id INT,
    date_of_manufacture INT,
    picture_url VARCHAR(255),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT fk_manufacturer FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id)
);

INSERT INTO categories (name, description)
VALUES 
('Armes à feu', 'Armes qui utilisent de la poudre pour projeter un projectile'),
('Armes blanches', 'Armes tranchantes ou contondantes, généralement sans mécanisme de tir'),
('Explosifs', 'Projectiles, objet destiné à exploser pour de gros dégats de zones');

INSERT INTO manufacturer (name, country)
VALUES 
('Colt', 'USA'),
('Beretta', 'Italie'),
('Heckler & Koch', 'Allemagne'),
('Kalashnikov', 'URSS'),
('Glock', 'Autriche'),
('Amakuni', "Japon"),
('JAAP', 'USA'),
('IMI', 'Israël'),
('FN Herstal', 'Belgique'),
('Smith & Wesson', 'USA'),
('Remington', 'USA'),
('Springfield Armory', 'USA'),
('Taurus', 'Brésil'),
('Walther', 'Allemagne'),
('Browning', 'Belgique'),
('SIG Sauer', 'Suisse');


INSERT INTO weapons (name, description, caliber, weight, length, category_id, manufacturer_id, date_of_manufacture, type_weapon, picture_url)
VALUES 
('M16', 'Fusil d’assaut américain, utilisé principalement par l’armée', '5.56 mm', 3.5, 100, 1, 1, 1964, "Rifle", "/images/M16.jpg"),
('AK-47', 'Fusil d’assaut soviétique, largement utilisé dans le monde', '7.62 mm', 4.3, 87, 1, 4, 1947, "Rifle", "/images/Ak-47.jpg"),
('Glock 17', 'Le Glock 17 est un pistolet semi-automatique conçu et fabriqué pour les forces militaires et les services de police', '9 × 19 mm Parabellum', 0.905, 18.6, 1, 5, 1980, 'handgun', "/images/Glock17.jpg"),
('Katana', 'Épée japonaise traditionnelle, réputée pour sa lame courbée', NULL, 1.2, 80, 2, 6, 800, "Saber", "/images/katana.jpg"),
('Grenade M67', 'La grenade M67 est une grenade à main défensive à fragmentation, utilisée par les Forces armées des États-Unis', NULL, 0.397, 0.9, 3, 7, 1968, 'Grenade', '/images/GrenadeM67.jpg'),
('Desert Eagle', 'Pistolet semi-automatique de gros calibre, célèbre pour sa puissance', '0.50 AE', 1.99, 27, 1, 8, 1983, 'Handgun', '/images/DesertEagle.png'),
('MP5', 'Pistolet-mitrailleur compact, utilisé par les forces spéciales', '9 mm', 2.54, 68, 1, 3, 1966, 'SMG', '/images/MP5.jpg'),
('Barrett M82', 'Fusil de précision anti-matériel, utilisé pour des cibles à longue distance', '12.7×99mm NATO', 14, 144.8, 1, 7, 1982, 'Sniper', '/images/BarrettM82.png'),
('Uzi', 'Pistolet-mitrailleur israélien compact et fiable', '9 mm', 3.5, 47, 1, 8, 1950, 'SMG', '/images/Uzi.png'),
('Claymore', 'Mine antipersonnel utilisée pour des défenses statiques', NULL, 1.6, 22, 3, 7, 1960, 'Mine', '/images/Claymore.jpg'),
('Naginata', 'Arme d’hast japonaise traditionnelle, utilisée par les samouraïs', NULL, 2.5, 225, 2, 6, 1100, 'Polearm', '/images/Naginata.jpg'),
('Winchester Model 1873', 'Fusil à levier emblématique de l’Ouest américain', '44-40 Winchester', 4.3, 125, 1, 1, 1873, 'Rifle', '/images/Winchester1873.jpg'),
('Machette', 'Outil et arme polyvalente, utilisée dans les jungles et les combats rapprochés', NULL, 1.2, 60, 2, 7, 1800, 'Blade', '/images/Machete.jpg'),
('RPG-7', 'Lance-roquettes portable, utilisé pour détruire des véhicules blindés', NULL, 7, 95, 3, 4, 1961, 'Launcher', '/images/RPG7.jpg'),
('Thompson M1928', 'Pistolet-mitrailleur américain, célèbre pendant la Prohibition', '45 ACP', 4.9, 81, 1, 1, 1928, 'SMG', '/images/ThompsonM1928.jpg'),
('Beretta 92FS', 'Pistolet semi-automatique utilisé par de nombreuses forces armées et de police dans le monde', '9×19mm Parabellum', 0.95, 21.7, 1, 2, 1975, 'Handgun', '/images/Beretta92FS.jpg'),
('Beretta M9', 'Version militaire du Beretta 92FS, standard des forces armées américaines', '9×19mm Parabellum', 0.95, 21.7, 1, 2, 1985, 'Handgun', '/images/BerettaM9.jpg'),
('Beretta CX4 Storm', 'Carabine semi-automatique compacte et polyvalente', '9×19mm Parabellum', 2.57, 75, 1, 2, 2003, 'Carbine', '/images/BerettaCX4Storm.jpg'),
('Beretta ARX160', 'Fusil d’assaut modulaire utilisé par les forces armées italiennes', '5.56×45mm NATO', 3, 84, 1, 2, 2008, 'Rifle', '/images/BerettaARX160.png'),
('Beretta 1301 Tactical', 'Fusil à pompe semi-automatique conçu pour les forces de l’ordre et la défense personnelle', 'Shotgun', 3.1, 96, 1, 2, 2012, 'Shotgun', '/images/Beretta1301Tactical.jpg'),
('Colt M1911', 'Pistolet semi-automatique emblématique utilisé pendant les deux guerres mondiales', '45 ACP', 1.1, 21.6, 1, 1, 1911, 'Handgun', '/images/ColtM1911.jpg'),
('Colt Python', 'Revolver de haute qualité, célèbre pour sa précision et sa finition', '357 Magnum', 1.2, 27.9, 1, 1, 1955, 'Revolver', '/images/ColtPython.jpg'),
('Colt Single Action Army', 'Revolver emblématique de l’Ouest américain, surnommé "Peacemaker"', '45 Colt', 1.0, 27.3, 1, 1, 1873, 'Revolver', '/images/ColtSAA.jpg'),
('Colt AR-15', 'Fusil semi-automatique basé sur le M16, populaire parmi les civils', '5.56×45mm NATO', 3.0, 100, 1, 1, 1963, 'Rifle', '/images/ColtAR15.jpg'),
('Colt Anaconda', 'Revolver de gros calibre conçu pour la chasse et le tir sportif', '44 Magnum', 1.4, 30.5, 1, 1, 1990, 'Revolver', '/images/ColtAnaconda.jpg'),
('SIG P226', 'Pistolet semi-automatique utilisé par les forces de l’ordre et les militaires du monde entier', '9×19mm Parabellum', 0.964, 19.6, 1, 16, 1984, 'Handgun', '/images/SIGP226.jpg'),
('SIG P320', 'Pistolet modulaire adopté par l’armée américaine sous le nom de M17/M18', '9×19mm Parabellum', 0.833, 20.3, 1, 16, 2014, 'Handgun', '/images/SIGP320.jpg'),
('SIG MPX', 'Pistolet-mitrailleur moderne et modulaire conçu pour les forces spéciales', '9×19mm Parabellum', 2.7, 60, 1, 16, 2013, 'SMG', '/images/SIGMPX.jpg'),
('SIG MCX', 'Fusil d’assaut modulaire conçu pour les opérations spéciales', '5.56×45mm NATO', 3.1, 84, 1, 16, 2015, 'Rifle', '/images/SIGMCX.jpg'),
('SIG SG 550', 'Fusil d’assaut standard de l’armée suisse, réputé pour sa précision', '5.56×45mm NATO', 4.1, 100, 1, 16, 1986, 'Rifle', '/images/SIGSG550.jpg');