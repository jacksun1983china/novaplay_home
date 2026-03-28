-- ============================================================
-- NovaPlay Gaming 数据库初始化脚本
-- 数据库名: novaplay
-- 字符集: utf8mb4
-- 生成时间: 2026-03-29
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';

-- ============================================================
-- 1. np_admin - 管理员表
-- ============================================================
DROP TABLE IF EXISTS `np_admin`;
CREATE TABLE `np_admin` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  `nickname` varchar(50) NOT NULL DEFAULT '' COMMENT '昵称',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态 1=启用 0=禁用',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='管理员表';

INSERT INTO `np_admin` (`id`, `username`, `password`, `nickname`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrator', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 2. np_site_config - 站点配置表
-- ============================================================
DROP TABLE IF EXISTS `np_site_config`;
CREATE TABLE `np_site_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cfg_key` varchar(100) NOT NULL DEFAULT '' COMMENT '配置键',
  `cfg_value` text COMMENT '配置值',
  `cfg_type` tinyint(1) NOT NULL DEFAULT 1 COMMENT '类型 1=文本 2=图片 3=JSON',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_cfg_key` (`cfg_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='站点配置表';

INSERT INTO `np_site_config` (`cfg_key`, `cfg_value`, `cfg_type`, `remark`, `updated_at`) VALUES
('site_name', 'NovaPlay Gaming', 1, '站点名称', UNIX_TIMESTAMP()),
('logo_url', '/uploads/images/logo.png', 2, 'Logo图片', UNIX_TIMESTAMP()),
('logo_dark_url', '/uploads/images/logo-dark.png', 2, 'Logo深色版', UNIX_TIMESTAMP()),
('hero_bg_url', '/uploads/images/hero-bg.jpg', 2, 'Hero背景图', UNIX_TIMESTAMP()),
('section_divider_url', '/uploads/images/section-divider.jpg', 2, '分区分割线图', UNIX_TIMESTAMP()),
('contact_bg_url', '/uploads/images/contact-bg.jpg', 2, '联系背景图', UNIX_TIMESTAMP()),
('hero_title', 'Premium Gaming Solutions', 1, 'Hero标题', UNIX_TIMESTAMP()),
('hero_subtitle', 'NovaPlay delivers world-class casino platforms, game lobbies, and custom development — trusted by operators across Southeast Asia, Africa, and Latin America.', 1, 'Hero副标题', UNIX_TIMESTAMP()),
('telegram_url', 'https://t.me/novaplaygaming', 1, 'Telegram链接', UNIX_TIMESTAMP()),
('telegram2_url', 'https://t.me/novaplaygaming_bd', 1, 'Telegram BD链接', UNIX_TIMESTAMP()),
('email', 'business@novaplaygaming.com', 1, '商务邮箱', UNIX_TIMESTAMP()),
('skype_url', 'https://join.skype.com/invite/novaplay', 1, 'Skype链接', UNIX_TIMESTAMP()),
('copyright', '© 2026 NovaPlay Gaming. All rights reserved.', 1, '版权信息', UNIX_TIMESTAMP()),
('tech_stack', '["React / Vue.js","Node.js / Go","MySQL / Redis","WebSocket","AWS / Alibaba Cloud","Docker / K8s","Unity / Cocos","H5 / PWA"]', 3, '技术栈', UNIX_TIMESTAMP()),
('about_stats', '{"games":"200+","clients":"50+","countries":"15+","uptime":"99.9%"}', 3, '关于我们统计数据', UNIX_TIMESTAMP());

-- ============================================================
-- 3. np_game - 游戏表
-- ============================================================
DROP TABLE IF EXISTS `np_game`;
CREATE TABLE `np_game` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '游戏名称',
  `slug` varchar(100) NOT NULL DEFAULT '' COMMENT 'URL别名',
  `category` varchar(50) NOT NULL DEFAULT '' COMMENT '分类: Slot/Fish/Casino/CardGames',
  `cover_url` varchar(500) NOT NULL DEFAULT '' COMMENT '封面图片(相对路径)',
  `description` text COMMENT '游戏描述',
  `features` text COMMENT '特性(JSON数组)',
  `url` varchar(500) NOT NULL DEFAULT '' COMMENT '游戏链接',
  `is_featured` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否推荐',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态 1=启用 0=禁用',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`),
  KEY `idx_category` (`category`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='游戏表';

INSERT INTO `np_game` (`id`, `name`, `slug`, `category`, `cover_url`, `description`, `features`, `url`, `is_featured`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Fortune Dragon', 'fortune-dragon', 'Slot', '/uploads/games/fortune-dragon.png', 'Embark on a legendary journey with Fortune Dragon — a high-volatility slot featuring cascading reels, multiplier wilds, and a dragon-themed free spins bonus round that can award up to 5,000x your stake.', '["Cascading Reels","Dragon Wild Multipliers","Free Spins Bonus","5,000x Max Win","96.5% RTP"]', 'https://www.youmegame.com', 1, 100, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 'Golden Phoenix', 'golden-phoenix', 'Slot', '/uploads/games/golden-phoenix.png', 'Rise from the ashes with Golden Phoenix — a stunning 6-reel slot packed with expanding symbols, phoenix respins, and a jackpot wheel bonus that keeps players on the edge of their seats.', '["6-Reel Layout","Expanding Symbols","Phoenix Respins","Jackpot Wheel","97.1% RTP"]', 'https://www.youmegame.com', 1, 99, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(3, 'Thunder Strike', 'thunder-strike', 'Slot', '/uploads/games/thunder-strike.png', 'Feel the power of the storm in Thunder Strike — an electrifying slot with lightning wilds that split across the reels, delivering massive chain reactions and a thunderstorm free spins feature.', '["Lightning Wild Splits","Chain Reaction Wins","Thunderstorm Free Spins","Sticky Wilds","96.8% RTP"]', 'https://www.youmegame.com', 1, 98, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(4, 'Lucky Gems', 'lucky-gems', 'Slot', '/uploads/games/lucky-gems.png', 'Dazzle your way to riches with Lucky Gems — a vibrant gem-matching slot with cluster pays, gem explosion mechanics, and a rainbow jackpot that rewards the luckiest players.', '["Cluster Pays","Gem Explosion Mechanic","Rainbow Jackpot","Tumble Feature","96.3% RTP"]', 'https://www.youmegame.com', 0, 97, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(5, 'Ocean Treasure', 'ocean-treasure', 'Fish', '/uploads/games/ocean-treasure.png', 'Dive into the deep blue with Ocean Treasure — an action-packed fishing game featuring 8 cannon types, rare boss fish worth massive multipliers, and a treasure chest bonus round.', '["8 Cannon Types","Boss Fish Encounters","Treasure Chest Bonus","Multiplier Fish","Cooperative Play"]', 'https://www.youmegame.com', 1, 96, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(6, 'Wild Safari', 'wild-safari', 'Slot', '/uploads/games/wild-safari.png', 'Venture into the wild with Wild Safari — a 5-reel adventure slot featuring stampede respins, animal stacked wilds, and a safari free spins round with roaming multipliers.', '["Stampede Respins","Stacked Animal Wilds","Safari Free Spins","Roaming Multipliers","96.6% RTP"]', 'https://www.youmegame.com', 0, 95, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(7, 'Royal Flush', 'royal-flush', 'CardGames', '/uploads/games/royal-flush.png', 'Master the art of the Royal Flush — a premium video poker experience with multiple hand variants, side bets, and a progressive jackpot triggered by the ultimate royal flush hand.', '["Multiple Poker Variants","Side Bet Options","Progressive Jackpot","Auto Hold Feature","99.5% RTP"]', 'https://www.youmegame.com', 1, 94, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(8, 'Mega Jackpot', 'mega-jackpot', 'Casino', '/uploads/games/mega-jackpot.png', 'Chase life-changing wins with Mega Jackpot — a network-linked progressive slot where four jackpot tiers accumulate across thousands of players, with the Grand Jackpot regularly reaching 7-figure sums.', '["4-Tier Progressive Jackpot","Network-Linked Pool","Jackpot Wheel Bonus","Any-Bet Trigger","95.9% RTP"]', 'https://www.youmegame.com', 1, 93, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(9, 'Dragon Ball', 'dragon-ball', 'Slot', '/uploads/games/dragon-ball.png', 'Collect all seven dragon balls to summon the ultimate bonus in Dragon Ball — a feature-rich slot with scatter collect mechanics, wish bonus rounds, and a dragon free spins multiplier trail.', '["Dragon Ball Collect Mechanic","Wish Bonus Round","Multiplier Trail","Dragon Free Spins","96.9% RTP"]', 'https://www.youmegame.com', 0, 92, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(10, 'Neon Nights', 'neon-nights', 'Slot', '/uploads/games/neon-nights.png', 'Light up the night with Neon Nights — a cyberpunk-themed slot with neon wild reels, city multiplier maps, and an after-dark free spins feature where every spin can trigger a city-wide jackpot.', '["Neon Wild Reels","City Multiplier Map","After-Dark Free Spins","City-Wide Jackpot","96.7% RTP"]', 'https://www.youmegame.com', 0, 91, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(11, 'Pirate''s Gold', 'pirates-gold', 'Slot', '/uploads/games/pirates-gold.png', 'Set sail for fortune with Pirate''s Gold — a swashbuckling adventure slot featuring treasure map bonus rounds, cannon blast wilds, and a buried treasure jackpot that rewards the boldest pirates.', '["Treasure Map Bonus","Cannon Blast Wilds","Buried Treasure Jackpot","Ship Battle Feature","96.4% RTP"]', 'https://www.youmegame.com', 0, 90, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(12, 'Mystic Forest', 'mystic-forest', 'Slot', '/uploads/games/mystic-forest.png', 'Wander through the enchanted Mystic Forest — a magical slot with fairy tale wilds, enchanted free spins, and a forest spirit bonus that transforms low-value symbols into high-paying creatures.', '["Fairy Tale Wilds","Enchanted Free Spins","Forest Spirit Bonus","Symbol Transformation","96.2% RTP"]', 'https://www.youmegame.com', 0, 89, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(13, 'Space Odyssey', 'space-odyssey', 'Slot', '/uploads/games/space-odyssey.png', 'Blast off into the cosmos with Space Odyssey — a sci-fi slot featuring warp speed respins, alien invasion wilds, and a galaxy jackpot bonus where players navigate through star systems to claim prizes.', '["Warp Speed Respins","Alien Invasion Wilds","Galaxy Jackpot Bonus","Star System Navigation","96.8% RTP"]', 'https://www.youmegame.com', 0, 88, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(14, 'Candy Burst', 'candy-burst', 'Slot', '/uploads/games/candy-burst.png', 'Satisfy your sweet tooth with Candy Burst — a colorful cascade slot where matching candies explode in chain reactions, building up a sugar rush multiplier that can sweeten wins up to 10,000x.', '["Candy Cascade Mechanic","Chain Reaction Explosions","Sugar Rush Multiplier","10,000x Max Win","96.5% RTP"]', 'https://www.youmegame.com', 0, 87, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(15, 'Fire Warrior', 'fire-warrior', 'Slot', '/uploads/games/fire-warrior.png', 'Channel the power of the Fire Warrior — a blazing action slot where the warrior hero triggers sword slash wilds, fire breath free spins, and an epic boss battle bonus with escalating multipliers.', '["Sword Slash Wilds","Fire Breath Free Spins","Boss Battle Bonus","Escalating Multipliers","96.6% RTP"]', 'https://www.youmegame.com', 0, 86, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(16, 'Crystal Cave', 'crystal-cave', 'Casino', '/uploads/games/crystal-cave.png', 'Explore the depths of Crystal Cave — a dazzling roulette-inspired casino game where crystal gems replace numbers, gem clusters trigger bonus spins, and the rare rainbow crystal awards the ultimate jackpot.', '["Crystal Gem Roulette","Gem Cluster Bonus","Rainbow Crystal Jackpot","Multi-Table Support","97.3% RTP"]', 'https://www.youmegame.com', 0, 85, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 4. np_hall - 游戏大厅表
-- ============================================================
DROP TABLE IF EXISTS `np_hall`;
CREATE TABLE `np_hall` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '大厅名称',
  `slug` varchar(100) NOT NULL DEFAULT '' COMMENT 'URL别名',
  `subtitle` varchar(255) NOT NULL DEFAULT '' COMMENT '副标题/标语',
  `description` text COMMENT '描述',
  `cover_url` varchar(500) NOT NULL DEFAULT '' COMMENT '封面图片(相对路径)',
  `tags` varchar(500) NOT NULL DEFAULT '[]' COMMENT '标签(JSON数组)',
  `demo_url` varchar(500) NOT NULL DEFAULT '' COMMENT '演示链接',
  `cta_type` varchar(50) NOT NULL DEFAULT '' COMMENT 'CTA类型: coming_soon/no_demo/空',
  `features` text COMMENT '特性(JSON数组)',
  `is_featured` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否推荐',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态 1=启用 0=禁用',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='游戏大厅表';

INSERT INTO `np_hall` (`id`, `name`, `slug`, `subtitle`, `description`, `cover_url`, `tags`, `demo_url`, `cta_type`, `features`, `is_featured`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 'YouMe Lightning', 'youme-lightning', 'Multi-genre integrated lobby · Lightning theme', 'YouMe Lightning is a flagship multi-genre gaming platform featuring a bold lightning visual theme. It integrates Slots, Fish Games, Poker, and Live Casino under one seamless lobby, delivering an electrifying experience for players across Southeast Asia.', '/uploads/halls/youme-lightning.jpg', '["Slot","Fish","Poker","Casino"]', 'https://www.youmegame.com', 'coming_soon', '["Multi-genre integrated lobby","Lightning visual theme","Seamless cross-game navigation","Mobile-first responsive design","Multi-language support","Real-time jackpot display"]', 1, 100, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 'YouMe Game 2026', 'youmegame2026', 'Global multi-language platform · 2026 Flagship', 'YouMe Game 2026 is our latest flagship platform built for global markets. It supports multiple languages and currencies, features a modern UI with smooth animations, and offers a comprehensive game library spanning Slots, Video Games, Fishing, and Poker.', '/uploads/halls/youmegame2026.jpg', '["Slot","VideoGames","Fishing","Poker"]', 'https://www.youmegame.com', '', '["Global multi-language support","Multi-currency wallet","Modern animated UI","Comprehensive game library","Advanced player analytics","24/7 customer support integration"]', 1, 99, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(3, '皇家永利', 'huang-jia-yong-li', 'Royal classic lobby · Mahjong & Jackpot', '皇家永利 (Huang Jia Yong Li) is a premium Chinese-style gaming platform featuring a grand royal aesthetic. It showcases Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck, and a multi-Jackpot display, delivering an authentic and immersive experience for Chinese-speaking players.', '/uploads/halls/huang-jia-yong-li.jpg', '["Mahjong","Jackpot","Classic","Casino"]', 'https://hjyl888.one/', '', '["Royal Chinese visual theme","Multi-Jackpot live display","Mahjong Ways collection","Fortune Rabbit & Dragon Tiger","Localized Chinese interface","CDKey exchange system"]', 1, 98, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(4, 'YouMe Myanmar', 'youme-myanmar', 'Myanmar market exclusive · Premium slots', 'YouMe Myanmar is a market-exclusive platform tailored specifically for Myanmar players. It features a premium lobby design with Burmese language support, and a curated selection of Slot and Jackpot games including African Buffalo, Gates of Olympus, and Emperor''s Power.', '/uploads/halls/youme-myanmar.jpg', '["Slot","Jackpot","Myanmar"]', 'https://mm.youmegame.com', '', '["Myanmar market exclusive","Burmese language support","Premium lobby design","Curated Slot & Jackpot selection","Local payment integration","Dedicated support team"]', 1, 97, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(5, 'YouMe Casino', 'youme-casino', 'Full-category casino platform · Elegant design', 'YouMe Casino is a full-category gaming platform with an elegant dealer-themed design. It features Slots, Fish Games, and Other categories with titles like 88 Fortune, Golden Cicada, Cash Machine, Zombie Awaken, KingKong''s Rampage, and FireKirin.', '/uploads/halls/youme-casino.jpg', '["Slot","Fish","Casino","All Games"]', 'https://www.youmeslot.com', '', '["Full-category game coverage","Elegant dealer visual theme","All-in-one lobby","Diverse slot collection","Fish game section","Store & mail system"]', 1, 96, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(6, 'NgWinBet', 'ngwinbet', 'African market platform · Sports & Slots', 'NgWinBet is a dynamic gaming platform designed for the African market. Featuring a vibrant sports-inspired design with a football stadium backdrop, it offers a rich selection of Slots, Poker, and Fishing games including Lucky Soccer, PokerWin, Hot Spin, African Buffalo, and Mahjong Ways 2.', '/uploads/halls/ngwinbet.jpg', '["Slot","Poker","Fish","Sports"]', 'https://www.ngwinbet.com', '', '["African market optimized","Sports-inspired visual theme","Football stadium backdrop","Rich slot & poker selection","Mahjong Ways 2 featured","Naira currency support"]', 1, 95, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(7, 'LuckyJUWA', 'lucky-juwa', 'US market gaming platform · Neon style', 'LuckyJUWA is a vibrant gaming platform targeting the US market. With a neon-lit futuristic aesthetic, it features a curated selection of popular titles including Golden Cicada, Zombie Awaken, King Kong''s Rampage, and FireKirin, alongside a live Jackpot Grand display.', '/uploads/halls/lucky-juwa.jpg', '["Slot","Fish","Jackpot","US Market"]', 'https://juwa.youmeslot.com', '', '["US market focused","Neon futuristic visual theme","Live Jackpot Grand display","Golden Cicada & FireKirin","King Kong''s Rampage featured","Dollar currency support"]', 1, 94, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(8, 'Royal Dream', 'royal-dream', 'Indonesian market platform · Event-driven lobby', 'Royal Dream is a feature-rich gaming platform designed for the Indonesian market. It showcases popular Pragmatic Play titles including Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess, and Gates of Olympus, with a live RTP display and event-driven lobby.', '/uploads/halls/royal-dream.jpg', '["Slot","Pragmatic Play","Indonesia"]', 'https://www.youmegame.com', 'no_demo', '["Indonesian market optimized","Live RTP display","Pragmatic Play featured titles","Event Domino promotion","Ranking Jackpot system","Rupiah currency support"]', 1, 93, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 5. np_hall_screenshot - 大厅截图表
-- ============================================================
DROP TABLE IF EXISTS `np_hall_screenshot`;
CREATE TABLE `np_hall_screenshot` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `hall_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '大厅ID',
  `url` varchar(500) NOT NULL DEFAULT '' COMMENT '截图URL(相对路径)',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `idx_hall_id` (`hall_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='大厅截图表';

INSERT INTO `np_hall_screenshot` (`hall_id`, `url`, `sort_order`) VALUES
-- YouMe Lightning
(1, '/uploads/halls/screenshots/youme-lightning-1.jpg', 1),
(1, '/uploads/halls/screenshots/youme-lightning-2.jpg', 2),
(1, '/uploads/halls/screenshots/youme-lightning-3.jpg', 3),
-- YouMe Game 2026
(2, '/uploads/halls/screenshots/youmegame2026-1.jpg', 1),
(2, '/uploads/halls/screenshots/youmegame2026-2.jpg', 2),
(2, '/uploads/halls/screenshots/youmegame2026-3.jpg', 3),
-- 皇家永利
(3, '/uploads/halls/screenshots/huang-jia-yong-li-1.jpg', 1),
(3, '/uploads/halls/screenshots/huang-jia-yong-li-2.jpg', 2),
(3, '/uploads/halls/screenshots/huang-jia-yong-li-3.jpg', 3),
-- YouMe Myanmar
(4, '/uploads/halls/screenshots/youme-myanmar-1.jpg', 1),
(4, '/uploads/halls/screenshots/youme-myanmar-2.jpg', 2),
(4, '/uploads/halls/screenshots/youme-myanmar-3.jpg', 3),
-- YouMe Casino
(5, '/uploads/halls/screenshots/youme-casino-1.jpg', 1),
(5, '/uploads/halls/screenshots/youme-casino-2.jpg', 2),
(5, '/uploads/halls/screenshots/youme-casino-3.jpg', 3),
-- NgWinBet
(6, '/uploads/halls/screenshots/ngwinbet-1.jpg', 1),
(6, '/uploads/halls/screenshots/ngwinbet-2.jpg', 2),
(6, '/uploads/halls/screenshots/ngwinbet-3.jpg', 3),
-- LuckyJUWA
(7, '/uploads/halls/screenshots/lucky-juwa-1.jpg', 1),
(7, '/uploads/halls/screenshots/lucky-juwa-2.jpg', 2),
(7, '/uploads/halls/screenshots/lucky-juwa-3.jpg', 3),
-- Royal Dream
(8, '/uploads/halls/screenshots/royal-dream-1.jpg', 1),
(8, '/uploads/halls/screenshots/royal-dream-2.jpg', 2),
(8, '/uploads/halls/screenshots/royal-dream-3.jpg', 3);

-- ============================================================
-- 6. np_hall_translation - 大厅翻译表
-- ============================================================
DROP TABLE IF EXISTS `np_hall_translation`;
CREATE TABLE `np_hall_translation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `hall_id` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '大厅ID',
  `lang` varchar(10) NOT NULL DEFAULT '' COMMENT '语言代码',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '翻译名称',
  `subtitle` varchar(255) NOT NULL DEFAULT '' COMMENT '翻译副标题',
  `description` text COMMENT '翻译描述',
  `features` text COMMENT '翻译特性(JSON数组)',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_hall_lang` (`hall_id`, `lang`),
  KEY `idx_hall_id` (`hall_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='大厅翻译表';

-- ============================================================
-- 7. np_partnership - 合作模式表
-- ============================================================
DROP TABLE IF EXISTS `np_partnership`;
CREATE TABLE `np_partnership` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '标题',
  `description` text COMMENT '描述',
  `is_recommended` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否推荐',
  `steps` text COMMENT '步骤(JSON数组)',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='合作模式表';

INSERT INTO `np_partnership` (`id`, `title`, `description`, `is_recommended`, `steps`, `sort_order`, `status`, `updated_at`) VALUES
(1, 'White Label', 'Launch your branded casino platform in weeks. We provide the full technology stack — you focus on marketing and player acquisition.', 1, '["Initial Consultation","Proposal & Agreement","Platform Setup","Testing & Launch"]', 1, 1, UNIX_TIMESTAMP()),
(2, 'Revenue Share', 'Align incentives with a revenue-sharing model. We invest in your success and grow together as long-term partners.', 0, '["Initial Consultation","Proposal & Agreement","Platform Setup","Ongoing Support"]', 2, 1, UNIX_TIMESTAMP()),
(3, 'Agency Partner', 'Refer clients and earn commissions. Ideal for consultants, affiliates, and industry professionals with strong networks.', 0, '["Initial Consultation","Proposal & Agreement","Testing & Launch","Ongoing Support"]', 3, 1, UNIX_TIMESTAMP());

-- ============================================================
-- 8. np_custom_service - 定制服务表
-- ============================================================
DROP TABLE IF EXISTS `np_custom_service`;
CREATE TABLE `np_custom_service` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(50) NOT NULL DEFAULT '' COMMENT '图标名称',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '标题',
  `description` text COMMENT '描述',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='定制服务表';

INSERT INTO `np_custom_service` (`id`, `icon`, `title`, `description`, `sort_order`, `status`, `updated_at`) VALUES
(1, 'Gamepad2', 'Game Lobby Development', 'Custom-built game lobbies with multi-genre support, seamless navigation, and real-time jackpot displays tailored to your brand.', 1, 1, UNIX_TIMESTAMP()),
(2, 'Palette', 'UI/UX Design & Skinning', 'Professional visual design services including custom themes, animations, and responsive layouts optimized for mobile-first experiences.', 2, 1, UNIX_TIMESTAMP()),
(3, 'Server', 'Backend & API Integration', 'Robust backend architecture with RESTful APIs, WebSocket support, payment gateway integration, and multi-currency wallet systems.', 3, 1, UNIX_TIMESTAMP()),
(4, 'Globe', 'Localization & Multi-Language', 'Full localization services covering 15+ languages, RTL support, and culturally adapted content for global market reach.', 4, 1, UNIX_TIMESTAMP()),
(5, 'Shield', 'Security & Compliance', 'Enterprise-grade security with SSL encryption, DDoS protection, fraud detection, and regulatory compliance consulting.', 5, 1, UNIX_TIMESTAMP()),
(6, 'Headphones', '24/7 Technical Support', 'Round-the-clock technical support with dedicated account managers, real-time monitoring, and rapid incident response.', 6, 1, UNIX_TIMESTAMP());

-- ============================================================
-- 9. np_inquiry - 咨询表
-- ============================================================
DROP TABLE IF EXISTS `np_inquiry`;
CREATE TABLE `np_inquiry` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '姓名',
  `email` varchar(100) NOT NULL DEFAULT '' COMMENT '邮箱',
  `company` varchar(100) NOT NULL DEFAULT '' COMMENT '公司',
  `partnership_type` varchar(50) NOT NULL DEFAULT '' COMMENT '合作类型',
  `message` text COMMENT '留言',
  `is_read` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否已读',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_is_read` (`is_read`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='咨询表';

-- ============================================================
-- 10. np_translation - 多语言翻译表
-- ============================================================
DROP TABLE IF EXISTS `np_translation`;
CREATE TABLE `np_translation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `lang` varchar(10) NOT NULL DEFAULT '' COMMENT '语言代码',
  `trans_key` varchar(200) NOT NULL DEFAULT '' COMMENT '翻译键',
  `trans_value` text COMMENT '翻译值',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_lang_key` (`lang`, `trans_key`),
  KEY `idx_lang` (`lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='多语言翻译表';

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================
-- 初始化完成
-- ============================================================
