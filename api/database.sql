-- MySQL dump 10.13  Distrib 8.0.43, for Linux (x86_64)
--
-- Host: localhost    Database: novaplay
-- ------------------------------------------------------
-- Server version	8.0.45-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `np_admin`
--

DROP TABLE IF EXISTS `np_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT 'bcrypt 加密密码',
  `last_login` int unsigned DEFAULT NULL COMMENT '最后登录时间戳',
  `created_at` int unsigned NOT NULL DEFAULT '0',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='管理员账号';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_admin`
--

LOCK TABLES `np_admin` WRITE;
/*!40000 ALTER TABLE `np_admin` DISABLE KEYS */;
INSERT INTO `np_admin` VALUES (1,'admin','$2y$10$ugOvccO2xmq/0vijFqFWUOkyHWgspRx.XJ9mQIljjRM0Ughm4haI2',1772351668,1772349467,1772349467);
/*!40000 ALTER TABLE `np_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_custom_service`
--

DROP TABLE IF EXISTS `np_custom_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_custom_service` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(50) NOT NULL COMMENT 'Lucide 图标名',
  `title` varchar(100) NOT NULL COMMENT '服务标题',
  `description` text COMMENT '服务描述',
  `sort_order` int NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='自定义开发服务';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_custom_service`
--

LOCK TABLES `np_custom_service` WRITE;
/*!40000 ALTER TABLE `np_custom_service` DISABLE KEYS */;
INSERT INTO `np_custom_service` VALUES (1,'palette','UI/UX Design','Immersive visual design and intuitive user interfaces that maximize player engagement and session length.',1,1,1772351528),(2,'server','Platform Architecture','Scalable backend systems designed for high concurrency, low latency, and enterprise-grade reliability.',2,1,1772351528),(3,'gamepad-2','Game Engine Dev','Custom slot and table game engines with unique mechanics, bonus features, and RTP configurations.',3,1,1772351528),(4,'plug','API & Integration','Seamless integration with third-party game providers, affiliate systems, CRM platforms, and analytics tools.',4,1,1772351528),(5,'credit-card','Payment Integration','Multi-currency payment gateways including crypto, e-wallets, and local payment methods across all target markets.',5,1,1772351528),(6,'shield-check','Compliance & Security','Built-in fraud detection, responsible gaming tools, and compliance frameworks for regulated markets.',6,1,1772351528);
/*!40000 ALTER TABLE `np_custom_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_game`
--

DROP TABLE IF EXISTS `np_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_game` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '游戏名称',
  `slug` varchar(100) NOT NULL COMMENT 'URL 标识符',
  `category` varchar(50) NOT NULL DEFAULT 'Slot' COMMENT '分类 Slot/Fish/Poker/Casino/Card Games',
  `cover_url` varchar(500) DEFAULT NULL COMMENT '封面图 URL',
  `description` text COMMENT '游戏描述',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否在首页展示',
  `sort_order` int NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` int unsigned NOT NULL DEFAULT '0',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`),
  KEY `idx_featured` (`is_featured`,`sort_order`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏列表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_game`
--

LOCK TABLES `np_game` WRITE;
/*!40000 ALTER TABLE `np_game` DISABLE KEYS */;
INSERT INTO `np_game` VALUES (1,'Fortune Dragon','fortune-dragon','Slot','/uploads/games/fortune-dragon.png','A high-volatility dragon-themed slot with cascading reels, free spins, and a progressive jackpot. Features stunning 3D dragon animations and a maximum win of 5000x.',1,1,1,1772351528,1772351528),(2,'Golden Phoenix','golden-phoenix','Slot','/uploads/games/golden-phoenix.png','Elegant phoenix-themed slot with expanding wilds and a unique fire respins feature. 96.5% RTP with medium-high volatility and 243 ways to win.',1,2,1,1772351528,1772351528),(3,'Thunder Strike','thunder-strike','Slot','/uploads/games/thunder-strike.png','Electrifying slot with lightning multipliers and a thunderstorm bonus round. Features 5 reels, 20 paylines, and a max win of 3000x your stake.',1,3,1,1772351528,1772351528),(4,'Lucky Gems','lucky-gems','Slot','/uploads/games/lucky-gems.png','Classic gem-themed slot with a modern twist. Features cluster pays, gem collection bonus, and a dazzling free spins round with sticky wilds.',1,4,1,1772351528,1772351528),(5,'Ocean Treasure','ocean-treasure','Fish','/uploads/games/ocean-treasure.png','Immersive underwater fishing game with multiple weapon types, special fish, and a boss battle mode. Features real-time multiplayer with up to 4 players.',1,5,1,1772351528,1772351528),(6,'Wild Safari','wild-safari','Slot','/uploads/games/wild-safari.png','African safari adventure slot with animal-themed symbols, stampede wilds, and a safari bonus hunt feature. 6 reels with 4096 ways to win.',1,6,1,1772351528,1772351528),(7,'Royal Flush','royal-flush','Card Games','/uploads/games/royal-flush.png','Premium video poker game with multiple hand variants including Jacks or Better, Deuces Wild, and Double Bonus. Features perfect strategy hints and tournament mode.',1,7,1,1772351528,1772351528),(8,'Mega Jackpot','mega-jackpot','Casino','/uploads/games/mega-jackpot.png','Progressive jackpot slot with four jackpot tiers: Mini, Minor, Major, and Mega. Features a wheel bonus game that awards jackpot prizes and free spins.',1,8,1,1772351528,1772351528),(9,'Dragon Ball','dragon-ball','Slot','/uploads/games/dragon-ball.png','Dragon-ball collecting slot where players gather dragon balls to trigger the ultimate wish bonus. Features 7 dragon balls, each unlocking unique bonus features.',1,9,1,1772351528,1772351528),(10,'Neon Nights','neon-nights','Slot','/uploads/games/neon-nights.png','Cyberpunk-themed slot set in a neon-lit futuristic city. Features holographic wilds, data stream scatters, and a hacking bonus mini-game.',1,10,1,1772351528,1772351528),(11,'Pirate\'s Gold','pirates-gold','Slot','/uploads/games/pirates-gold.png','Swashbuckling pirate adventure with treasure map features and a ship battle bonus. Collect map pieces to unlock the buried treasure jackpot.',1,11,1,1772351528,1772351528),(12,'Mystic Forest','mystic-forest','Slot','/uploads/games/mystic-forest.png','Enchanted forest slot with magical creature symbols and a fairy tale bonus journey. Features expanding reels and a mystical free spins mode.',1,12,1,1772351528,1772351528),(13,'Space Odyssey','space-odyssey','Slot','/uploads/games/space-odyssey.png','Intergalactic adventure slot with planet-hopping bonus rounds and alien encounter features. 7 reels with colossal symbols and a galaxy jackpot.',1,13,1,1772351528,1772351528),(14,'Candy Burst','candy-burst','Slot','/uploads/games/candy-burst.png','Sweet candy-themed slot with a cascading wins mechanic and candy collection bonus. Features rainbow wilds and a sugar rush free spins mode.',1,14,1,1772351528,1772351528),(15,'Fire Warrior','fire-warrior','Slot','/uploads/games/fire-warrior.png','Action-packed warrior slot with battle bonus rounds and a fire power meter. Features expanding warrior wilds and a tournament mode for competitive play.',1,15,1,1772351528,1772351528),(16,'Crystal Cave','crystal-cave','Casino','/uploads/games/crystal-cave.png','Mystical crystal cave slot with gem-collecting mechanics and a crystal ball bonus. Features 6 reels, cluster pays, and a cave exploration bonus round.',1,16,1,1772351528,1772351528);
/*!40000 ALTER TABLE `np_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_hall`
--

DROP TABLE IF EXISTS `np_hall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_hall` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '大厅名称',
  `slug` varchar(100) NOT NULL COMMENT 'URL 标识符',
  `subtitle` varchar(255) DEFAULT NULL COMMENT '副标题/简介',
  `description` text COMMENT '详细描述',
  `cover_url` varchar(500) DEFAULT NULL COMMENT '封面图 URL',
  `tags` varchar(500) DEFAULT NULL COMMENT '标签（JSON 数组字符串）',
  `demo_url` varchar(500) DEFAULT NULL COMMENT '演示链接',
  `cta_type` varchar(30) DEFAULT 'demo' COMMENT 'demo|coming_soon|no_demo',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否在首页展示',
  `sort_order` int NOT NULL DEFAULT '0' COMMENT '排序权重（越大越靠前）',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1=上线 0=下线',
  `created_at` int unsigned NOT NULL DEFAULT '0',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`),
  KEY `idx_featured` (`is_featured`,`sort_order`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏大厅';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_hall`
--

LOCK TABLES `np_hall` WRITE;
/*!40000 ALTER TABLE `np_hall` DISABLE KEYS */;
INSERT INTO `np_hall` VALUES (1,'YouMe Lightning','youme-lightning','Multi-genre integrated lobby · Lightning theme','A high-energy, lightning-themed multi-genre platform featuring Slots, Fish, Poker, and Casino games. Built for maximum engagement with immersive visual effects and seamless cross-game navigation.','/uploads/halls/youme-lightning.jpg','[\"Slot\",\"Fish\",\"Poker\",\"Casino\"]',NULL,'demo',1,1,1,1772351528,1772351528),(2,'YouMe Game 2026','youme-game-2026','Global multi-language platform · 2026 Flagship','Our 2026 flagship platform supporting global markets with full multi-language capability. Features Slots, Video Games, Fishing, and Poker with a cutting-edge UI designed for international players.','/uploads/halls/youme-game-2026.jpg','[\"Slot\",\"VideoGames\",\"Fishing\",\"Poker\"]',NULL,'demo',1,2,1,1772351528,1772351528),(3,'皇家永利','huangjia-yongli','Royal classic lobby · Mahjong & Jackpot','A premium classic-style lobby targeting Chinese-speaking markets. Specializes in Mahjong, Jackpot, and Classic Casino games with an elegant royal aesthetic that resonates with traditional players.','/uploads/halls/huangjia-yongli.jpg','[\"Mahjong\",\"Jackpot\",\"Classic\",\"Casino\"]',NULL,'demo',1,3,1,1772351528,1772351528),(4,'YouMe Myanmar','youme-myanmar','Myanmar market exclusive · Premium slots','Exclusively designed for the Myanmar market with localized content, language support, and culturally relevant game selections. Features premium slot titles and jackpot games tailored for local players.','/uploads/halls/youme-myanmar.jpg','[\"Slot\",\"Jackpot\",\"Myanmar\"]',NULL,'demo',1,4,1,1772351528,1772351528),(5,'YouMe Casino','youme-casino','Full-category casino platform · Elegant design','A comprehensive full-category casino platform with an elegant, sophisticated design. Covers all major game categories including Slots, Fish, Casino, and All Games in one seamless experience.','/uploads/halls/youme-casino.jpg','[\"Slot\",\"Fish\",\"Casino\",\"All Games\"]',NULL,'demo',1,5,1,1772351528,1772351528),(6,'NgWinBet','ngwinbet','African market platform · Sports & Slots','Purpose-built for African markets with sports betting integration alongside traditional casino games. Supports local payment methods and languages for the Nigerian and broader West African market.','/uploads/halls/ngwinbet.jpg','[\"Slot\",\"Poker\",\"Fish\",\"Sports\"]',NULL,'demo',0,6,1,1772351528,1772351528),(7,'LuckyJUWA','luckyjuwa','US market gaming platform · Neon style','A vibrant neon-styled platform targeting the US market with a bold, modern aesthetic. Features Slots, Fish, and Jackpot games designed to appeal to North American gaming preferences.','/uploads/halls/luckyjuwa.jpg','[\"Slot\",\"Fish\",\"Jackpot\",\"US Market\"]',NULL,'demo',0,7,1,1772351528,1772351528),(8,'Royal Dream','royal-dream','Indonesian market platform · Event-driven lobby','An event-driven lobby platform tailored for the Indonesian market featuring Pragmatic Play titles and locally popular game types. Rich promotional features and seasonal events drive player retention.','/uploads/halls/royal-dream.jpg','[\"Slot\",\"Pragmatic Play\",\"Indonesia\"]',NULL,'demo',0,8,1,1772351528,1772351528);
/*!40000 ALTER TABLE `np_hall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_hall_screenshot`
--

DROP TABLE IF EXISTS `np_hall_screenshot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_hall_screenshot` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `hall_id` int unsigned NOT NULL COMMENT '关联大厅 ID',
  `url` varchar(500) NOT NULL COMMENT '截图 URL',
  `sort_order` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idx_hall_id` (`hall_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='大厅截图';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_hall_screenshot`
--

LOCK TABLES `np_hall_screenshot` WRITE;
/*!40000 ALTER TABLE `np_hall_screenshot` DISABLE KEYS */;
INSERT INTO `np_hall_screenshot` VALUES (1,1,'/uploads/screenshots/youme-lightning-screenshot-1.jpg',1),(2,1,'/uploads/screenshots/youme-lightning-screenshot-2.jpg',2),(3,1,'/uploads/screenshots/youme-lightning-screenshot-3.jpg',3),(4,2,'/uploads/screenshots/youme-game-2026-screenshot-1.jpg',1),(5,2,'/uploads/screenshots/youme-game-2026-screenshot-2.jpg',2),(6,2,'/uploads/screenshots/youme-game-2026-screenshot-3.jpg',3),(7,3,'/uploads/screenshots/huangjia-yongli-screenshot-1.jpg',1),(8,3,'/uploads/screenshots/huangjia-yongli-screenshot-2.jpg',2),(9,3,'/uploads/screenshots/huangjia-yongli-screenshot-3.jpg',3),(10,4,'/uploads/screenshots/youme-myanmar-screenshot-1.jpg',1),(11,4,'/uploads/screenshots/youme-myanmar-screenshot-2.jpg',2),(12,4,'/uploads/screenshots/youme-myanmar-screenshot-3.jpg',3),(13,5,'/uploads/screenshots/youme-casino-screenshot-1.jpg',1),(14,5,'/uploads/screenshots/youme-casino-screenshot-2.jpg',2),(15,5,'/uploads/screenshots/youme-casino-screenshot-3.jpg',3),(16,6,'/uploads/screenshots/ngwinbet-screenshot-1.jpg',1),(17,6,'/uploads/screenshots/ngwinbet-screenshot-2.jpg',2),(18,6,'/uploads/screenshots/ngwinbet-screenshot-3.jpg',3),(19,7,'/uploads/screenshots/luckyjuwa-screenshot-1.jpg',1),(20,7,'/uploads/screenshots/luckyjuwa-screenshot-2.jpg',2),(21,7,'/uploads/screenshots/luckyjuwa-screenshot-3.jpg',3),(22,8,'/uploads/screenshots/royal-dream-screenshot-1.jpg',1),(23,8,'/uploads/screenshots/royal-dream-screenshot-2.jpg',2),(24,8,'/uploads/screenshots/royal-dream-screenshot-3.jpg',3);
/*!40000 ALTER TABLE `np_hall_screenshot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_hall_translation`
--

DROP TABLE IF EXISTS `np_hall_translation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_hall_translation` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `hall_id` int unsigned NOT NULL COMMENT '关联大厅 ID',
  `lang` varchar(10) NOT NULL COMMENT '语言代码 en/zh/ja 等',
  `name` varchar(100) DEFAULT NULL COMMENT '大厅名称（该语言）',
  `subtitle` varchar(255) DEFAULT NULL COMMENT '副标题（该语言）',
  `description` text COMMENT '描述（该语言）',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_hall_lang` (`hall_id`,`lang`),
  KEY `idx_hall_id` (`hall_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='大厅多语言翻译';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_hall_translation`
--

LOCK TABLES `np_hall_translation` WRITE;
/*!40000 ALTER TABLE `np_hall_translation` DISABLE KEYS */;
/*!40000 ALTER TABLE `np_hall_translation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_inquiry`
--

DROP TABLE IF EXISTS `np_inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_inquiry` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '姓名',
  `contact` varchar(200) NOT NULL COMMENT '联系方式',
  `company` varchar(200) DEFAULT NULL COMMENT '公司名',
  `partnership_type` varchar(50) DEFAULT NULL COMMENT '合作类型',
  `message` text COMMENT '留言内容',
  `ip` varchar(50) DEFAULT NULL COMMENT '提交 IP',
  `is_read` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已读',
  `created_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idx_is_read` (`is_read`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='询盘记录';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_inquiry`
--

LOCK TABLES `np_inquiry` WRITE;
/*!40000 ALTER TABLE `np_inquiry` DISABLE KEYS */;
/*!40000 ALTER TABLE `np_inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_partnership`
--

DROP TABLE IF EXISTS `np_partnership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_partnership` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `type_key` varchar(50) NOT NULL COMMENT '类型键 white_label/revenue_share/agency',
  `title` varchar(100) NOT NULL COMMENT '标题',
  `description` text COMMENT '描述',
  `is_recommended` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否推荐',
  `steps` text COMMENT '流程步骤（JSON 数组）',
  `sort_order` int NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_type_key` (`type_key`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='合作模式';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_partnership`
--

LOCK TABLES `np_partnership` WRITE;
/*!40000 ALTER TABLE `np_partnership` DISABLE KEYS */;
INSERT INTO `np_partnership` VALUES (1,'white-label','White Label','Launch your branded casino platform in weeks. We provide the full technology stack — you focus on marketing and player acquisition.',1,'[\"Initial Consultation\",\"Proposal & Agreement\",\"Platform Setup\",\"Testing & Launch\"]',1,1,1772351528),(2,'revenue-share','Revenue Share','Align incentives with a revenue-sharing model. We invest in your success and grow together as long-term partners.',0,'[\"Initial Consultation\",\"Proposal & Agreement\",\"Platform Setup\",\"Ongoing Support\"]',2,1,1772351528),(3,'agency-partner','Agency Partner','Refer clients and earn commissions. Ideal for consultants, affiliates, and industry professionals with strong networks.',0,'[\"Initial Consultation\",\"Proposal & Agreement\",\"Testing & Launch\",\"Ongoing Support\"]',3,1,1772351528);
/*!40000 ALTER TABLE `np_partnership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_site_config`
--

DROP TABLE IF EXISTS `np_site_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_site_config` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `cfg_key` varchar(100) NOT NULL COMMENT '配置键',
  `cfg_value` text COMMENT '配置值（JSON 或纯文本）',
  `cfg_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1=文本 2=图片URL 3=JSON',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注说明',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_cfg_key` (`cfg_key`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='站点配置';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_site_config`
--

LOCK TABLES `np_site_config` WRITE;
/*!40000 ALTER TABLE `np_site_config` DISABLE KEYS */;
INSERT INTO `np_site_config` VALUES (1,'logo_url','/uploads/common/logo.png',1,'Logo 图片相对路径',1772351528),(2,'hero_badge','PREMIUM GAMING PLATFORM DEVELOPER',1,'Hero 区域徽章文字',1772351528),(3,'hero_title_white','Craft the',1,'Hero 标题白色部分',1772351528),(4,'hero_title_gold','Ultimate Gaming Experience',1,'Hero 标题金色部分',1772351528),(5,'hero_subtitle','Specializing in high-quality game lobby platform development — delivering complete technology solutions that help partners stand out in global markets.',1,'Hero 副标题',1772351528),(6,'stat_projects','200+',1,'项目数量统计',1772351528),(7,'stat_years','12+',1,'年经验统计',1772351528),(8,'stat_partners','300+',1,'合作伙伴统计',1772351528),(9,'stat_satisfaction','99%',1,'客户满意度统计',1772351528),(10,'stat_projects_label','Premium Projects',1,'项目数量标签',1772351528),(11,'stat_years_label','Years Experience',1,'年经验标签',1772351528),(12,'stat_partners_label','Global Partners',1,'合作伙伴标签',1772351528),(13,'stat_satisfaction_label','Client Satisfaction',1,'满意度标签',1772351528),(14,'contact_telegram1','@youmegames',1,'Telegram 主账号',1772351528),(15,'contact_telegram1_desc','Fastest response — typically within 1 hour',1,'Telegram 主账号描述',1772351528),(16,'contact_telegram2','@sophiamiller999',1,'Telegram 副账号',1772351528),(17,'contact_telegram2_desc','Business development & partnership inquiries',1,'Telegram 副账号描述',1772351528),(18,'contact_email','novaplaygaming888@gmail.com',1,'联系邮箱',1772351528),(19,'contact_email_desc','Business partnerships & project inquiries',1,'邮箱描述',1772351528),(20,'contact_website','www.novaplaygaming.com',1,'官网地址',1772351528),(21,'contact_website_desc','Learn more about our products & services',1,'官网描述',1772351528),(22,'about_story','NovaPlay is a premium gaming technology company specializing in the development of world-class online casino and slot game platforms.\n\nFounded by a team of veteran gaming industry professionals, NovaPlay was built on a single conviction: that operators deserve a technology partner who truly understands the gaming business.\n\nFrom our flagship white-label casino platforms to fully bespoke game development, we deliver solutions that drive real business results — higher retention, stronger engagement, and sustainable revenue growth.',1,'关于我们故事内容',1772351528),(23,'timeline_standard','4 – 8 Weeks',1,'标准项目周期',1772351528),(24,'timeline_custom','8 – 16 Weeks',1,'定制项目周期',1772351528),(25,'timeline_support','12 Months',1,'支持时长',1772351528),(26,'tech_stack','React / Vue.js,Node.js / Go,MySQL / Redis,WebSocket,AWS / Alibaba Cloud,Docker / K8s,Unity / Cocos,H5 / PWA',1,'技术栈（逗号分隔）',1772351528);
/*!40000 ALTER TABLE `np_site_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `np_translation`
--

DROP TABLE IF EXISTS `np_translation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `np_translation` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `lang` varchar(10) NOT NULL COMMENT '语言代码',
  `trans_key` varchar(200) NOT NULL COMMENT '翻译键',
  `trans_value` text NOT NULL COMMENT '翻译值',
  `updated_at` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_lang_key` (`lang`,`trans_key`),
  KEY `idx_lang` (`lang`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='前台多语言翻译';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `np_translation`
--

LOCK TABLES `np_translation` WRITE;
/*!40000 ALTER TABLE `np_translation` DISABLE KEYS */;
INSERT INTO `np_translation` VALUES (1,'en','nav.home','Home',1772351528),(2,'en','nav.showcase','Showcase',1772351528),(3,'en','nav.about','About Us',1772351528),(4,'en','nav.partnership','Partnership',1772351528),(5,'en','nav.custom_dev','Custom Dev',1772351528),(6,'en','nav.contact','Contact',1772351528),(7,'en','nav.cta','Partner With Us',1772351528),(8,'zh','nav.home','首页',1772351528),(9,'zh','nav.showcase','案例展示',1772351528),(10,'zh','nav.about','关于我们',1772351528),(11,'zh','nav.partnership','合作模式',1772351528),(12,'zh','nav.custom_dev','定制开发',1772351528),(13,'zh','nav.contact','联系我们',1772351528),(14,'zh','nav.cta','立即合作',1772351528);
/*!40000 ALTER TABLE `np_translation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-03 11:08:50
