CREATE DATABASE  IF NOT EXISTS `electodo_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `electodo_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: electodo_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'78404 Forest Road'),(2,'940 Dakota Terrace'),(3,'42899 Kennedy Plaza'),(4,'030 Lunder Lane'),(5,'59 Crowley Crossing'),(6,'185 Tennyson Park'),(7,'2830 Tennessee Alley'),(8,'812 Pawling Park'),(9,'79 Maryland Way'),(10,'81 Tennyson Avenue');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'NAPRELAN'),(2,'Amoxicillin'),(3,'Vichy Laboratoires Normaderm'),(4,'Colgate'),(5,'Sodium Chloride'),(6,'Propranolol'),(7,'Super BB All-In-1'),(8,'Nortriptyline Hydrochloride'),(9,'Treatment Set TS332678'),(10,'H-Nail Fungus Formula');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `method_id` int NOT NULL,
  `purchase_date` date NOT NULL,
  `quantity` int NOT NULL,
  `total` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_id_idx` (`user_id`),
  KEY `FK_product_id_idx` (`product_id`),
  KEY `FK_method_id_idx` (`method_id`),
  CONSTRAINT `FK_method_id` FOREIGN KEY (`method_id`) REFERENCES `method_payment` (`id`),
  CONSTRAINT `FK_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `brand_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `KF_brand_id_idx` (`brand_id`),
  CONSTRAINT `KF_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'laptops',1),(2,'celulares_y_tablets',2),(3,'auriculares',3),(4,'tablets',4),(5,'video',5),(6,'televisores',6),(7,'audio',7),(8,'accesorios',8),(9,'informatica',9),(10,'videojuegos',1),(11,'fotografia_y_video',3);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_brands`
--

DROP TABLE IF EXISTS `categories_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `brand_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_category_idx` (`category_id`),
  KEY `FK_id_brands_idx` (`brand_id`),
  CONSTRAINT `FK_id_brands` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `FK_id_category2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_brands`
--

