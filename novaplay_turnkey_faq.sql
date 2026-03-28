-- ============================================================
-- NovaPlay Gaming - 包网平台 & FAQ 数据库脚本
-- 包网平台：一分钟快速建站，共享版 + VIP独立版
-- 生成时间: 2026-03-29
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- 1. np_turnkey_plan - 包网平台套餐表（共享版 + VIP独立版）
-- ============================================================
DROP TABLE IF EXISTS `np_turnkey_plan`;
CREATE TABLE `np_turnkey_plan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '套餐名称',
  `slug` varchar(100) NOT NULL DEFAULT '' COMMENT 'URL别名',
  `subtitle` varchar(255) NOT NULL DEFAULT '' COMMENT '副标题',
  `setup_fee` varchar(100) NOT NULL DEFAULT '' COMMENT '开站费',
  `monthly_fee` varchar(100) NOT NULL DEFAULT '' COMMENT '月费',
  `ggr_share` varchar(100) NOT NULL DEFAULT '' COMMENT 'GGR分成',
  `customization` varchar(255) NOT NULL DEFAULT '' COMMENT '定制化程度',
  `server_type` varchar(100) NOT NULL DEFAULT '' COMMENT '服务器类型',
  `support_level` varchar(255) NOT NULL DEFAULT '' COMMENT '技术支持',
  `is_recommended` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否推荐',
  `features` text COMMENT '套餐特性(JSON数组)',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态 1=启用 0=禁用',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='包网平台套餐表';

INSERT INTO `np_turnkey_plan` (`id`, `name`, `slug`, `subtitle`, `setup_fee`, `monthly_fee`, `ggr_share`, `customization`, `server_type`, `support_level`, `is_recommended`, `features`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Shared Edition', 'shared', 'Quick launch for new operators — go live in minutes', '$3,000 - $8,000', '$500 - $1,500', '25% - 40%', 'Configuration-level (Theme / Logo / Language)', 'Shared', 'Ticket support, 48h response', 1, '["One-minute rapid site deployment","Branded lobby with your logo & colors","2,000+ premium games pre-integrated","Multi-language support (15+ languages)","Mobile-responsive design & PWA","Basic CMS & player management","Shared server infrastructure","Standard SSL & DDoS protection","Agent & affiliate system","Basic analytics dashboard","Email & ticket support"]', 1, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 'VIP Dedicated Edition', 'vip-dedicated', 'Full control with dedicated infrastructure — for serious operators', '$15,000 - $50,000', '$2,000 - $5,000', '15% - 25%', 'Full code access, deep customization', 'Dedicated Server', 'Dedicated liaison, 24h response', 0, '["Everything in Shared Edition, plus:","Dedicated server infrastructure","Full source code access","Deep UI/UX customization","Custom game provider integration","White-label mobile apps (iOS & Android)","Advanced anti-fraud & risk control","Real-time analytics & GGR reports","VIP & loyalty program system","Multi-currency wallet system","Dedicated account manager","Priority 24/7 Telegram support","Custom API integrations","Revenue share model available","SLA-backed 99.9% uptime guarantee"]', 2, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 2. np_turnkey_feature - 包网平台核心功能亮点表
-- ============================================================
DROP TABLE IF EXISTS `np_turnkey_feature`;
CREATE TABLE `np_turnkey_feature` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(50) NOT NULL DEFAULT '' COMMENT '图标名称(lucide-react)',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '标题',
  `description` text COMMENT '描述',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='包网平台功能亮点表';

INSERT INTO `np_turnkey_feature` (`id`, `icon`, `title`, `description`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Zap', 'One-Minute Deployment', 'Go live in 60 seconds. Our automated provisioning system creates your branded platform instantly — domain, SSL, database, and Nginx all configured automatically.', 1, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 'Gamepad2', '2,000+ Premium Games', 'Access a vast library of slots, live casino, fish games, poker, and sports betting from top-tier providers — all pre-integrated and ready to play.', 2, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(3, 'Users', 'Multi-Tenant Architecture', 'Our shared platform supports unlimited tenants with complete data isolation. Each operator gets their own branded experience on shared infrastructure.', 3, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(4, 'CreditCard', 'Multi-Payment Gateway', 'Support local bank transfers, e-wallets, USDT/crypto, and international cards. Payment channels are pre-integrated and ready from day one.', 4, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(5, 'BarChart3', 'GGR Analytics & Reports', 'Real-time GGR tracking, revenue share calculations, player analytics, and comprehensive financial reports — all accessible from your admin dashboard.', 5, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(6, 'Smartphone', 'Mobile-First Design', 'Every platform is built mobile-first with responsive design, PWA support, and optional native apps for iOS and Android.', 6, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(7, 'Shield', 'Enterprise Security', 'Bank-grade SSL encryption, DDoS protection, real-time fraud detection, and automated risk management keep your platform and players safe.', 7, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(8, 'Globe', 'Multi-Language & Currency', 'Launch in any market with built-in support for 15+ languages and all major currencies. Localization is included — not an add-on.', 8, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 3. np_turnkey_process - 包网平台上线流程表
-- ============================================================
DROP TABLE IF EXISTS `np_turnkey_process`;
CREATE TABLE `np_turnkey_process` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `step_number` int(11) NOT NULL DEFAULT 0 COMMENT '步骤编号',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '标题',
  `description` text COMMENT '描述',
  `duration` varchar(50) NOT NULL DEFAULT '' COMMENT '预计时间',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='包网平台上线流程表';

INSERT INTO `np_turnkey_process` (`id`, `step_number`, `title`, `description`, `duration`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Consultation', 'Discuss your target market, branding, and business goals. We recommend the best plan for your needs.', '30 min', 1, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 2, 'Agreement & Payment', 'Sign the partnership agreement and complete payment. Provide your logo, brand colors, and domain.', '1 Day', 2, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(3, 3, 'One-Click Setup', 'Our automated system provisions your platform — Nginx, SSL, database, and game integrations configured instantly.', '1 Minute', 3, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(4, 4, 'Brand Customization', 'Apply your logo, color scheme, and language settings. Configure payment channels and game categories.', '1-3 Days', 4, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(5, 5, 'Go Live', 'Final review, domain pointing, and your platform is live. We provide hands-on support during launch.', 'Instant', 5, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 4. np_faq - FAQ常见问题表
-- ============================================================
DROP TABLE IF EXISTS `np_faq`;
CREATE TABLE `np_faq` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL DEFAULT '' COMMENT '分类: general/platform/payment/technical/partnership',
  `question` varchar(500) NOT NULL DEFAULT '' COMMENT '问题',
  `answer` text COMMENT '回答',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态 1=启用 0=禁用',
  `created_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '创建时间',
  `updated_at` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_category` (`category`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='FAQ常见问题表';

INSERT INTO `np_faq` (`id`, `category`, `question`, `answer`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
-- General
(1, 'general', 'What is NovaPlay Gaming?', 'NovaPlay Gaming is a premium B2B gaming technology company specializing in turnkey casino platform development, white-label solutions, and custom game lobby development. We serve operators across Southeast Asia, Africa, Latin America, and global markets.', 1, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(2, 'general', 'What services does NovaPlay offer?', 'We offer three core services: (1) Turnkey Platform — a complete, ready-to-launch online casino platform with one-minute deployment; (2) White-Label Solutions — branded platforms with your identity; (3) Custom Development — fully bespoke game lobbies, game engines, and backend systems built to your exact specifications.', 2, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(3, 'general', 'Which markets does NovaPlay serve?', 'We serve operators globally with a strong focus on Southeast Asia (Myanmar, Thailand, Indonesia, Vietnam, Malaysia), Africa (Nigeria, Kenya), Latin America (Brazil), and emerging markets. Our platforms support 15+ languages and multiple currencies.', 3, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(4, 'general', 'How long has NovaPlay been in business?', 'Our founding team has over 10 years of combined experience in the online gaming industry. NovaPlay was established to bring enterprise-grade technology solutions to operators of all sizes.', 4, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

-- Platform
(5, 'platform', 'How quickly can I launch my platform?', 'With our Turnkey Shared Edition, your platform can be provisioned in just 1 minute through our automated one-click setup system. Brand customization typically takes 1-3 additional days. VIP Dedicated Edition projects take 1-2 weeks for full customization.', 5, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(6, 'platform', 'What is the difference between Shared and VIP Dedicated editions?', 'The Shared Edition runs on shared infrastructure with configuration-level customization (theme, logo, language) — ideal for quick launches. The VIP Dedicated Edition provides a dedicated server, full source code access, deep customization capabilities, and a dedicated account manager — perfect for large-scale operators.', 6, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(7, 'platform', 'How many games are available on the platform?', 'Our platform provides access to 2,000+ premium games from top providers, including slots, live casino, fish games, poker, and sports betting. We continuously add new titles and providers.', 7, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(8, 'platform', 'Can I customize the look and feel of my platform?', 'Absolutely. Shared Edition supports configuration-level customization including logos, color schemes, and language settings. VIP Dedicated Edition offers full code-level customization with deep UI/UX modifications, custom game categories, and unique features.', 8, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(9, 'platform', 'Do you provide mobile apps?', 'Yes. All platforms are mobile-responsive by default with PWA support. VIP Dedicated Edition includes native iOS and Android white-label apps with your branding.', 9, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

-- Payment
(10, 'payment', 'What payment methods are supported?', 'We support a wide range of payment methods including local bank transfers, e-wallets (GCash, GrabPay, OVO, Dana, etc.), cryptocurrency (USDT, BTC, ETH), international credit/debit cards, and region-specific payment solutions.', 10, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(11, 'payment', 'Do you support cryptocurrency payments?', 'Yes. We fully support USDT (TRC-20 & ERC-20), Bitcoin, Ethereum, and other major cryptocurrencies. Crypto payment integration is available on all plans and includes automatic conversion options.', 11, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(12, 'payment', 'How does the GGR revenue share work?', 'GGR (Gross Gaming Revenue) share is calculated as a percentage of your platform net gaming revenue. Shared Edition ranges from 25%-40%, while VIP Dedicated Edition ranges from 15%-25%. The exact rate depends on your plan and negotiated terms.', 12, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

-- Technical
(13, 'technical', 'What technology stack does NovaPlay use?', 'Our platforms are built with React/Vue.js frontends, Node.js/Go backends, MySQL/Redis databases, and deployed on AWS/Alibaba Cloud infrastructure with Docker/Kubernetes orchestration. We use WebSocket for real-time features.', 13, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(14, 'technical', 'How secure is the platform?', 'Security is our top priority. We implement bank-grade SSL encryption, enterprise DDoS protection, real-time fraud detection, IP-based access control, two-factor authentication, and automated risk management systems.', 14, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(15, 'technical', 'What is the platform uptime guarantee?', 'We guarantee 99.9% uptime on our VIP Dedicated Edition with SLA-backed commitments. Our infrastructure uses multi-region deployment, automatic failover, and 24/7 monitoring.', 15, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(16, 'technical', 'How does the one-click setup work?', 'Our automated provisioning system handles everything: it creates a new tenant in the database, configures Nginx with SSL certificates, sets up the domain, loads your brand configuration, and activates all game integrations — all within 60 seconds.', 16, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

-- Partnership
(17, 'partnership', 'What partnership models are available?', 'We offer three partnership models: (1) White Label — launch your branded platform with our technology; (2) Revenue Share — we invest in your success and share revenue; (3) Agency Partner — refer clients and earn commissions.', 17, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(18, 'partnership', 'What are the costs involved?', 'Shared Edition: $3,000-$8,000 setup + $500-$1,500/month + 25%-40% GGR share. VIP Dedicated Edition: $15,000-$50,000 setup + $2,000-$5,000/month + 15%-25% GGR share. Custom quotes available for enterprise requirements.', 18, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(19, 'partnership', 'Do you provide ongoing support after launch?', 'Absolutely. All plans include ongoing technical support, platform maintenance, security updates, and game library updates. VIP Dedicated Edition includes 24/7 priority support via Telegram with a dedicated account manager.', 19, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
(20, 'partnership', 'How do I get started?', 'Simply contact us through our website, Telegram (@novaplaygaming), or email (business@novaplaygaming.com). We will schedule a consultation to understand your needs and provide a tailored proposal within 24 hours.', 20, 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

SET FOREIGN_KEY_CHECKS = 1;
