CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE manufacturer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    pays VARCHAR(100) NOT NULL
);

CREATE TABLE weapons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    calibre VARCHAR(50),
    poids DECIMAL(5,2),
    longueur DECIMAL(5,2),
    categorie_id INT,
    fabricant_id INT,
    date_de_fabrication YEAR,
    CONSTRAINT fk_categorie FOREIGN KEY (categorie_id) REFERENCES categories(id),
    CONSTRAINT fk_fabricant FOREIGN KEY (fabricant_id) REFERENCES fabricants(id)
);

INSERT INTO categories (nom, description)
VALUES 
('Armes à feu', 'Armes qui utilisent de la poudre pour projeter un projectile'),
('Armes blanches', 'Armes tranchantes ou contondantes, généralement sans mécanisme de tir');

INSERT INTO manufacturer (nom, pays)
VALUES 
('Colt', 'USA'),
('Beretta', 'Italie'),
('Heckler & Koch', 'Allemagne');

INSERT INTO weapons (nom, description, calibre, poids, longueur, categorie_id, fabricant_id, date_de_fabrication)
VALUES 
('M16', 'Fusil d’assaut américain, utilisé principalement par l’armée', '5.56 mm', 3.5, 100, 1, 1, 1964),
('AK-47', 'Fusil d’assaut soviétique, largement utilisé dans le monde', '7.62 mm', 4.3, 87, 1, 2, 1947),
('Katana', 'Épée japonaise traditionnelle, réputée pour sa lame courbée', NULL, 1.2, 100, 2, NULL, 1600);