LOCK TABLES `categories_brands` WRITE;
/*!40000 ALTER TABLE `categories_brands` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_sub_categories`
--

DROP TABLE IF EXISTS `categories_sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_sub_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_category_id_idx` (`category_id`),
  KEY `FK_sub_category_id_idx` (`sub_category_id`),
  CONSTRAINT `FK_id_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_id_sub_category` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_sub_categories`
--

LOCK TABLES `categories_sub_categories` WRITE;
/*!40000 ALTER TABLE `categories_sub_categories` DISABLE KEYS */;
INSERT INTO `categories_sub_categories` VALUES (1,6,1),(2,6,2),(3,7,3),(4,7,4),(5,7,5),(6,8,6),(7,8,7),(8,8,8),(9,9,9),(10,9,10),(11,9,11),(12,10,12),(13,10,13),(14,10,14),(15,2,15),(16,2,16),(17,11,17),(18,11,18),(19,7,19);
/*!40000 ALTER TABLE `categories_sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `method_payment`
--

DROP TABLE IF EXISTS `method_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `method_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `method` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `method_payment`
--

LOCK TABLES `method_payment` WRITE;
/*!40000 ALTER TABLE `method_payment` DISABLE KEYS */;
INSERT INTO `method_payment` VALUES (1,'tarjeta de debito'),(2,'tarjeta de credito'),(3,'efectivo');
/*!40000 ALTER TABLE `method_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` int NOT NULL,
  `discount` int DEFAULT NULL,
  `stock` int NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `image_id` int NOT NULL,
  `category_id` int NOT NULL,
  `sub_category_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_image_id_idx` (`image_id`),
  KEY `FK_category_id_idx` (`category_id`),
  KEY `FK_sub_category_id_idx` (`sub_category_id`),
  KEY `FK_brand_id_idx` (`brand_id`),
  CONSTRAINT `FK_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `FK_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_product_image_id` FOREIGN KEY (`image_id`) REFERENCES `products_images` (`id`),
  CONSTRAINT `FK_sub_category_id` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Celular Samsung','Celular Samsung',31,8,0,'2021-08-27','2021-01-28',1,2,15,1),(2,'Smart Tv','Smart Tv',9,55,6,'2021-04-05','2021-05-26',2,2,1,1),(3,'Auriculares','Auriculares',1192,44,35836,'2021-06-18','2020-12-11',3,3,19,1),(4,'Teclado','Teclado',13,92,3,'2021-06-09','2020-09-29',4,8,8,1),(5,'Celular Motorola','Celular Motorola',414,72,40817,'2021-06-23','2021-06-17',5,2,15,1),(6,'Air pods','Air pods',7759,18,35,'2021-07-24','2021-07-20',6,3,19,1),(7,'Funda Samsung A21','Funda Samsung A21',18051,2,47495,'2021-02-15','2021-07-22',7,8,1,1),(8,'Parlante bluetooth','Parlante bluetooth',239,45,94352,'2021-07-11','2021-01-27',8,7,5,1),(9,'Tablet Samsung','Tablet Samsung',93412,86,2581,'2021-03-02','2021-04-20',9,2,16,1),(10,'Cámara digital','Cámara digital',75,49,36,'2021-09-10','2021-04-05',10,11,17,1),(11,'Samsung Galaxy A32','Experiencia visual increíble. Mirá tus series y películas.',38,NULL,1000,'2021-09-26','2021-09-27',1,2,15,1),(12,'Samsung Galaxy A52','Experiencia visual increíble. Mirá tus series y películas.',58,10,1000,'2021-09-26','2021-09-27',1,2,15,1),(13,'Moto G30 128','Mayor rendimiento. Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.',36,10,1000,'2021-09-26','2021-09-27',1,2,15,1),(14,'Moto E7','El Motorola E7 posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro,\n navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.',21999,10,1000,'2021-09-26','2021-09-27',1,2,15,1),(15,'LG K40S','El LG K40S cuenta con el sistema operativo avanzado Android 9.0 Pie que aprende tus hábitos para adaptarse a tu rutina y lograr la máxima eficiencia de tu equipo. Esta tecnología vuelve a tu dispositivo tan autónomo que podrá reducir el consumo energético, ajustar automáticamente el brillo\n y gestionar la batería de manera inteligente.',21899,10,1000,'2021-09-26','2021-09-27',1,2,15,1),(16,'LG K22','El LG K22 posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro, navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.',19999,10,1000,'2021-09-26','2021-09-27',1,2,15,1),(17,'Auriculares in-ear inalámbricos QCY T1C negro','En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares QCY y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.',1740,5,1000,'2021-09-26','2021-09-27',1,3,19,1),(18,'Auriculares gamer HyperX Cloud Alpha S blue','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Cloud Alpha S\n no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',13523,5,1000,'2021-09-26','2021-09-27',1,3,19,1),(19,'Auriculares gamer Redragon Ares negro y rojo','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Ares no te perdés ningún detalle y\n escuchás el audio tal y como fue diseñado por los creadores.',2049,5,1000,'2021-09-26','2021-09-27',1,3,19,1),(20,'Auriculares gamer Onikuma K5 camo con luz LED','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida.\n Con los Onikuma K5 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',3160,5,1000,'2021-09-26','2021-09-27',1,3,19,1),(21,'Tablet Samsung Galaxy Tab A7 SM-T500','Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano,\n lo convierte en una combinación perfecta de rendimiento y versatilidad.',37999,15,1000,'2021-09-26','2021-09-27',1,2,16,1),(22,'Tablet Lenovo Tab M10 TB-X505F','Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado,\n compacto y portátil es la combinación perfecta de rendimiento y versatilidad.',18699,15,1000,'2021-09-26','2021-09-27',1,2,16,1),(23,'Tablet Pcbox PCB-T732','Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, \ncompacto y portátil es la combinación perfecta de rendimiento y versatilidad.',8071,15,1000,'2021-09-26','2021-09-27',1,2,16,1),(24,'TV Rca 42 Android And42','El Android TV permite desde reproducir contenidos de YouTube, Netflix, Spotify, consultar noticias, clima, agenda,\n correo, descargar cualquier app por el Play store y navegar en internet de forma veloz.',38999,15,1000,'2021-09-26','2021-09-27',1,6,2,1),(25,'TV portátil Philips 5500','Práctico y de tan solo 24 \", te va a permitir disfrutar de tus contenidos favoritos en donde sea que estés. Llevalo en un viaje,\n a tus vacaciones, cuando vayas de campamento y se juegue la final de la copa, ¡todo es posible!',21999,15,1000,'2021-09-26','2021-09-27',1,6,2,1),(26,'SMART Tv Bgh 50 4k Uhd Android','Disfrutá 4K UHD. \nEl Smart TV 50 pulgadas BGH B5021UH6 cuenta con una pantalla \nde visualización LED de formato widescreen (16:9) y resolución 4K UHD que brinda una gran calidad de imagen y contraste.',59999,15,1000,'2021-09-26','2021-09-27',1,6,1,1),(27,'SMART TV Noblex DM43X7100 LED Full HD','Noblex lleva más de 70 años creando bienestar en los hogares argentinos, lo que la convierte en una de las marcas con mayor historia y trayectoria del país. Ofrece una amplia gama de productos comprometidos con la calidad y la innovación tecnológica.\nCon el Smart TV DM43X7100 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',41163,15,1000,'2021-09-26','2021-09-27',1,6,1,1),(28,'SMART TV Jvc Lt43da5125 Led Full Hd','El Smart TV 43\" JVC LT43DA5125 cuenta con una pantalla de visualización LED con una resolución Full HD (1920 x 1080 píxeles) que brinda una gran calidad de imagen y contraste. \nCuenta con sistema Operativo propio de la marca.',39999,15,1000,'2021-09-26','2021-09-27',1,6,1,1),(29,'AMAZON Echo Dot 4th Gen','Sumate al mundo de la inteligencia artificial con el Amazon Echo Dot 4th Gen que ofrece soluciones para automatizar algunas tareas en tu hogar.',9299,15,1000,'2021-09-26','2021-09-27',1,7,3,1),(30,'AMAZON Echo Dot 3rd Gen','Sumate al mundo de la inteligencia artificial con el Amazon Echo Dot 4th Gen que ofrece soluciones para automatizar algunas tareas en tu hogar.',7699,15,1000,'2021-09-26','2021-09-27',1,7,3,1),(31,'Mackie Cr3 Monitores Activos P/ Home Studio','MACKIE CR3X MONITORES ACTIVOS P/ HOME STUDIO 50 WATTS (PAR)',29396,15,1000,'2021-09-26','2021-09-27',1,7,4,1),(32,'M-audio Bx5d3 Monitor De Estudio 5 Par','M-audio Bx5d3 Monitor De Estudio 5 Par 2 Vias 100w Ii',65396,15,1000,'2021-09-26','2021-09-27',1,7,4,1),(33,'Parlante JBL Flip 5 portátil/bluetooth red','Con el parlante JBL Flip 5, sentirás y disfrutarás la música donde vos quieras. Tiene un formato pequeño y liviano para que lo lleves a todos lados y ofrece graves resonantes con el fin de que suene bien.',18390,15,1000,'2021-09-26','2021-09-27',1,7,5,1),(34,'Parlante Novik Neo Evo 300A USB/bluetooth','Novik Neo Evo 300A USB ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. \nUn parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',36195,15,1000,'2021-09-26','2021-09-27',1,7,5,1),(35,'Parlante Noblex MNT670 con bluetooth','Noblex MNT670 ofrece un sonido natural, con una gran claridad y precisión, \nque se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',29599,15,1000,'2021-09-26','2021-09-27',1,7,5,1),(36,'Parlante JBL Go 3 portátil con bluetooth','JBL Go Go 3 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. \nUn parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',6949,15,1000,'2021-09-26','2021-09-27',1,7,5,1),(37,'Disco sólido interno Kingston','Disco sólido interno Kingston SA400S37/240G 240GB. \nConsiderado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional.',4949,9,1000,'2021-09-26','2021-09-27',1,8,6,1),(38,'Disco duro interno Seagate','Disco duro interno Seagate Barracuda ST1000DM010 1TB. Versátiles y fiables, las feroces y nuevas unidades BarraCuda de Seagate se inspiran en el pasado pero están listas para el futuro. Las unidades BarraCuda son una forma económica de manejar todas sus necesidades de PC: trabajo, juego, almacenamiento de películas y música, y más.',5490,9,1000,'2021-09-26','2021-09-27',1,8,6,1),(39,'Tarjeta de memoria SanDisk','Tarjeta de memoria SanDisk SDSQUNS-128G-GN6TA Ultra con adaptador SD 128GB',2350,9,1000,'2021-09-26','2021-09-27',1,8,6,1),(40,'Tarjeta de memoria SanDisk','Tarjeta de memoria SanDisk SDSQXCY-064G-GN6MA Extreme Pro 64GB',2870,9,1000,'2021-09-26','2021-09-27',1,8,6,1),(41,'Tintas Originales Epson','Tintas Originales Epson 544 Botella 65ml Originales Pc',1299,25,1000,'2021-09-26','2021-09-27',1,8,7,1),(42,'Gabinete Pc Gamer Cooler','Gabinete Pc Gamer Cooler Fan Atx Glass Templado Luz Led Argb',7549,25,1000,'2021-09-26','2021-09-27',1,8,8,1),(43,'Notebook Intel Cloudbook 4gb','Notebook Intel Cloudbook 4gb 64gb Enova Windows. La Notebook Intel Cloudbook 4GB Enova te permite almacenar diferentes archivos y aplicaciones gracias a los 64GB de almacenamiento que posee en la nube (SSD). Una notebook con tecnologías comprobadas para el hogar o la oficina.',41659,10,1000,'2021-09-26','2021-09-27',1,9,9,1),(44,'Apple Macbook Air','Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Plata. La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.',174277,10,1000,'2021-09-26','2021-09-27',1,9,9,1),(45,'Notebook Banghó MAX L4 i1','otebook Banghó MAX L4 i1 gris oscura 14\", Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home',57490,10,1000,'2021-09-26','2021-09-27',1,9,9,1),(46,'All In One Hp 22-dd0018la Amd Ryzen','All In One Hp 22-dd0018la Amd Ryzen 3 4gb 1tb Hdd 21.5 Win10',119990,10,1000,'2021-09-26','2021-09-27',1,9,10,1),(47,'All In One Gamer Hp 22 Amd Ryzen 3','All In One Gamer Hp 22 Amd Ryzen 3 16gb 500 Ssd Fhd 22 Win10',103990,10,1000,'2021-09-26','2021-09-27',1,9,10,1),(48,'Pc All In One Aio Lenovo Amd A3020','Pc All In One Aio Lenovo Amd A3020 22 4gb 1tb Win10 Mexx 1',55999,10,1000,'2021-09-26','2021-09-27',1,9,10,1),(49,'Impresora simple función HP LaserJet','Impresora simple función HP LaserJet 107a blanca y negra 220V - 240V',18299,10,1000,'2021-09-26','2021-09-27',1,9,11,1),(50,'Brother HL1212W Impresora Láser Wi-Fi','Brother HL1212W Impresora Láser Wi-Fi color Negro/Blanco 220V',22054,10,1000,'2021-09-26','2021-09-27',1,9,11,1),(51,'Impresora simple función Brother HL-L2360DW','Impresora simple función Brother HL-L2360DW con wifi negra 220V - 240V',28899,10,1000,'2021-09-26','2021-09-27',1,9,11,1),(52,'Nintendo Switch','Nintendo Switch 32GB Standard color rojo neón, azul neón y negro',68599,10,1000,'2021-09-26','2021-09-27',1,10,12,1),(53,'The Legend of Zelda: BOTW','The Legend of Zelda: Breath of the Wild Standard Edition Nintendo Switch Físico',9599,10,1000,'2021-09-26','2021-09-27',1,10,13,1),(54,'Sony PlayStation 5 825GB','Sony PlayStation 5 825GB Standard color blanco y negro',181000,NULL,1000,'2021-09-26','2021-09-27',1,10,12,1),(55,'NBA 2K21 Standard Edition 2K PS5 Físico','NBA 2K21 Standard Edition 2K PS5 Físico',5507,10,1000,'2021-09-26','2021-09-27',1,10,13,1),(56,'Microsoft Xbox Series S 512GB','Microsoft Xbox Series S 512GB Standard color blanco',89999,10,1000,'2021-09-26','2021-09-27',1,10,12,1),(57,'Microsoft Xbox Series X 1TB Standard','Microsoft Xbox Series X 1TB Standard color negro',194999,10,1000,'2021-09-26','2021-09-27',1,10,12,1),(58,'Canon EOS Rebel Kit T7','Canon EOS Rebel Kit T7 + lente 18-55mm IS II DSLR color negro',84999,10,1000,'2021-09-26','2021-09-27',1,11,17,1),(59,'Nikon Kit D5600 18-55mm VR DSLR','Nikon Kit D5600 18-55mm VR DSLR color negro',51484,10,1000,'2021-09-26','2021-09-27',1,11,17,1),(60,'Cámara deportiva VStarcam S2DR 4K','Cámara deportiva VStarcam S2DR 4K negra',8699,10,1000,'2021-09-26','2021-09-27',1,11,18,1),(61,'Video Cámara Filmadora Digital Hd 1080p','Video Cámara Filmadora Digital Hd 1080p Fotos 16mp Ruffo',11699,10,1000,'2021-09-26','2021-09-27',1,11,18,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (1,'http://dummyimage.com/209x100.png/5fa2dd/ffffff','0000-00-00','0000-00-00'),(2,'http://dummyimage.com/231x100.png/ff4444/ffffff','0000-00-00','0000-00-00'),(3,'http://dummyimage.com/237x100.png/dddddd/000000','0000-00-00','0000-00-00'),(4,'http://dummyimage.com/112x100.png/ff4444/ffffff','0000-00-00','0000-00-00'),(5,'http://dummyimage.com/235x100.png/cc0000/ffffff','0000-00-00','0000-00-00'),(6,'http://dummyimage.com/136x100.png/dddddd/000000','0000-00-00','0000-00-00'),(7,'http://dummyimage.com/240x100.png/cc0000/ffffff','0000-00-00','0000-00-00'),(8,'http://dummyimage.com/220x100.png/5fa2dd/ffffff','0000-00-00','0000-00-00'),(9,'http://dummyimage.com/221x100.png/ff4444/ffffff','0000-00-00','0000-00-00'),(10,'http://dummyimage.com/145x100.png/ff4444/ffffff','0000-00-00','0000-00-00');
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES (1,'smart_tv'),(2,'tvled'),(3,'asistentes_virtuales'),(4,'monitores_de_estudio'),(5,'parlantes'),(6,'almacenamiento'),(7,'insumos'),(8,'partes_pc'),(9,'notebooks'),(10,'all_in_one'),(11,'impresoras'),(12,'consolas'),(13,'juegos_de_consolas'),(14,'joysticks'),(15,'celulares'),(16,'tablet'),(17,'camaras_digitales'),(18,'video_camaras'),(19,'auricular');
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` char(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `image_id` int NOT NULL,
  `rol_id` int NOT NULL,
  `phone` int NOT NULL,
  `address_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_image_id_idx` (`image_id`),
  KEY `FK_rol_id_idx` (`rol_id`),
  KEY `FK_address_id_idx` (`address_id`),
  CONSTRAINT `FK_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FK_image_id` FOREIGN KEY (`image_id`) REFERENCES `users_images` (`id`),
  CONSTRAINT `FK_rol_id` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rowe Poundsford','voLrVHAS','rpoundsford0@de.vu',1,1,-5251,1),(2,'Christoph Frisch','ebhopBwNzt','cfrisch1@usda.gov',2,1,-5172,2),(3,'Bob Carcass','IMeKKfDXjMK','bcarcass2@hugedomains.com',3,1,-7096,3),(4,'Karlene Boar','h5btNnGVnVnF','kboar3@wufoo.com',4,1,-6843,4),(5,'Lothario Pound','IsMVRqT4LFSV','lpound4@umich.edu',5,1,-9455,5),(6,'Kathrine Bullers','pPw59v6','kbullers5@hubpages.com',6,1,-969,6),(7,'Wyndham Shewon','q240xQ','wshewon6@addthis.com',7,1,-7879,7),(8,'Maurie Salt','IIt1ZzsQCUcM','msalt7@sbwire.com',8,1,-2402,8),(9,'Jordan Reford','39qanQmcf','jreford8@phpbb.com',9,1,-9091,9),(10,'Morey Broadfoot','2CSx8KNVA','mbroadfoot9@w3.org',10,2,-2184,10);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_images`
--

DROP TABLE IF EXISTS `users_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_images`
--

LOCK TABLES `users_images` WRITE;
/*!40000 ALTER TABLE `users_images` DISABLE KEYS */;
INSERT INTO `users_images` VALUES (1,'http://dummyimage.com/224x100.png/cc0000/ffffff','0000-00-00','0000-00-00'),(2,'http://dummyimage.com/247x100.png/ff4444/ffffff','0000-00-00','0000-00-00'),(3,'http://dummyimage.com/147x100.png/5fa2dd/ffffff','0000-00-00','0000-00-00'),(4,'http://dummyimage.com/116x100.png/cc0000/ffffff','0000-00-00','0000-00-00'),(5,'http://dummyimage.com/212x100.png/ff4444/ffffff','0000-00-00','0000-00-00'),(6,'http://dummyimage.com/176x100.png/5fa2dd/ffffff','0000-00-00','0000-00-00'),(7,'http://dummyimage.com/144x100.png/dddddd/000000','0000-00-00','0000-00-00'),(8,'http://dummyimage.com/141x100.png/5fa2dd/ffffff','0000-00-00','0000-00-00'),(9,'http://dummyimage.com/125x100.png/ff4444/ffffff','0000-00-00','0000-00-00'),(10,'http://dummyimage.com/129x100.png/5fa2dd/ffffff','0000-00-00','0000-00-00');
/*!40000 ALTER TABLE `users_images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-29  1:03:59
