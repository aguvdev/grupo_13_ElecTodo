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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_product_id_idx` (`product_id`),
  CONSTRAINT `FK_id_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (11,'samsung_G_A32_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',1),(12,'samsung_G_A32_03.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',1),(13,'samsung_G_A32_03.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',11),(14,'samsung_G_A32_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',11),(15,'samsung_G_A52.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',12),(16,'Moto_G30_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',13),(17,'Moto_G30_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',13),(18,'Moto_E7_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',14),(19,'Moto_E7_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',14),(22,'LG_K22_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',16),(23,'LG_K22_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',16),(24,'Auriculares_in-ear_inalámbricos_QCY_T1C_negro_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',17),(25,'Auriculares_in-ear_inalámbricos_QCY_T1C_negro_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',17),(26,'Auriculares_gamer_HyperX_Cloud_Alpha_S_blue_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',18),(27,'Auriculares_gamer_HyperX_Cloud_Alpha_S_blue_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',18),(28,'Auriculares_gamer_Redragon_Ares_negro_y_rojo_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',19),(29,'Auriculares_gamer_Redragon_Ares_negro_y_rojo_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',19),(30,'Auriculares_gamer_Onikuma_K5_camo_con_luz_LED_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',20),(31,'Auriculares_gamer_Onikuma_K5_camo_con_luz_LED_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',20),(32,'Tablet_Samsung_Galaxy_Tab_A7_SM-T500_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',21),(33,'Tablet_Lenovo_Tab_M10_TB-X505F_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',22),(34,'Tablet_Lenovo_Tab_M10_TB-X505F_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',22),(35,'Tablet_Pcbox_PCB-T732_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',23),(36,'Tablet_Pcbox_PCB-T732_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',23),(37,'TV_Rca_42_Android_And42_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',24),(38,'TV_Rca_42_Android_And42_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',24),(39,'TV_portátil_Philips_5500_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',25),(40,'TV_portátil_Philips_5500_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',25),(41,'SMART_Tv_Bgh_50_4k_Uhd_Android_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',26),(42,'SMART_Tv_Bgh_50_4k_Uhd_Android_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',26),(43,'SMART_TV_Noblex_DM43X7100_LED_Full_HD_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',27),(44,'SMART_TV_Noblex_DM43X7100_LED_Full_HD_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',27),(45,'SMART_TV_Jvc_Lt43da5125_Led_Full_Hd_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',28),(46,'AMAZON_Echo_Dot_4th_Gen_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',29),(47,'AMAZON_Echo_Dot_4th_Gen_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',29),(48,'AMAZON_Echo_Dot_3rd_Gen_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',30),(49,'Mackie_Cr3_Monitores_Activos_P_Home_Studio_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',31),(50,'Mackie_Cr3_Monitores_Activos_P_Home_Studio_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',31),(51,'M-audio_Bx5d3_Monitor_De_Estudio_5_Par_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',33),(52,'M-audio_Bx5d3_Monitor_De_Estudio_5_Par_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',33),(53,'Parlante_JBL_Flip_5_portátil-bluetooth_red_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',33),(54,'Parlante_JBL_Flip_5_portátil-bluetooth_red_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',33),(55,'Parlante_Novik_Neo_Evo_300A_USB-bluetooth_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',34),(56,'Parlante_Novik_Neo_Evo_300A_USB-bluetooth_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',34),(57,'Parlante_Noblex_MNT670_con_bluetooth_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',35),(58,'Parlante_Noblex_MNT670_con_bluetooth_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',35),(59,'Parlante_JBL_Go_3_portatil_con_bluetooth_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',36),(60,'Parlante_JBL_Go_3_portatil_con_bluetooth_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',36),(61,'Disco_solido_interno_Kingston_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',37),(62,'Disco_solido_interno_Kingston_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',37),(63,'Disco_duro_interno_Seagate_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',38),(64,'Disco_duro_interno_Seagate_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',38),(65,'Tarjeta_de_memoria_SanDisk_SDSQUNS-128G_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',39),(66,'Tarjeta_de_memoria_SanDisk_SDSQUNS-128G_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',39),(67,'Tarjeta_de_memoria_SanDisk_Extreme_Pro_64GB_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',40),(68,'Tarjeta_de_memoria_SanDisk_Extreme_Pro_64GB_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',40),(69,'Tintas_Originales_Epson_544_Botella_65ml_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',41),(70,'Gabinete_Pc_Gamer_Cooler_Fan_Atx_Glass_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',42),(71,'Notebook_Intel_Cloudbook_4gb_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',43),(72,'Notebook_Intel_Cloudbook_4gb_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',43),(73,'Apple_Macbook_Air_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',44),(74,'Apple_Macbook_Air_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',44),(75,'Notebook_Bangho_MAX_L4_i1_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',45),(76,'Notebook_Bangho_MAX_L4_i1_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',45),(77,'All_In_One_Hp_22-dd0018la_Amd_Ryzen_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',46),(78,'All_In_One_Hp_22-dd0018la_Amd_Ryzen_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',46),(79,'All_In_One_Gamer_Hp_22_Amd_Ryzen_3_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',47),(80,'All_In_One_Gamer_Hp_22_Amd_Ryzen_3_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',47),(81,'Pc_All_In_One_Aio_Lenovo_Amd_A3020_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',48),(82,'Pc_All_In_One_Aio_Lenovo_Amd_A3020_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',48),(83,'Impresora_simple_función_HP_LaserJet_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',49),(84,'Impresora_simple_función_HP_LaserJet_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',49),(85,'Brother_HL1212W_Impresora_Laser_Wi-Fi_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',50),(86,'Brother_HL1212W_Impresora_Laser_Wi-Fi_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',50),(87,'Impresora_simple_funcion_Brother_HL-L2360DW_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',51),(88,'Impresora_simple_funcion_Brother_HL-L2360DW_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',51),(89,'Nintendo_Switch_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',52),(90,'Nintendo_Switch_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',52),(91,'The_Legend_of_Zelda_BOTW_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',53),(92,'The_Legend_of_Zelda_BOTW_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',53),(93,'Sony_PlayStation_5_825GB_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',54),(94,'Sony_PlayStation_5_825GB_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',54),(95,'NBA_2K21_Standard_Edition_2K_PS5_Fisico_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',55),(96,'NBA_2K21_Standard_Edition_2K_PS5_Fisico_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',55),(97,'Microsoft_Xbox_Series_S_512GB_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',56),(98,'Microsoft_Xbox_Series_S_512GB_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',56),(99,'Microsoft_Xbox_Series_X_1TB_Standard_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',57),(100,'Microsoft_Xbox_Series_X_1TB_Standard_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',57),(101,'Canon_EOS_Rebel_Kit_T7_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',58),(102,'Canon_EOS_Rebel_Kit_T7_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',58),(103,'Nikon_Kit_D5600_18-55mm_VR_DSLR_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',59),(104,'Nikon_Kit_D5600_18-55mm_VR_DSLR_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',59),(105,'Camara_deportiva_VStarcam_S2DR_4K_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',60),(106,'Camara_deportiva_VStarcam_S2DR_4K_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',60),(107,'Video_Camara_Filmadora_Digital_Hd_1080p_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',61),(108,'Video_Camara_Filmadora_Digital_Hd_1080p_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',61),(109,'SMART_TV_Noblex_DM43X7100_LED_Full_HD_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',2),(110,'SMART_TV_Noblex_DM43X7100_LED_Full_HD_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',2),(111,'Auriculares_gamer_HyperX_Cloud_Alpha_S_blue_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',3),(112,'Auriculares_gamer_HyperX_Cloud_Alpha_S_blue_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',3),(113,'teclado_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',4),(114,'teclado_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',4),(115,'Moto_E7_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',5),(116,'Moto_E7_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',5),(117,'air_pods_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',6),(118,'air_pods_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',6),(119,'Funda_Samsung_A21_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',7),(120,'Parlante_JBL_Flip_5_portátil-bluetooth_red_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',8),(121,'Parlante_JBL_Flip_5_portátil-bluetooth_red_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',8),(122,'Tablet_Samsung_Galaxy_Tab_A7_SM-T500_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',9),(123,'Tablet_Samsung_Galaxy_Tab_A7_SM-T500_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',9),(124,'Video_Camara_Filmadora_Digital_Hd_1080p_01.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',10),(125,'Video_Camara_Filmadora_Digital_Hd_1080p_02.webp','2021-10-01 00:00:00','2021-10-01 00:00:00',10),(145,'images-1635872089303.webp','2021-11-02 16:54:49','2021-11-02 16:54:49',67),(146,'images-1635872089306.webp','2021-11-02 16:54:49','2021-11-02 16:54:49',67),(147,'images-1635872089306.webp','2021-11-02 16:54:49','2021-11-02 16:54:49',67),(148,'images-1635872089307.webp','2021-11-02 16:54:49','2021-11-02 16:54:49',67),(149,'images-1635872211038.webp','2021-11-02 16:56:51','2021-11-02 16:56:51',68),(150,'images-1635872211039.webp','2021-11-02 16:56:51','2021-11-02 16:56:51',68),(151,'images-1635872211039.webp','2021-11-02 16:56:51','2021-11-02 16:56:51',68),(152,'images-1635872211040.webp','2021-11-02 16:56:51','2021-11-02 16:56:51',68),(153,'images-1635872211040.webp','2021-11-02 16:56:51','2021-11-02 16:56:51',68),(154,'images-1635872266947.webp','2021-11-02 16:57:46','2021-11-02 16:57:46',69),(155,'images-1635872266948.webp','2021-11-02 16:57:46','2021-11-02 16:57:46',69),(156,'images-1635872266948.jpg','2021-11-02 16:57:46','2021-11-02 16:57:46',69),(157,'images-1635872266950.png','2021-11-02 16:57:46','2021-11-02 16:57:46',69),(158,'images-1635872310072.jpg','2021-11-02 16:58:30','2021-11-02 16:58:30',70),(159,'images-1635872310073.jpg','2021-11-02 16:58:30','2021-11-02 16:58:30',70),(160,'images-1635872310074.jpg','2021-11-02 16:58:30','2021-11-02 16:58:30',70);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
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
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `category_id` int NOT NULL,
  `sub_category_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_category_id_idx` (`category_id`),
  KEY `FK_sub_category_id_idx` (`sub_category_id`),
  KEY `FK_brand_id_idx` (`brand_id`),
  CONSTRAINT `FK_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `FK_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_sub_category_id` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Celular Samsung','Celular Samsung',31,1,1,'2021-10-11 00:00:00','2021-10-11 00:00:00',1,1,1),(2,'Smart Tv','Smart Tv',9,55,6,'2021-04-05 00:00:00','2021-05-26 00:00:00',6,1,1),(3,'Auriculares','Auriculares',1192,44,35836,'2021-06-18 00:00:00','2020-12-11 00:00:00',3,19,1),(4,'Teclado','Teclado',13,92,3,'2021-06-09 00:00:00','2020-09-29 00:00:00',9,8,1),(5,'Celular Motorola','Celular Motorola',414,72,40817,'2021-06-23 00:00:00','2021-06-17 00:00:00',2,15,1),(6,'Air pods','Air pods',7759,18,35,'2021-07-24 00:00:00','2021-07-20 00:00:00',7,19,1),(7,'Funda Samsung A21','Funda Samsung A21',18051,2,47495,'2021-02-15 00:00:00','2021-07-22 00:00:00',8,1,1),(8,'Parlante bluetooth','Parlante bluetooth',239,45,94352,'2021-07-11 00:00:00','2021-01-27 00:00:00',7,5,1),(9,'Tablet Samsung','Tablet Samsung',93412,86,2581,'2021-03-02 00:00:00','2021-04-20 00:00:00',2,16,1),(10,'Cámara digital','Cámara digital',75,49,36,'2021-09-10 00:00:00','2021-04-05 00:00:00',11,17,1),(11,'Samsung Galaxy A32','Experiencia visual increíble. Mirá tus series y películas.',38,NULL,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,15,1),(12,'Samsung Galaxy A52','Experiencia visual increíble. Mirá tus series y películas.',58,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,15,1),(13,'Moto G30 128','Mayor rendimiento. Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.',36,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,15,1),(14,'Moto E7','El Motorola E7 posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro,\n navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.',21999,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,15,1),(16,'LG K22','El LG K22 posee el novedoso sistema operativo Android 10 que incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Entre sus diversas funcionalidades encontrarás el tema oscuro, navegación por gestos y modo sin distracciones, para que completes tus tareas mientras disfrutás al máximo tu dispositivo.',19999,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,15,1),(17,'Auriculares in-ear inalámbricos QCY T1C negro','En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares QCY y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.',1740,5,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',3,19,1),(18,'Auriculares gamer HyperX Cloud Alpha S blue','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Cloud Alpha S\n no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',13523,5,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',3,19,1),(19,'Auriculares gamer Redragon Ares negro y rojo','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Ares no te perdés ningún detalle y\n escuchás el audio tal y como fue diseñado por los creadores.',2049,5,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',3,19,1),(20,'Auriculares gamer Onikuma K5 camo con luz LED','¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida.\n Con los Onikuma K5 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',3160,5,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',3,19,1),(21,'Tablet Samsung Galaxy Tab A7 SM-T500','Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano,\n lo convierte en una combinación perfecta de rendimiento y versatilidad.',37999,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,16,1),(22,'Tablet Lenovo Tab M10 TB-X505F','Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado,\n compacto y portátil es la combinación perfecta de rendimiento y versatilidad.',18699,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,16,1),(23,'Tablet Pcbox PCB-T732','Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, \ncompacto y portátil es la combinación perfecta de rendimiento y versatilidad.',8071,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',2,16,1),(24,'TV Rca 42 Android And42','El Android TV permite desde reproducir contenidos de YouTube, Netflix, Spotify, consultar noticias, clima, agenda,\n correo, descargar cualquier app por el Play store y navegar en internet de forma veloz.',38999,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',6,2,1),(25,'TV portátil Philips 5500','Práctico y de tan solo 24 \", te va a permitir disfrutar de tus contenidos favoritos en donde sea que estés. Llevalo en un viaje,\n a tus vacaciones, cuando vayas de campamento y se juegue la final de la copa, ¡todo es posible!',21999,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',6,2,1),(26,'SMART Tv Bgh 50 4k Uhd Android','Disfrutá 4K UHD. \nEl Smart TV 50 pulgadas BGH B5021UH6 cuenta con una pantalla \nde visualización LED de formato widescreen (16:9) y resolución 4K UHD que brinda una gran calidad de imagen y contraste.',59999,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',6,1,1),(27,'SMART TV Noblex DM43X7100 LED Full HD','Noblex lleva más de 70 años creando bienestar en los hogares argentinos, lo que la convierte en una de las marcas con mayor historia y trayectoria del país. Ofrece una amplia gama de productos comprometidos con la calidad y la innovación tecnológica.\nCon el Smart TV DM43X7100 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',41163,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',6,1,1),(28,'SMART TV Jvc Lt43da5125 Led Full Hd','El Smart TV 43\" JVC LT43DA5125 cuenta con una pantalla de visualización LED con una resolución Full HD (1920 x 1080 píxeles) que brinda una gran calidad de imagen y contraste. \nCuenta con sistema Operativo propio de la marca.',39999,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',6,1,1),(29,'AMAZON Echo Dot 4th Gen','Sumate al mundo de la inteligencia artificial con el Amazon Echo Dot 4th Gen que ofrece soluciones para automatizar algunas tareas en tu hogar.',9299,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,3,1),(30,'AMAZON Echo Dot 3rd Gen','Sumate al mundo de la inteligencia artificial con el Amazon Echo Dot 4th Gen que ofrece soluciones para automatizar algunas tareas en tu hogar.',7699,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,3,1),(31,'Mackie Cr3 Monitores Activos P/ Home Studio','MACKIE CR3X MONITORES ACTIVOS P/ HOME STUDIO 50 WATTS (PAR)',29396,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,4,1),(32,'M-audio Bx5d3 Monitor De Estudio 5 Par','M-audio Bx5d3 Monitor De Estudio 5 Par 2 Vias 100w Ii',65396,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,4,1),(33,'Parlante JBL Flip 5 portátil/bluetooth red','Con el parlante JBL Flip 5, sentirás y disfrutarás la música donde vos quieras. Tiene un formato pequeño y liviano para que lo lleves a todos lados y ofrece graves resonantes con el fin de que suene bien.',18390,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,5,1),(34,'Parlante Novik Neo Evo 300A USB/bluetooth','Novik Neo Evo 300A USB ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. \nUn parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',36195,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,5,1),(35,'Parlante Noblex MNT670 con bluetooth','Noblex MNT670 ofrece un sonido natural, con una gran claridad y precisión, \nque se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',29599,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,5,1),(36,'Parlante JBL Go 3 portátil con bluetooth','JBL Go Go 3 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. \nUn parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',6949,15,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',7,5,1),(37,'Disco sólido interno Kingston','Disco sólido interno Kingston SA400S37/240G 240GB. \nConsiderado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional.',4949,9,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',8,6,1),(38,'Disco duro interno Seagate','Disco duro interno Seagate Barracuda ST1000DM010 1TB. Versátiles y fiables, las feroces y nuevas unidades BarraCuda de Seagate se inspiran en el pasado pero están listas para el futuro. Las unidades BarraCuda son una forma económica de manejar todas sus necesidades de PC: trabajo, juego, almacenamiento de películas y música, y más.',5490,9,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',8,6,1),(39,'Tarjeta de memoria SanDisk','Tarjeta de memoria SanDisk SDSQUNS-128G-GN6TA Ultra con adaptador SD 128GB',2350,9,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',8,6,1),(40,'Tarjeta de memoria SanDisk','Tarjeta de memoria SanDisk SDSQXCY-064G-GN6MA Extreme Pro 64GB',2870,9,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',8,6,1),(41,'Tintas Originales Epson','Tintas Originales Epson 544 Botella 65ml Originales Pc',1299,25,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',8,7,1),(42,'Gabinete Pc Gamer Cooler','Gabinete Pc Gamer Cooler Fan Atx Glass Templado Luz Led Argb',7549,25,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',8,8,1),(43,'Notebook Intel Cloudbook 4gb','Notebook Intel Cloudbook 4gb 64gb Enova Windows. La Notebook Intel Cloudbook 4GB Enova te permite almacenar diferentes archivos y aplicaciones gracias a los 64GB de almacenamiento que posee en la nube (SSD). Una notebook con tecnologías comprobadas para el hogar o la oficina.',41659,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,9,1),(44,'Apple Macbook Air','Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Plata. La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.',174277,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,9,1),(45,'Notebook Banghó MAX L4 i1','otebook Banghó MAX L4 i1 gris oscura 14\", Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home',57490,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,9,1),(46,'All In One Hp 22-dd0018la Amd Ryzen','All In One Hp 22-dd0018la Amd Ryzen 3 4gb 1tb Hdd 21.5 Win10',119990,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,10,1),(47,'All In One Gamer Hp 22 Amd Ryzen 3','All In One Gamer Hp 22 Amd Ryzen 3 16gb 500 Ssd Fhd 22 Win10',103990,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,10,1),(48,'Pc All In One Aio Lenovo Amd A3020','Pc All In One Aio Lenovo Amd A3020 22 4gb 1tb Win10 Mexx 1',55999,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,10,1),(49,'Impresora simple función HP LaserJet','Impresora simple función HP LaserJet 107a blanca y negra 220V - 240V',18299,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,11,1),(50,'Brother HL1212W Impresora Láser Wi-Fi','Brother HL1212W Impresora Láser Wi-Fi color Negro/Blanco 220V',22054,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,11,1),(51,'Impresora simple función Brother HL-L2360DW','Impresora simple función Brother HL-L2360DW con wifi negra 220V - 240V',28899,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',9,11,1),(52,'Nintendo Switch','Nintendo Switch 32GB Standard color rojo neón, azul neón y negro',68599,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',10,12,1),(53,'The Legend of Zelda: BOTW','The Legend of Zelda: Breath of the Wild Standard Edition Nintendo Switch Físico',9599,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',10,13,1),(54,'Sony PlayStation 5 825GB','Sony PlayStation 5 825GB Standard color blanco y negro',181000,NULL,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',10,12,1),(55,'NBA 2K21 Standard Edition 2K PS5 Físico','NBA 2K21 Standard Edition 2K PS5 Físico',5507,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',10,13,1),(56,'Microsoft Xbox Series S 512GB','Microsoft Xbox Series S 512GB Standard color blanco',89999,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',10,12,1),(57,'Microsoft Xbox Series X 1TB Standard','Microsoft Xbox Series X 1TB Standard color negro',194999,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',10,12,1),(58,'Canon EOS Rebel Kit T7','Canon EOS Rebel Kit T7 + lente 18-55mm IS II DSLR color negro',84999,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',11,17,1),(59,'Nikon Kit D5600 18-55mm VR DSLR','Nikon Kit D5600 18-55mm VR DSLR color negro',51484,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',11,17,1),(60,'Cámara deportiva VStarcam S2DR 4K','Cámara deportiva VStarcam S2DR 4K negra',8699,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',11,18,1),(61,'Video Cámara Filmadora Digital Hd 1080p','Video Cámara Filmadora Digital Hd 1080p Fotos 16mp Ruffo',11699,10,1000,'2021-09-26 00:00:00','2021-09-27 00:00:00',11,18,1),(67,'silla gamer nxt','Esta versión viene desarmada y lista para que puedas ensamblarla en tu hogar en tan solo 5 minutos. Incluye su completo Kit de armado con todos los componentes necesarios para su fácil ensamblaje.\r\n\r\nCaracterísticas\r\n\r\n- Material  Eco Cuero\r\n- Peso que soporta 130kg\r\n- Altura regulable por sistema oleo-neumático Si\r\n- Función giratoria 360\r\n- Estrella de PVC de alta durabilidad\r\n- Costuras reforzadas\r\n- Ruedas de alta durabilidad\r\n- Reclinable\r\n- Fácil de armar y limpiar',50000,3,2,'2021-11-02 16:54:49','2021-11-02 16:54:49',10,20,1),(68,'silla gamer rosada nxt','Esta versión viene desarmada y lista para que puedas ensamblarla en tu hogar en tan solo 5 minutos. Incluye su completo Kit de armado con todos los componentes necesarios para su fácil ensamblaje.\r\n\r\n',60000,10,4,'2021-11-02 16:56:51','2021-11-02 16:56:51',10,20,1),(69,'silla gamer preizt','Esta versión viene desarmada y lista para que puedas ensamblarla en tu hogar en tan solo 5 minutos. Incluye su completo Kit de armado con todos los componentes necesarios para su fácil ensamblaje.',80000,10,4,'2021-11-02 16:57:46','2021-11-02 16:57:46',10,20,1),(70,'silla gamer typhon','Esta versión viene desarmada y lista para que puedas ensamblarla en tu hogar en tan solo 5 minutos. Incluye su completo Kit de armado con todos los componentes necesarios para su fácil ensamblaje.',70000,3,10,'2021-11-02 16:58:30','2021-11-02 16:58:30',10,20,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_category_idx` (`category_id`),
  CONSTRAINT `FK_id_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES (1,'smart_tv',NULL),(2,'tvled',NULL),(3,'asistentes_virtuales',NULL),(4,'monitores_de_estudio',NULL),(5,'parlantes',NULL),(6,'almacenamiento',NULL),(7,'insumos',NULL),(8,'partes_pc',NULL),(9,'notebooks',NULL),(10,'all_in_one',NULL),(11,'impresoras',NULL),(12,'consolas',NULL),(13,'juegos_de_consolas',NULL),(14,'joysticks',NULL),(15,'celulares',NULL),(16,'tablet',NULL),(17,'camaras_digitales',NULL),(18,'video_camaras',NULL),(19,'auricular',NULL),(20,'silla gamer',NULL);
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
  `password` varchar(500) NOT NULL,
  `email` varchar(50) NOT NULL,
  `rol` varchar(10) NOT NULL,
  `phone` int DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `avatar` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_address_id_idx` (`address_id`),
  CONSTRAINT `FK_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'sergio','$2a$10$mqzAx.dnX7Pa0GUYDzP0GuXu/aO.XjMVdwBoTl9DsLDu0d2f/D3G6','romeosantos@gmail.com','admin',NULL,NULL,'foto-de-perfil-default.png'),(12,'sergiowin','$2a$10$FZYrQdyymV7Q2ckkC3sGn.DlvIkA4FFpVpQRQSL.PrgUNQTSeEJ7S','manolo@gmail.com','admin',NULL,NULL,'foto-de-perfil-default.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-02 14:53:12
