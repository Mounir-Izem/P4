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
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT fk_manufacturer FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id)
);

INSERT INTO categories (name, description)
VALUES 
('Armes à feu', 'Armes qui utilisent de la poudre pour projeter un projectile'),
('Armes blanches', 'Armes tranchantes ou contondantes, généralement sans mécanisme de tir');

INSERT INTO manufacturer (name, country)
VALUES 
('Colt', 'USA'),
('Beretta', 'Italie'),
('Heckler & Koch', 'Allemagne'),
('Kalashnikov', 'URSS'),
('Glock', 'Autriche'),
('Amakuni', "Japon");

INSERT INTO weapons (name, description, caliber, weight, length, category_id, manufacturer_id, date_of_manufacture, type_weapon)
VALUES 
('M16', 'Fusil d’assaut américain, utilisé principalement par l’armée', '5.56 mm', 3.5, 100, 1, 1, 1964, "Rifle"),
('AK-47', 'Fusil d’assaut soviétique, largement utilisé dans le monde', '7.62 mm', 4.3, 87, 1, 4, 1947, "Rifle"),
('Glock 17', 'Le Glock 17 est un pistolet semi-automatique conçu et fabriqué pour les forces militaires et les services de police', '9 × 19 mm Parabellum', 0.905, 18.6, 1, 5, 1980, 'handgun'),
('Katana', 'Épée japonaise traditionnelle, réputée pour sa lame courbée', NULL, 1.2, 80, 2, 6, 800, "Saber");