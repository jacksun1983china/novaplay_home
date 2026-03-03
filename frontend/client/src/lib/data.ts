// Game and Hall data extracted from build artifact
// ============================================================

export interface Game {
  id: number;
  slug: string;
  name: string;
  iconUrl: string;
  category: "Slot" | "Fish" | "Casino" | "CardGames";
  description: string;
  features: string[];
  screenshots: string[];
  url: string;
}

export interface Hall {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  screenshots: string[];
  url: string;
  tags: string[];
  ctaType?: "coming_soon" | "no_demo";
  comingSoon?: boolean;
  features: string[];
}

export const games: Game[] = [
  {
    id: 1,
    slug: "fortune-dragon",
    name: "Fortune Dragon",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/bzGoiLaQzrosgvVN.png",
    category: "Slot",
    description: "Embark on a legendary journey with Fortune Dragon — a high-volatility slot featuring cascading reels, multiplier wilds, and a dragon-themed free spins bonus round that can award up to 5,000x your stake.",
    features: ["Cascading Reels", "Dragon Wild Multipliers", "Free Spins Bonus", "5,000x Max Win", "96.5% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 2,
    slug: "golden-phoenix",
    name: "Golden Phoenix",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/TCFGZxSdwkeBZPvC.png",
    category: "Slot",
    description: "Rise from the ashes with Golden Phoenix — a stunning 6-reel slot packed with expanding symbols, phoenix respins, and a jackpot wheel bonus that keeps players on the edge of their seats.",
    features: ["6-Reel Layout", "Expanding Symbols", "Phoenix Respins", "Jackpot Wheel", "97.1% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 12,
    slug: "thunder-strike",
    name: "Thunder Strike",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/ZuRwnCoiopTRriWJ.png",
    category: "Slot",
    description: "Feel the power of the storm in Thunder Strike — an electrifying slot with lightning wilds that split across the reels, delivering massive chain reactions and a thunderstorm free spins feature.",
    features: ["Lightning Wild Splits", "Chain Reaction Wins", "Thunderstorm Free Spins", "Sticky Wilds", "96.8% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 13,
    slug: "lucky-gems",
    name: "Lucky Gems",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/LNGnEqxnweitJJys.png",
    category: "Slot",
    description: "Dazzle your way to riches with Lucky Gems — a vibrant gem-matching slot with cluster pays, gem explosion mechanics, and a rainbow jackpot that rewards the luckiest players.",
    features: ["Cluster Pays", "Gem Explosion Mechanic", "Rainbow Jackpot", "Tumble Feature", "96.3% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 14,
    slug: "ocean-treasure",
    name: "Ocean Treasure",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/laHxDBAGGijzLgxM.png",
    category: "Fish",
    description: "Dive into the deep blue with Ocean Treasure — an action-packed fishing game featuring 8 cannon types, rare boss fish worth massive multipliers, and a treasure chest bonus round.",
    features: ["8 Cannon Types", "Boss Fish Encounters", "Treasure Chest Bonus", "Multiplier Fish", "Cooperative Play"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 15,
    slug: "wild-safari",
    name: "Wild Safari",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/ooaVLFdoQRnmNhGd.png",
    category: "Slot",
    description: "Venture into the wild with Wild Safari — a 5-reel adventure slot featuring stampede respins, animal stacked wilds, and a safari free spins round with roaming multipliers.",
    features: ["Stampede Respins", "Stacked Animal Wilds", "Safari Free Spins", "Roaming Multipliers", "96.6% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 20,
    slug: "royal-flush",
    name: "Royal Flush",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/JQqhCFCEyXiTVyDF.png",
    category: "CardGames",
    description: "Master the art of the Royal Flush — a premium video poker experience with multiple hand variants, side bets, and a progressive jackpot triggered by the ultimate royal flush hand.",
    features: ["Multiple Poker Variants", "Side Bet Options", "Progressive Jackpot", "Auto Hold Feature", "99.5% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 100,
    slug: "mega-jackpot",
    name: "Mega Jackpot",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/oUOKURjPjgZIpRdN.png",
    category: "Casino",
    description: "Chase life-changing wins with Mega Jackpot — a network-linked progressive slot where four jackpot tiers accumulate across thousands of players, with the Grand Jackpot regularly reaching 7-figure sums.",
    features: ["4-Tier Progressive Jackpot", "Network-Linked Pool", "Jackpot Wheel Bonus", "Any-Bet Trigger", "95.9% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 101,
    slug: "dragon-ball",
    name: "Dragon Ball",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/LJqCvCUYSfiOBQUp.png",
    category: "Slot",
    description: "Collect all seven dragon balls to summon the ultimate bonus in Dragon Ball — a feature-rich slot with scatter collect mechanics, wish bonus rounds, and a dragon free spins multiplier trail.",
    features: ["Dragon Ball Collect Mechanic", "Wish Bonus Round", "Multiplier Trail", "Dragon Free Spins", "96.9% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 102,
    slug: "neon-nights",
    name: "Neon Nights",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/TvwAuigmnbIvotCx.png",
    category: "Slot",
    description: "Light up the night with Neon Nights — a cyberpunk-themed slot with neon wild reels, city multiplier maps, and an after-dark free spins feature where every spin can trigger a city-wide jackpot.",
    features: ["Neon Wild Reels", "City Multiplier Map", "After-Dark Free Spins", "City-Wide Jackpot", "96.7% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 103,
    slug: "pirates-gold",
    name: "Pirate's Gold",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/QbTIUsETawgKfyXg.png",
    category: "Slot",
    description: "Set sail for fortune with Pirate's Gold — a swashbuckling adventure slot featuring treasure map bonus rounds, cannon blast wilds, and a buried treasure jackpot that rewards the boldest pirates.",
    features: ["Treasure Map Bonus", "Cannon Blast Wilds", "Buried Treasure Jackpot", "Ship Battle Feature", "96.4% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 104,
    slug: "mystic-forest",
    name: "Mystic Forest",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/dXQJWupiDxrSrgNi.png",
    category: "Slot",
    description: "Wander through the enchanted Mystic Forest — a magical slot with fairy tale wilds, enchanted free spins, and a forest spirit bonus that transforms low-value symbols into high-paying creatures.",
    features: ["Fairy Tale Wilds", "Enchanted Free Spins", "Forest Spirit Bonus", "Symbol Transformation", "96.2% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 105,
    slug: "space-odyssey",
    name: "Space Odyssey",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/hYQgxubzsOAYVejY.png",
    category: "Slot",
    description: "Blast off into the cosmos with Space Odyssey — a sci-fi slot featuring warp speed respins, alien invasion wilds, and a galaxy jackpot bonus where players navigate through star systems to claim prizes.",
    features: ["Warp Speed Respins", "Alien Invasion Wilds", "Galaxy Jackpot Bonus", "Star System Navigation", "96.8% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 106,
    slug: "candy-burst",
    name: "Candy Burst",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/LABokxwMruKWyxRn.png",
    category: "Slot",
    description: "Satisfy your sweet tooth with Candy Burst — a colorful cascade slot where matching candies explode in chain reactions, building up a sugar rush multiplier that can sweeten wins up to 10,000x.",
    features: ["Candy Cascade Mechanic", "Chain Reaction Explosions", "Sugar Rush Multiplier", "10,000x Max Win", "96.5% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 107,
    slug: "fire-warrior",
    name: "Fire Warrior",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/tRVZmSroiJcOVVeU.png",
    category: "Slot",
    description: "Channel the power of the Fire Warrior — a blazing action slot where the warrior hero triggers sword slash wilds, fire breath free spins, and an epic boss battle bonus with escalating multipliers.",
    features: ["Sword Slash Wilds", "Fire Breath Free Spins", "Boss Battle Bonus", "Escalating Multipliers", "96.6% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
  {
    id: 108,
    slug: "crystal-cave",
    name: "Crystal Cave",
    iconUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/CmgTzkmCcYXggoUy.png",
    category: "Casino",
    description: "Explore the depths of Crystal Cave — a dazzling roulette-inspired casino game where crystal gems replace numbers, gem clusters trigger bonus spins, and the rare rainbow crystal awards the ultimate jackpot.",
    features: ["Crystal Gem Roulette", "Gem Cluster Bonus", "Rainbow Crystal Jackpot", "Multi-Table Support", "97.3% RTP"],
    screenshots: [],
    url: "https://www.youmegame.com",
  },
];

export const halls: Hall[] = [
  {
    id: 1,
    slug: "youme-lightning",
    name: "YouMe Lightning",
    tagline: "Multi-genre integrated lobby · Lightning theme",
    description: "YouMe Lightning is a flagship multi-genre gaming platform featuring a bold lightning visual theme. It integrates Slots, Fish Games, Poker, and Live Casino under one seamless lobby, delivering an electrifying experience for players across Southeast Asia.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/DpyWNaczAalIYPDa.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/AQOmsxGqkYzQorPw.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/KaKAmtrwdADmTtKY.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/iqmosDLyEOaQlUXq.jpg"],
    url: "https://www.youmegame.com",
    tags: ["Slot", "Fish", "Poker", "Casino"],
    ctaType: "coming_soon",
    features: ["Multi-genre integrated lobby", "Lightning visual theme", "Seamless cross-game navigation", "Mobile-first responsive design", "Multi-language support", "Real-time jackpot display"],
  },
  {
    id: 2,
    slug: "youmegame2026",
    name: "YouMe Game 2026",
    tagline: "Global multi-language platform · 2026 Flagship",
    description: "YouMe Game 2026 is our latest flagship platform built for global markets. It supports multiple languages and currencies, features a modern UI with smooth animations, and offers a comprehensive game library spanning Slots, Video Games, Fishing, and Poker.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/TQeaOcjqlFLnXZTG.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/TfwGcLxfKNamxQkd.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/NOzNfpavpAgFSJsU.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/YHsyhMYFUCXezVTW.jpg"],
    url: "https://www.youmegame.com",
    tags: ["Slot", "VideoGames", "Fishing", "Poker"],
    features: ["Global multi-language support", "Multi-currency wallet", "Modern animated UI", "Comprehensive game library", "Advanced player analytics", "24/7 customer support integration"],
  },
  {
    id: 3,
    slug: "huang-jia-yong-li",
    name: "皇家永利",
    tagline: "Royal classic lobby · Mahjong & Jackpot",
    description: "皇家永利 (Huang Jia Yong Li) is a premium Chinese-style gaming platform featuring a grand royal aesthetic. It showcases Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck, and a multi-Jackpot display, delivering an authentic and immersive experience for Chinese-speaking players.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/xKrtqYsejXYlKtph.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/cbMomFATPHMOohnt.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/moOCyeLIOrZhZnLI.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/wTuvfvKGLbtyAdkc.jpg"],
    url: "https://hjyl888.one/",
    tags: ["Mahjong", "Jackpot", "Classic", "Casino"],
    features: ["Royal Chinese visual theme", "Multi-Jackpot live display", "Mahjong Ways collection", "Fortune Rabbit & Dragon Tiger", "Localized Chinese interface", "CDKey exchange system"],
  },
  {
    id: 4,
    slug: "youme-myanmar",
    name: "YouMe Myanmar",
    tagline: "Myanmar market exclusive · Premium slots",
    description: "YouMe Myanmar is a market-exclusive platform tailored specifically for Myanmar players. It features a premium lobby design with Burmese language support, and a curated selection of Slot and Jackpot games including African Buffalo, Gates of Olympus, and Emperor's Power.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/ooQUngAzBOJCvhqH.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/njKyscVFpwGDigjH.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/JbFtARqXhlFOHdPL.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/RtTWlIQeZvNxqFJV.jpg"],
    url: "https://mm.youmegame.com",
    tags: ["Slot", "Jackpot", "Myanmar"],
    features: ["Myanmar market exclusive", "Burmese language support", "Premium lobby design", "Curated Slot & Jackpot selection", "Local payment integration", "Dedicated support team"],
  },
  {
    id: 5,
    slug: "youme-casino",
    name: "YouMe Casino",
    tagline: "Full-category casino platform · Elegant design",
    description: "YouMe Casino is a full-category gaming platform with an elegant dealer-themed design. It features Slots, Fish Games, and Other categories with titles like 88 Fortune, Golden Cicada, Cash Machine, Zombie Awaken, KingKong's Rampage, and FireKirin.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/TipeiBGpVbkVxjGb.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/RNAyeUUgVOczsNEe.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/FOIdcaiXzuaPhlms.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/CHYdVUwSYegTGduQ.jpg"],
    url: "https://www.youmeslot.com",
    tags: ["Slot", "Fish", "Casino", "All Games"],
    features: ["Full-category game coverage", "Elegant dealer visual theme", "All-in-one lobby", "Diverse slot collection", "Fish game section", "Store & mail system"],
  },
  {
    id: 6,
    slug: "ngwinbet",
    name: "NgWinBet",
    tagline: "African market platform · Sports & Slots",
    description: "NgWinBet is a dynamic gaming platform designed for the African market. Featuring a vibrant sports-inspired design with a football stadium backdrop, it offers a rich selection of Slots, Poker, and Fishing games including Lucky Soccer, PokerWin, Hot Spin, African Buffalo, and Mahjong Ways 2.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/yQGfrbeXUDJHvMcC.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/VHYnxZworsZGEsKp.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/bNlfurBvGZuUsHbX.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/QcFKHtrkRyWPYDOL.jpg"],
    url: "https://www.ngwinbet.com",
    tags: ["Slot", "Poker", "Fish", "Sports"],
    features: ["African market optimized", "Sports-inspired visual theme", "Football stadium backdrop", "Rich slot & poker selection", "Mahjong Ways 2 featured", "Naira currency support"],
  },
  {
    id: 7,
    slug: "lucky-juwa",
    name: "LuckyJUWA",
    tagline: "US market gaming platform · Neon style",
    description: "LuckyJUWA is a vibrant gaming platform targeting the US market. With a neon-lit futuristic aesthetic, it features a curated selection of popular titles including Golden Cicada, Zombie Awaken, King Kong's Rampage, and FireKirin, alongside a live Jackpot Grand display.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/OyJIbkLqHiftMIvH.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/TNorJLAGCwebTHsk.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/NkTAaOTzgFEvcgUQ.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/oXbBsMRKLADdqcJu.jpg"],
    url: "https://juwa.youmeslot.com",
    tags: ["Slot", "Fish", "Jackpot", "US Market"],
    features: ["US market focused", "Neon futuristic visual theme", "Live Jackpot Grand display", "Golden Cicada & FireKirin", "King Kong's Rampage featured", "Dollar currency support"],
  },
  {
    id: 8,
    slug: "royal-dream",
    name: "Royal Dream",
    tagline: "Indonesian market platform · Event-driven lobby",
    description: "Royal Dream is a feature-rich gaming platform designed for the Indonesian market. It showcases popular Pragmatic Play titles including Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess, and Gates of Olympus, with a live RTP display and event-driven lobby.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/AqYTxLTSOEOzFqar.jpg",
    screenshots: ["https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/rYcxNzqlamVbKsWa.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/PHiUqPvjbJgHNMej.jpg", "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/JaiRwGxlRSRAdCYd.jpg"],
    url: "https://www.youmegame.com",
    tags: ["Slot", "Pragmatic Play", "Indonesia"],
    ctaType: "no_demo",
    features: ["Indonesian market optimized", "Live RTP display", "Pragmatic Play featured titles", "Event Domino promotion", "Ranking Jackpot system", "Rupiah currency support"],
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getHallBySlug(slug: string): Hall | undefined {
  return halls.find((h) => h.slug === slug);
}

// Image URLs
export const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/DfjYWLsAwhMonKRE.png";
export const LOGO_DARK_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663344718052/DfjYWLsAwhMonKREbVqvMQ.png";
export const HERO_BG_URL = "https://private-us-east-1.manuscdn.com/sessionFile/LBDmBL4VTSXlwrsqVrO8KD/sandbox/PX5aguE3eYpapuhuXxJoAM-img-1_1771747245000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEJEbUJMNFZUU1hsd3JzcVZyTzhLRC9zYW5kYm94L1BYNWFndUUzZVlwYXB1aHVYeEpvQU0taW1nLTFfMTc3MTc0NzI0NTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=diuvlI15rSXt4VLstqLEAw78m~3pDGCDeLwsm5EJe0dihoBefCJ50PBRaSOndzPISFTLLwfMZlerDji8ooFskTimhN~BCj1fGaqWfWQMBYGN74e21tIHBIz928jcCFvfCMbGERw2ONEzv~npEdD1kPNDiwJhgywrP1fmz46pneNxy1Wy3wS9A3OHlkWRuNF9TmJVSU0ChoqWxCglHCyq7XXmybRQPsMCFKfgblZpfnDB2Y-WOtYqeptkYqr2CtifUXiE2P25Fd0vMGHoDqROCDVlNLZieNEOocfQVaKKiZi4fPcZYS2FJ6Gbt6ifVUQgotEMuQF0D3y6Oupp~cuF5Q__";
export const SECTION_DIVIDER_URL = "https://private-us-east-1.manuscdn.com/sessionFile/LBDmBL4VTSXlwrsqVrO8KD/sandbox/PX5aguE3eYpapuhuXxJoAM-img-2_1771747244000_na1fn_c2VjdGlvbi1kaXZpZGVy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEJEbUJMNFZUU1hsd3JzcVZyTzhLRC9zYW5kYm94L1BYNWFndUUzZVlwYXB1aHVYeEpvQU0taW1nLTJfMTc3MTc0NzI0NDAwMF9uYTFmbl9jMlZqZEdsdmJpMWthWFpwWkdWeS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gM3ukXkq5dKUx9p00Ff5itPEZJIlGEtZnyO02ColSSr822HOT-SoB-YAvQRTK88P5eNqZFnMmhAftuNLkse6iK9Yj~wGINRi9KUVwF8xsUw-UdfSeF8-f-4P5VjlcRpfhxofeXcImiSYST3N2xa9NvIGLGQ4FkACjTwBcixMDryn2Ty4Oqz4ga9wIFhn6rixxLRftnugFFnqjgLiqlAoEEQ913O6i~aAzVu3GgkQqtkWYS6yQlpVNLaUrROWxGox5JJDlI6qPBx35~ah82B-7XnYM15hCVdYFjnbKq8Fzt8DnEZrp0aVXKPlmSiAJF13L7-znClKO3n1XlBp8Bsbgg__";
export const CONTACT_BG_URL = "https://private-us-east-1.manuscdn.com/sessionFile/LBDmBL4VTSXlwrsqVrO8KD/sandbox/PX5aguE3eYpapuhuXxJoAM-img-3_1771747241000_na1fn_Y29udGFjdC1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEJEbUJMNFZUU1hsd3JzcVZyTzhLRC9zYW5kYm94L1BYNWFndUUzZVlwYXB1aHVYeEpvQU0taW1nLTNfMTc3MTc0NzI0MTAwMF9uYTFmbl9ZMjl1ZEdGamRDMWlady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jPQAGY0SwB2hb-rZLGU79TyQbZNIrbDzQu2nNn-LVga9rsZpAEeDUFle5DvZhn9jgLjxZgTRvapXxv1hy40FXZOPu9ew5-gzHccBXynae5It3Gmj247gJIzAYTLEb3R8Enr7ZBFALy8i75VrVH8wNAV0dCyxo93URReQt-ZUhMlcWu0jn~ybfPNXKfXLpHrcbLH44ToGgoKtECK5SfXm1-oBKIWiSDBurYar5-wfFcF1E8xGuZ8BpgipbkB5QqGa0tRzGaJKaeyK9LI2jB881Z-Dau-GOHGPgIibfD8PgbaD~qscREixLR4o6ymhzsyyRrJEiK8OgkzlXvtaxO-uFA__";

// Tech stack
export const techStack: string[] = ["React / Vue.js", "Node.js / Go", "MySQL / Redis", "WebSocket", "AWS / Alibaba Cloud", "Docker / K8s", "Unity / Cocos", "H5 / PWA"];

// Game category styles
export const gameCategoryStyles: Record<string, string> = {
  Slot: "text-[#F5D76E] border-[#C9A227]/40 bg-[#C9A227]/10",
  Fish: "text-[#7DD3FC] border-[#38BDF8]/40 bg-[#38BDF8]/10",
  Casino: "text-[#F9A8D4] border-[#F472B6]/40 bg-[#F472B6]/10",
  CardGames: "text-[#86EFAC] border-[#4ADE80]/40 bg-[#4ADE80]/10",
  Poker: "text-[#86EFAC] border-[#4ADE80]/40 bg-[#4ADE80]/10",
};

// All games (full list, alias for games)
export const allGames = games;

// Featured halls (first 8)
export const featuredHalls = halls.slice(0, 8);

// Find hall by slug
export function findHallBySlug(slug: string): Hall | undefined {
  return halls.find((h) => h.slug === slug);
}

// Hall translations (multi-language details)
export interface HallTranslation {
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export const hallTranslations: Record<string, Record<string, HallTranslation>> = {
  "youme-lightning": {
    "en": {
      "name": "YouMe Lightning",
      "tagline": "Multi-genre integrated lobby · Lightning theme",
      "description": "YouMe Lightning is a flagship multi-genre gaming platform featuring a bold lightning visual theme. It integrates Slots, Fish Games, Poker, and Live Casino under one seamless lobby, delivering an electrifying experience for players across Southeast Asia.",
      "features": [
        "Multi-genre integrated lobby",
        "Lightning visual theme",
        "Seamless cross-game navigation",
        "Mobile-first responsive design",
        "Multi-language support",
        "Real-time jackpot display"
      ]
    },
    "zh": {
      "name": "YouMe Lightning",
      "tagline": "多品类综合大厅 · 闪电主题",
      "description": "YouMe Lightning 是旗舰级多品类游戏平台，采用大胆的闪电视觉主题。它将老虎机、捕鱼、扑克和真人娱乐场整合在一个无缝大厅中，为东南亚玩家带来电光火石般的游戏体验。",
      "features": [
        "多品类综合大厅",
        "闪电视觉主题",
        "跨游戏无缝导航",
        "移动端优先响应式设计",
        "多语言支持",
        "实时奖池显示"
      ]
    },
    "ms": {
      "name": "YouMe Lightning",
      "tagline": "Lobi pelbagai genre · Tema kilat",
      "description": "YouMe Lightning ialah platform permainan pelbagai genre bertema kilat yang menggabungkan Slot, Permainan Ikan, Poker, dan Kasino Langsung dalam satu lobi yang lancar untuk pemain Asia Tenggara.",
      "features": [
        "Lobi pelbagai genre bersepadu",
        "Tema visual kilat",
        "Navigasi silang permainan lancar",
        "Reka bentuk responsif utama mudah alih",
        "Sokongan pelbagai bahasa",
        "Paparan jackpot masa nyata"
      ]
    },
    "id": {
      "name": "YouMe Lightning",
      "tagline": "Lobi multi-genre · Tema petir",
      "description": "YouMe Lightning adalah platform gaming multi-genre unggulan bertema petir yang memadukan Slot, Game Ikan, Poker, dan Live Casino dalam satu lobi mulus untuk pemain Asia Tenggara.",
      "features": [
        "Lobi multi-genre terpadu",
        "Tema visual petir",
        "Navigasi lintas game mulus",
        "Desain responsif mobile-first",
        "Dukungan multi-bahasa",
        "Tampilan jackpot real-time"
      ]
    },
    "th": {
      "name": "YouMe Lightning",
      "tagline": "ล็อบบี้หลายประเภท · ธีมสายฟ้า",
      "description": "YouMe Lightning คือแพลตฟอร์มเกมหลายประเภทระดับเรือธงที่มีธีมสายฟ้าอันโดดเด่น รวมสล็อต เกมปลา โป๊กเกอร์ และคาสิโนสด ไว้ในล็อบบี้เดียว",
      "features": [
        "ล็อบบี้รวมหลายประเภท",
        "ธีมภาพสายฟ้า",
        "การนำทางข้ามเกมที่ราบรื่น",
        "ดีไซน์ตอบสนองมือถือก่อน",
        "รองรับหลายภาษา",
        "แสดงแจ็คพอตแบบเรียลไทม์"
      ]
    },
    "my": {
      "name": "YouMe Lightning",
      "tagline": "ဂိမ်းအမျိုးအစားစုံ လောဘီ · လျှပ်စီးဓာတ်ပုံ",
      "description": "YouMe Lightning သည် လျှပ်စီးဓာတ်ပုံ ဒီဇိုင်းဖြင့် Slot၊ ငါးဖမ်းဂိမ်း၊ Poker နှင့် Live Casino တို့ကို တစ်နေရာတည်းတွင် ပေါင်းစပ်ထားသော ထိပ်တန်းဂိမ်းပလပ်ဖောင်းတစ်ခုဖြစ်သည်။",
      "features": [
        "ဂိမ်းအမျိုးအစားစုံ လောဘီ",
        "လျှပ်စီးဓာတ်ပုံ ဒီဇိုင်း",
        "ဂိမ်းအကြား ချောမွေ့သောသွားလာမှု",
        "မိုဘိုင်းဦးစားပေး ဒီဇိုင်း",
        "ဘာသာစကားစုံ ပံ့ပိုးမှု",
        "အချိန်နှင့်တပြေးညီ Jackpot ပြသမှု"
      ]
    },
    "pt": {
      "name": "YouMe Lightning",
      "tagline": "Lobby multi-gênero · Tema relâmpago",
      "description": "YouMe Lightning é uma plataforma de jogos multi-gênero com tema relâmpago que integra Slots, Jogos de Pesca, Poker e Cassino Ao Vivo em um único lobby para jogadores do Sudeste Asiático.",
      "features": [
        "Lobby multi-gênero integrado",
        "Tema visual relâmpago",
        "Navegação entre jogos fluida",
        "Design responsivo mobile-first",
        "Suporte multilíngue",
        "Exibição de jackpot em tempo real"
      ]
    },
    "hi": {
      "name": "YouMe Lightning",
      "tagline": "मल्टी-जेनर लॉबी · बिजली थीम",
      "description": "YouMe Lightning एक प्रमुख मल्टी-जेनर गेमिंग प्लेटफ़ॉर्म है जिसमें बोल्ड बिजली विज़ुअल थीम है। यह स्लॉट, फिश गेम्स, पोकर और लाइव कैसीनो को एक सहज लॉबी में एकीकृत करता है।",
      "features": [
        "मल्टी-जेनर एकीकृत लॉबी",
        "बिजली विज़ुअल थीम",
        "क्रॉस-गेम नेविगेशन",
        "मोबाइल-फर्स्ट डिज़ाइन",
        "बहुभाषी समर्थन",
        "रियल-टाइम जैकपॉट डिस्प्ले"
      ]
    },
    "vi": {
      "name": "YouMe Lightning",
      "tagline": "Sảnh đa thể loại · Chủ đề sấm sét",
      "description": "YouMe Lightning là nền tảng chơi game đa thể loại hàng đầu với chủ đề sấm sét ấn tượng, tích hợp Slot, Game Cá, Poker và Casino Trực Tiếp trong một sảnh duy nhất.",
      "features": [
        "Sảnh đa thể loại tích hợp",
        "Chủ đề hình ảnh sấm sét",
        "Điều hướng liên game mượt mà",
        "Thiết kế ưu tiên di động",
        "Hỗ trợ đa ngôn ngữ",
        "Hiển thị jackpot thời gian thực"
      ]
    },
    "ru": {
      "name": "YouMe Lightning",
      "tagline": "Многожанровое лобби · Тема молнии",
      "description": "YouMe Lightning — флагманская многожанровая игровая платформа с темой молнии, объединяющая Слоты, Рыбалку, Покер и Живое Казино в одном лобби для игроков Юго-Восточной Азии.",
      "features": [
        "Многожанровое лобби",
        "Тема визуальной молнии",
        "Плавная навигация между играми",
        "Дизайн с приоритетом мобильных",
        "Многоязычная поддержка",
        "Отображение джекпота в реальном времени"
      ]
    },
    "ko": {
      "name": "YouMe Lightning",
      "tagline": "멀티 장르 로비 · 번개 테마",
      "description": "YouMe Lightning은 번개 비주얼 테마를 특징으로 하는 플래그십 멀티 장르 게임 플랫폼입니다. 슬롯, 낚시 게임, 포커, 라이브 카지노를 하나의 로비에 통합했습니다.",
      "features": [
        "멀티 장르 통합 로비",
        "번개 비주얼 테마",
        "게임 간 원활한 이동",
        "모바일 우선 반응형 디자인",
        "다국어 지원",
        "실시간 잭팟 표시"
      ]
    },
    "ja": {
      "name": "YouMe Lightning",
      "tagline": "マルチジャンルロビー · ライトニングテーマ",
      "description": "YouMe Lightningは、大胆なライトニングビジュアルテーマを特徴とするフラッグシップのマルチジャンルゲームプラットフォームです。スロット、フィッシュゲーム、ポーカー、ライブカジノを1つのロビーに統合しています。",
      "features": [
        "マルチジャンル統合ロビー",
        "ライトニングビジュアルテーマ",
        "ゲーム間シームレスナビゲーション",
        "モバイルファーストデザイン",
        "多言語サポート",
        "リアルタイムジャックポット表示"
      ]
    },
    "ar": {
      "name": "YouMe Lightning",
      "tagline": "لوبي متعدد الأنواع · ثيم البرق",
      "description": "YouMe Lightning منصة ألعاب متعددة الأنواع تتميز بثيم البرق الجريء، تجمع السلوت والصيد والبوكر والكازينو المباشر في لوبي واحد سلس للاعبين في جنوب شرق آسيا.",
      "features": [
        "لوبي متكامل متعدد الأنواع",
        "ثيم بصري البرق",
        "تنقل سلس بين الألعاب",
        "تصميم متجاوب للجوال أولاً",
        "دعم متعدد اللغات",
        "عرض الجاكبوت في الوقت الفعلي"
      ]
    },
    "fr": {
      "name": "YouMe Lightning",
      "tagline": "Lobby multi-genre · Thème éclair",
      "description": "YouMe Lightning est une plateforme de jeux multi-genre phare avec un thème visuel éclair audacieux, intégrant Slots, Jeux de Pêche, Poker et Casino en Direct dans un seul lobby.",
      "features": [
        "Lobby multi-genre intégré",
        "Thème visuel éclair",
        "Navigation fluide entre les jeux",
        "Design responsive mobile-first",
        "Support multilingue",
        "Affichage jackpot en temps réel"
      ]
    },
    "es": {
      "name": "YouMe Lightning",
      "tagline": "Lobby multi-género · Tema relámpago",
      "description": "YouMe Lightning es una plataforma de juegos multi-género insignia con un audaz tema visual de relámpago, que integra Slots, Juegos de Pesca, Póker y Casino en Vivo en un único lobby.",
      "features": [
        "Lobby multi-género integrado",
        "Tema visual relámpago",
        "Navegación fluida entre juegos",
        "Diseño responsive mobile-first",
        "Soporte multilingüe",
        "Visualización de jackpot en tiempo real"
      ]
    }
  },
  "youmegame2026": {
    "en": {
      "name": "YouMe Game 2026",
      "tagline": "Global multi-language platform · 2026 Flagship",
      "description": "YouMe Game 2026 is our latest flagship platform built for global markets. It supports multiple languages and currencies, features a modern UI with smooth animations, and offers a comprehensive game library spanning Slots, Video Games, Fishing, and Poker.",
      "features": [
        "Global multi-language support",
        "Multi-currency wallet",
        "Modern animated UI",
        "Comprehensive game library",
        "Advanced player analytics",
        "24/7 customer support integration"
      ]
    },
    "zh": {
      "name": "YouMe Game 2026",
      "tagline": "全球多语言平台 · 2026旗舰版",
      "description": "YouMe Game 2026 是我们为全球市场打造的最新旗舰平台，支持多语言和多货币，拥有流畅动画的现代UI，提供涵盖老虎机、视频游戏、捕鱼和扑克的全面游戏库。",
      "features": [
        "全球多语言支持",
        "多货币钱包",
        "现代动画UI",
        "全面游戏库",
        "高级玩家数据分析",
        "7×24小时客服集成"
      ]
    },
    "ms": {
      "name": "YouMe Game 2026",
      "tagline": "Platform pelbagai bahasa global · Unggulan 2026",
      "description": "YouMe Game 2026 ialah platform unggulan terbaru kami untuk pasaran global, menyokong pelbagai bahasa dan mata wang dengan UI moden dan pustaka permainan komprehensif.",
      "features": [
        "Sokongan pelbagai bahasa global",
        "Dompet pelbagai mata wang",
        "UI animasi moden",
        "Pustaka permainan komprehensif",
        "Analitik pemain lanjutan",
        "Integrasi sokongan pelanggan 24/7"
      ]
    },
    "id": {
      "name": "YouMe Game 2026",
      "tagline": "Platform multi-bahasa global · Unggulan 2026",
      "description": "YouMe Game 2026 adalah platform unggulan terbaru kami untuk pasar global, mendukung berbagai bahasa dan mata uang dengan UI modern dan perpustakaan game yang komprehensif.",
      "features": [
        "Dukungan multi-bahasa global",
        "Dompet multi-mata uang",
        "UI animasi modern",
        "Perpustakaan game komprehensif",
        "Analitik pemain lanjutan",
        "Integrasi dukungan pelanggan 24/7"
      ]
    },
    "th": {
      "name": "YouMe Game 2026",
      "tagline": "แพลตฟอร์มหลายภาษาระดับโลก · เรือธง 2026",
      "description": "YouMe Game 2026 คือแพลตฟอร์มเรือธงล่าสุดของเราสำหรับตลาดโลก รองรับหลายภาษาและสกุลเงิน พร้อม UI สมัยใหม่และคลังเกมครบครัน",
      "features": [
        "รองรับหลายภาษาระดับโลก",
        "กระเป๋าเงินหลายสกุล",
        "UI แอนิเมชันสมัยใหม่",
        "คลังเกมครบครัน",
        "การวิเคราะห์ผู้เล่นขั้นสูง",
        "การสนับสนุนลูกค้า 24/7"
      ]
    },
    "my": {
      "name": "YouMe Game 2026",
      "tagline": "ကမ္ဘာ့ဘာသာစကားစုံ ပလပ်ဖောင်း · 2026 ထိပ်တန်း",
      "description": "YouMe Game 2026 သည် ကမ္ဘာ့ဈေးကွက်အတွက် ဘာသာစကားစုံ၊ ငွေကြေးစုံ ပံ့ပိုးမှုဖြင့် ခေတ်မီ UI နှင့် ဂိမ်းစုံ ပေးဆောင်သော နောက်ဆုံးထွက် ထိပ်တန်းပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "ကမ္ဘာ့ဘာသာစကားစုံ ပံ့ပိုးမှု",
        "ငွေကြေးစုံ ပိုက်ဆံအိတ်",
        "ခေတ်မီ Animation UI",
        "ဂိမ်းစုံ စာကြည့်တိုက်",
        "အဆင့်မြင့် ကစားသမားဆိုင်ရာ ခွဲခြမ်းစိတ်ဖြာမှု",
        "24/7 ဖောက်သည်ဝန်ဆောင်မှု"
      ]
    },
    "pt": {
      "name": "YouMe Game 2026",
      "tagline": "Plataforma multilíngue global · Carro-chefe 2026",
      "description": "YouMe Game 2026 é nossa mais recente plataforma principal para mercados globais, com suporte a múltiplos idiomas e moedas, UI moderna com animações e biblioteca de jogos abrangente.",
      "features": [
        "Suporte multilíngue global",
        "Carteira multi-moeda",
        "UI animada moderna",
        "Biblioteca de jogos abrangente",
        "Análise avançada de jogadores",
        "Integração de suporte 24/7"
      ]
    },
    "hi": {
      "name": "YouMe Game 2026",
      "tagline": "वैश्विक बहुभाषी प्लेटफ़ॉर्म · 2026 फ्लैगशिप",
      "description": "YouMe Game 2026 हमारा नवीनतम फ्लैगशिप प्लेटफ़ॉर्म है जो वैश्विक बाज़ारों के लिए बनाया गया है। यह कई भाषाओं और मुद्राओं का समर्थन करता है और व्यापक गेम लाइब्रेरी प्रदान करता है।",
      "features": [
        "वैश्विक बहुभाषी समर्थन",
        "मल्टी-करेंसी वॉलेट",
        "आधुनिक एनिमेटेड UI",
        "व्यापक गेम लाइब्रेरी",
        "उन्नत खिलाड़ी विश्लेषण",
        "24/7 ग्राहक सहायता"
      ]
    },
    "vi": {
      "name": "YouMe Game 2026",
      "tagline": "Nền tảng đa ngôn ngữ toàn cầu · Hàng đầu 2026",
      "description": "YouMe Game 2026 là nền tảng hàng đầu mới nhất của chúng tôi dành cho thị trường toàn cầu, hỗ trợ nhiều ngôn ngữ và tiền tệ với giao diện hiện đại và thư viện game toàn diện.",
      "features": [
        "Hỗ trợ đa ngôn ngữ toàn cầu",
        "Ví đa tiền tệ",
        "Giao diện hoạt hình hiện đại",
        "Thư viện game toàn diện",
        "Phân tích người chơi nâng cao",
        "Tích hợp hỗ trợ 24/7"
      ]
    },
    "ru": {
      "name": "YouMe Game 2026",
      "tagline": "Глобальная многоязычная платформа · Флагман 2026",
      "description": "YouMe Game 2026 — наша новейшая флагманская платформа для глобальных рынков с поддержкой множества языков и валют, современным UI и обширной библиотекой игр.",
      "features": [
        "Глобальная многоязычная поддержка",
        "Мультивалютный кошелёк",
        "Современный анимированный UI",
        "Обширная библиотека игр",
        "Расширенная аналитика игроков",
        "Поддержка клиентов 24/7"
      ]
    },
    "ko": {
      "name": "YouMe Game 2026",
      "tagline": "글로벌 다국어 플랫폼 · 2026 플래그십",
      "description": "YouMe Game 2026은 글로벌 시장을 위한 최신 플래그십 플랫폼으로, 다국어 및 다중 통화를 지원하며 현대적인 UI와 방대한 게임 라이브러리를 제공합니다.",
      "features": [
        "글로벌 다국어 지원",
        "다중 통화 지갑",
        "현대적인 애니메이션 UI",
        "방대한 게임 라이브러리",
        "고급 플레이어 분석",
        "24/7 고객 지원"
      ]
    },
    "ja": {
      "name": "YouMe Game 2026",
      "tagline": "グローバル多言語プラットフォーム · 2026フラッグシップ",
      "description": "YouMe Game 2026は、グローバル市場向けの最新フラッグシッププラットフォームで、複数の言語と通貨をサポートし、モダンなUIと充実したゲームライブラリを提供します。",
      "features": [
        "グローバル多言語サポート",
        "マルチ通貨ウォレット",
        "モダンアニメーションUI",
        "充実したゲームライブラリ",
        "高度なプレイヤー分析",
        "24/7カスタマーサポート"
      ]
    },
    "ar": {
      "name": "YouMe Game 2026",
      "tagline": "منصة متعددة اللغات العالمية · الرائدة 2026",
      "description": "YouMe Game 2026 هي أحدث منصتنا الرائدة للأسواق العالمية، تدعم لغات وعملات متعددة مع واجهة مستخدم حديثة ومكتبة ألعاب شاملة.",
      "features": [
        "دعم متعدد اللغات عالمياً",
        "محفظة متعددة العملات",
        "واجهة مستخدم متحركة حديثة",
        "مكتبة ألعاب شاملة",
        "تحليلات متقدمة للاعبين",
        "دعم عملاء على مدار الساعة"
      ]
    },
    "fr": {
      "name": "YouMe Game 2026",
      "tagline": "Plateforme multilingue mondiale · Phare 2026",
      "description": "YouMe Game 2026 est notre dernière plateforme phare pour les marchés mondiaux, prenant en charge plusieurs langues et devises avec une interface moderne et une bibliothèque de jeux complète.",
      "features": [
        "Support multilingue mondial",
        "Portefeuille multi-devises",
        "Interface animée moderne",
        "Bibliothèque de jeux complète",
        "Analytique avancée des joueurs",
        "Support client 24/7"
      ]
    },
    "es": {
      "name": "YouMe Game 2026",
      "tagline": "Plataforma multilingüe global · Insignia 2026",
      "description": "YouMe Game 2026 es nuestra última plataforma insignia para mercados globales, con soporte para múltiples idiomas y monedas, UI moderna con animaciones y biblioteca de juegos completa.",
      "features": [
        "Soporte multilingüe global",
        "Cartera multi-moneda",
        "UI animada moderna",
        "Biblioteca de juegos completa",
        "Análisis avanzado de jugadores",
        "Soporte al cliente 24/7"
      ]
    }
  },
  "huang-jia-yong-li": {
    "en": {
      "name": "皇家永利",
      "tagline": "Royal classic lobby · Mahjong & Jackpot",
      "description": "皇家永利 (Huang Jia Yong Li) is a premium Chinese-style gaming platform featuring a grand royal aesthetic. It showcases Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck, and a multi-Jackpot display, delivering an authentic and immersive experience for Chinese-speaking players.",
      "features": [
        "Royal Chinese visual theme",
        "Multi-Jackpot live display",
        "Mahjong Ways collection",
        "Fortune Rabbit & Dragon Tiger",
        "Localized Chinese interface",
        "CDKey exchange system"
      ]
    },
    "zh": {
      "name": "皇家永利",
      "tagline": "皇家经典大厅 · 麻将与奖池",
      "description": "皇家永利是一款高端中式风格游戏平台，拥有宏伟的皇家美学设计。平台展示麻将Ways、幸运兔、龙虎斗等精品游戏，并配备多奖池实时显示，为华语玩家带来原汁原味的沉浸式体验。",
      "features": [
        "皇家中式视觉主题",
        "多奖池实时显示",
        "麻将Ways系列",
        "幸运兔与龙虎斗",
        "本地化中文界面",
        "CDKey兑换系统"
      ]
    },
    "ms": {
      "name": "皇家永利",
      "tagline": "Lobi klasik diraja · Mahjong & Jackpot",
      "description": "皇家永利 adalah platform permainan bergaya Cina premium dengan estetika diraja yang megah, menampilkan Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck dan paparan multi-Jackpot.",
      "features": [
        "Tema visual Cina diraja",
        "Paparan jackpot pelbagai langsung",
        "Koleksi Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "Antara muka Cina setempat",
        "Sistem pertukaran CDKey"
      ]
    },
    "id": {
      "name": "皇家永利",
      "tagline": "Lobi klasik kerajaan · Mahjong & Jackpot",
      "description": "皇家永利 adalah platform gaming bergaya Cina premium dengan estetika kerajaan yang megah, menampilkan Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck, dan tampilan multi-Jackpot.",
      "features": [
        "Tema visual Cina kerajaan",
        "Tampilan multi-jackpot langsung",
        "Koleksi Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "Antarmuka Cina lokal",
        "Sistem penukaran CDKey"
      ]
    },
    "th": {
      "name": "皇家永利",
      "tagline": "ล็อบบี้คลาสสิกราชวงศ์ · มาจองและแจ็คพอต",
      "description": "皇家永利 คือแพลตฟอร์มเกมสไตล์จีนระดับพรีเมียมที่มีสุนทรียศาสตร์ราชวงศ์อันยิ่งใหญ่ นำเสนอ Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck และการแสดงผล Multi-Jackpot",
      "features": [
        "ธีมภาพจีนราชวงศ์",
        "การแสดงผล Multi-Jackpot สด",
        "คอลเลกชัน Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "อินเทอร์เฟซจีนท้องถิ่น",
        "ระบบแลก CDKey"
      ]
    },
    "my": {
      "name": "皇家永利",
      "tagline": "နန်းတော်ဂန္တဝင် လောဘီ · မာဂျောင်နှင့် Jackpot",
      "description": "皇家永利 သည် နန်းတော်ဒီဇိုင်းဖြင့် Mahjong Ways၊ Fortune Rabbit၊ Dragon Tiger Luck နှင့် Multi-Jackpot ပြသမှုတို့ကို ပေးဆောင်သော ထိပ်တန်းတရုတ်ဂိမ်းပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "နန်းတော်တရုတ်ဒီဇိုင်း",
        "Multi-Jackpot တိုက်ရိုက်ပြသမှု",
        "Mahjong Ways စုစည်းမှု",
        "Fortune Rabbit နှင့် Dragon Tiger",
        "ဒေသဆိုင်ရာ တရုတ်ဘာသာ UI",
        "CDKey လဲလှယ်မှုစနစ်"
      ]
    },
    "pt": {
      "name": "皇家永利",
      "tagline": "Lobby clássico real · Mahjong & Jackpot",
      "description": "皇家永利 é uma plataforma de jogos de estilo chinês premium com estética real grandiosa, apresentando Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck e exibição multi-Jackpot.",
      "features": [
        "Tema visual chinês real",
        "Exibição multi-jackpot ao vivo",
        "Coleção Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "Interface chinesa localizada",
        "Sistema de troca CDKey"
      ]
    },
    "hi": {
      "name": "皇家永利",
      "tagline": "रॉयल क्लासिक लॉबी · माहजोंग और जैकपॉट",
      "description": "皇家永利 एक प्रीमियम चीनी शैली का गेमिंग प्लेटफ़ॉर्म है जिसमें भव्य शाही सौंदर्यशास्त्र है। यह Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck और मल्टी-जैकपॉट डिस्प्ले प्रदर्शित करता है।",
      "features": [
        "रॉयल चीनी विज़ुअल थीम",
        "मल्टी-जैकपॉट लाइव डिस्प्ले",
        "Mahjong Ways संग्रह",
        "Fortune Rabbit और Dragon Tiger",
        "स्थानीयकृत चीनी इंटरफ़ेस",
        "CDKey एक्सचेंज सिस्टम"
      ]
    },
    "vi": {
      "name": "皇家永利",
      "tagline": "Sảnh cổ điển hoàng gia · Mạt Chược & Jackpot",
      "description": "皇家永利 là nền tảng game phong cách Trung Hoa cao cấp với thẩm mỹ hoàng gia tráng lệ, giới thiệu Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck và hiển thị Multi-Jackpot.",
      "features": [
        "Chủ đề hình ảnh Trung Hoa hoàng gia",
        "Hiển thị Multi-Jackpot trực tiếp",
        "Bộ sưu tập Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "Giao diện Trung Hoa bản địa hóa",
        "Hệ thống đổi CDKey"
      ]
    },
    "ru": {
      "name": "皇家永利",
      "tagline": "Королевское классическое лобби · Маджонг и Джекпот",
      "description": "皇家永利 — премиальная игровая платформа в китайском стиле с величественной королевской эстетикой, представляющая Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck и мультиджекпот.",
      "features": [
        "Королевская китайская визуальная тема",
        "Мультиджекпот в прямом эфире",
        "Коллекция Mahjong Ways",
        "Fortune Rabbit и Dragon Tiger",
        "Локализованный китайский интерфейс",
        "Система обмена CDKey"
      ]
    },
    "ko": {
      "name": "皇家永利",
      "tagline": "로열 클래식 로비 · 마작 & 잭팟",
      "description": "皇家永利는 웅장한 왕실 미학을 특징으로 하는 프리미엄 중국 스타일 게임 플랫폼입니다. Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck 및 멀티 잭팟 디스플레이를 선보입니다.",
      "features": [
        "왕실 중국 비주얼 테마",
        "멀티 잭팟 라이브 디스플레이",
        "Mahjong Ways 컬렉션",
        "Fortune Rabbit & Dragon Tiger",
        "현지화된 중국어 인터페이스",
        "CDKey 교환 시스템"
      ]
    },
    "ja": {
      "name": "皇家永利",
      "tagline": "ロイヤルクラシックロビー · 麻雀＆ジャックポット",
      "description": "皇家永利は、壮大なロイヤルな美学を特徴とするプレミアム中国スタイルのゲームプラットフォームです。Mahjong Ways、Fortune Rabbit、Dragon Tiger Luck、マルチジャックポット表示を提供します。",
      "features": [
        "ロイヤル中国ビジュアルテーマ",
        "マルチジャックポットライブ表示",
        "Mahjong Waysコレクション",
        "Fortune Rabbit & Dragon Tiger",
        "ローカライズされた中国語インターフェース",
        "CDKey交換システム"
      ]
    },
    "ar": {
      "name": "皇家永利",
      "tagline": "لوبي ملكي كلاسيكي · ماهجونج وجاكبوت",
      "description": "皇家永利 منصة ألعاب صينية فاخرة بجماليات ملكية رائعة، تعرض Mahjong Ways وFortune Rabbit وDragon Tiger Luck وعرض Multi-Jackpot للاعبين الناطقين بالصينية.",
      "features": [
        "ثيم بصري ملكي صيني",
        "عرض Multi-Jackpot مباشر",
        "مجموعة Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "واجهة صينية محلية",
        "نظام تبادل CDKey"
      ]
    },
    "fr": {
      "name": "皇家永利",
      "tagline": "Lobby classique royal · Mahjong & Jackpot",
      "description": "皇家永利 est une plateforme de jeux de style chinois premium avec une esthétique royale grandiose, présentant Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck et un affichage multi-Jackpot.",
      "features": [
        "Thème visuel chinois royal",
        "Affichage multi-jackpot en direct",
        "Collection Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "Interface chinoise localisée",
        "Système d'échange CDKey"
      ]
    },
    "es": {
      "name": "皇家永利",
      "tagline": "Lobby clásico real · Mahjong & Jackpot",
      "description": "皇家永利 es una plataforma de juegos de estilo chino premium con estética real grandiosa, que presenta Mahjong Ways, Fortune Rabbit, Dragon Tiger Luck y visualización multi-Jackpot.",
      "features": [
        "Tema visual chino real",
        "Visualización multi-jackpot en vivo",
        "Colección Mahjong Ways",
        "Fortune Rabbit & Dragon Tiger",
        "Interfaz china localizada",
        "Sistema de intercambio CDKey"
      ]
    }
  },
  "youme-myanmar": {
    "en": {
      "name": "YouMe Myanmar",
      "tagline": "Myanmar market exclusive · Premium slots",
      "description": "YouMe Myanmar is a market-exclusive platform tailored specifically for Myanmar players. It features a premium lobby design with Burmese language support, and a curated selection of Slot and Jackpot games including African Buffalo, Gates of Olympus, and Emperor's Power.",
      "features": [
        "Myanmar market exclusive",
        "Burmese language support",
        "Premium lobby design",
        "Curated Slot & Jackpot selection",
        "Local payment integration",
        "Dedicated support team"
      ]
    },
    "zh": {
      "name": "YouMe Myanmar",
      "tagline": "缅甸市场专属 · 精品老虎机",
      "description": "YouMe Myanmar 是专为缅甸玩家量身定制的市场专属平台，提供缅甸语支持的高端大厅设计，精选包括非洲野牛、奥林匹斯之门和皇帝之力在内的老虎机和奖池游戏。",
      "features": [
        "缅甸市场专属",
        "缅甸语支持",
        "高端大厅设计",
        "精选老虎机与奖池游戏",
        "本地支付集成",
        "专属客服团队"
      ]
    },
    "ms": {
      "name": "YouMe Myanmar",
      "tagline": "Eksklusif pasaran Myanmar · Slot premium",
      "description": "YouMe Myanmar adalah platform eksklusif yang direka khusus untuk pemain Myanmar dengan sokongan bahasa Burma dan pilihan Slot serta Jackpot terkurasi termasuk African Buffalo dan Gates of Olympus.",
      "features": [
        "Eksklusif pasaran Myanmar",
        "Sokongan bahasa Burma",
        "Reka bentuk lobi premium",
        "Pilihan Slot & Jackpot terkurasi",
        "Integrasi pembayaran tempatan",
        "Pasukan sokongan khusus"
      ]
    },
    "id": {
      "name": "YouMe Myanmar",
      "tagline": "Eksklusif pasar Myanmar · Slot premium",
      "description": "YouMe Myanmar adalah platform eksklusif yang dirancang khusus untuk pemain Myanmar dengan dukungan bahasa Burma dan pilihan Slot serta Jackpot yang dikurasi termasuk African Buffalo dan Gates of Olympus.",
      "features": [
        "Eksklusif pasar Myanmar",
        "Dukungan bahasa Burma",
        "Desain lobi premium",
        "Pilihan Slot & Jackpot terkurasi",
        "Integrasi pembayaran lokal",
        "Tim dukungan khusus"
      ]
    },
    "th": {
      "name": "YouMe Myanmar",
      "tagline": "เฉพาะตลาดเมียนมา · สล็อตพรีเมียม",
      "description": "YouMe Myanmar คือแพลตฟอร์มเฉพาะสำหรับผู้เล่นเมียนมา มีการรองรับภาษาพม่าและการออกแบบล็อบบี้ระดับพรีเมียม พร้อมเกมสล็อตและแจ็คพอตคัดสรร",
      "features": [
        "เฉพาะตลาดเมียนมา",
        "รองรับภาษาพม่า",
        "ออกแบบล็อบบี้ระดับพรีเมียม",
        "สล็อตและแจ็คพอตคัดสรร",
        "การชำระเงินท้องถิ่น",
        "ทีมสนับสนุนเฉพาะ"
      ]
    },
    "my": {
      "name": "YouMe Myanmar",
      "tagline": "မြန်မာဈေးကွက် သီးသန့် · ထိပ်တန်း Slot",
      "description": "YouMe Myanmar သည် မြန်မာဘာသာ ပံ့ပိုးမှုနှင့် African Buffalo၊ Gates of Olympus၊ Emperor's Power တို့ပါဝင်သော Slot နှင့် Jackpot ဂိမ်းများဖြင့် မြန်မာကစားသမားများအတွက် သီးသန့်ဒီဇိုင်းဆွဲထားသော ပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "မြန်မာဈေးကွက် သီးသန့်",
        "မြန်မာဘာသာ ပံ့ပိုးမှု",
        "ထိပ်တန်း လောဘီဒီဇိုင်း",
        "ရွေးချယ်ထားသော Slot နှင့် Jackpot",
        "ဒေသဆိုင်ရာ ငွေပေးချေမှု",
        "သီးသန့် ဝန်ဆောင်မှုအဖွဲ့"
      ]
    },
    "pt": {
      "name": "YouMe Myanmar",
      "tagline": "Exclusivo do mercado de Myanmar · Slots premium",
      "description": "YouMe Myanmar é uma plataforma exclusiva projetada especificamente para jogadores de Myanmar com suporte ao idioma birmanês e seleção curada de Slots e Jackpots.",
      "features": [
        "Exclusivo do mercado de Myanmar",
        "Suporte ao idioma birmanês",
        "Design de lobby premium",
        "Seleção curada de Slot & Jackpot",
        "Integração de pagamento local",
        "Equipe de suporte dedicada"
      ]
    },
    "hi": {
      "name": "YouMe Myanmar",
      "tagline": "म्यांमार बाज़ार एक्सक्लूसिव · प्रीमियम स्लॉट",
      "description": "YouMe Myanmar म्यांमार खिलाड़ियों के लिए विशेष रूप से तैयार किया गया एक्सक्लूसिव प्लेटफ़ॉर्म है, जिसमें बर्मी भाषा समर्थन और African Buffalo, Gates of Olympus जैसे क्यूरेटेड स्लॉट और जैकपॉट गेम हैं।",
      "features": [
        "म्यांमार बाज़ार एक्सक्लूसिव",
        "बर्मी भाषा समर्थन",
        "प्रीमियम लॉबी डिज़ाइन",
        "क्यूरेटेड स्लॉट और जैकपॉट",
        "स्थानीय भुगतान एकीकरण",
        "समर्पित सहायता टीम"
      ]
    },
    "vi": {
      "name": "YouMe Myanmar",
      "tagline": "Độc quyền thị trường Myanmar · Slot cao cấp",
      "description": "YouMe Myanmar là nền tảng độc quyền được thiết kế riêng cho người chơi Myanmar với hỗ trợ tiếng Miến Điện và tuyển chọn Slot và Jackpot bao gồm African Buffalo và Gates of Olympus.",
      "features": [
        "Độc quyền thị trường Myanmar",
        "Hỗ trợ tiếng Miến Điện",
        "Thiết kế sảnh cao cấp",
        "Tuyển chọn Slot & Jackpot",
        "Tích hợp thanh toán địa phương",
        "Đội hỗ trợ chuyên dụng"
      ]
    },
    "ru": {
      "name": "YouMe Myanmar",
      "tagline": "Эксклюзив рынка Мьянмы · Премиум слоты",
      "description": "YouMe Myanmar — эксклюзивная платформа для игроков Мьянмы с поддержкой бирманского языка и подборкой слотов и джекпотов, включая African Buffalo и Gates of Olympus.",
      "features": [
        "Эксклюзив рынка Мьянмы",
        "Поддержка бирманского языка",
        "Премиум дизайн лобби",
        "Подборка слотов и джекпотов",
        "Интеграция местных платежей",
        "Выделенная команда поддержки"
      ]
    },
    "ko": {
      "name": "YouMe Myanmar",
      "tagline": "미얀마 시장 전용 · 프리미엄 슬롯",
      "description": "YouMe Myanmar는 미얀마 플레이어를 위해 특별히 설계된 전용 플랫폼으로, 버마어 지원과 African Buffalo, Gates of Olympus 등 엄선된 슬롯 및 잭팟 게임을 제공합니다.",
      "features": [
        "미얀마 시장 전용",
        "버마어 지원",
        "프리미엄 로비 디자인",
        "엄선된 슬롯 & 잭팟",
        "현지 결제 통합",
        "전담 지원팀"
      ]
    },
    "ja": {
      "name": "YouMe Myanmar",
      "tagline": "ミャンマー市場限定 · プレミアムスロット",
      "description": "YouMe Myanmarはミャンマーのプレイヤー向けに特別に設計された限定プラットフォームで、ビルマ語サポートとAfrican Buffalo、Gates of Olympusなどのスロット＆ジャックポットを提供します。",
      "features": [
        "ミャンマー市場限定",
        "ビルマ語サポート",
        "プレミアムロビーデザイン",
        "厳選スロット＆ジャックポット",
        "現地決済統合",
        "専任サポートチーム"
      ]
    },
    "ar": {
      "name": "YouMe Myanmar",
      "tagline": "حصري لسوق ميانمار · سلوت فاخر",
      "description": "YouMe Myanmar منصة حصرية مصممة خصيصاً للاعبين في ميانمار مع دعم اللغة البورمية وتشكيلة مختارة من ألعاب السلوت والجاكبوت تشمل African Buffalo وGates of Olympus.",
      "features": [
        "حصري لسوق ميانمار",
        "دعم اللغة البورمية",
        "تصميم لوبي فاخر",
        "تشكيلة مختارة من السلوت والجاكبوت",
        "تكامل الدفع المحلي",
        "فريق دعم مخصص"
      ]
    },
    "fr": {
      "name": "YouMe Myanmar",
      "tagline": "Exclusif au marché du Myanmar · Slots premium",
      "description": "YouMe Myanmar est une plateforme exclusive conçue spécifiquement pour les joueurs du Myanmar avec support de la langue birmane et une sélection de Slots et Jackpots incluant African Buffalo et Gates of Olympus.",
      "features": [
        "Exclusif au marché du Myanmar",
        "Support de la langue birmane",
        "Design de lobby premium",
        "Sélection de Slot & Jackpot",
        "Intégration de paiement local",
        "Équipe de support dédiée"
      ]
    },
    "es": {
      "name": "YouMe Myanmar",
      "tagline": "Exclusivo del mercado de Myanmar · Slots premium",
      "description": "YouMe Myanmar es una plataforma exclusiva diseñada específicamente para jugadores de Myanmar con soporte del idioma birmano y una selección curada de Slots y Jackpots.",
      "features": [
        "Exclusivo del mercado de Myanmar",
        "Soporte del idioma birmano",
        "Diseño de lobby premium",
        "Selección curada de Slot & Jackpot",
        "Integración de pago local",
        "Equipo de soporte dedicado"
      ]
    }
  },
  "youme-casino": {
    "en": {
      "name": "YouMe Casino",
      "tagline": "Full-category casino platform · Elegant design",
      "description": "YouMe Casino is a full-category gaming platform with an elegant dealer-themed design. It features Slots, Fish Games, and Other categories with titles like 88 Fortune, Golden Cicada, Cash Machine, Zombie Awaken, KingKong's Rampage, and FireKirin.",
      "features": [
        "Full-category game coverage",
        "Elegant dealer visual theme",
        "All-in-one lobby",
        "Diverse slot collection",
        "Fish game section",
        "Store & mail system"
      ]
    },
    "zh": {
      "name": "YouMe Casino",
      "tagline": "全品类娱乐场平台 · 优雅设计",
      "description": "YouMe Casino 是一款全品类游戏平台，拥有优雅的荷官主题设计。平台涵盖老虎机、捕鱼和其他品类，包括88财神、金蝉、现金机器、僵尸觉醒、金刚暴走和火麒麟等热门游戏。",
      "features": [
        "全品类游戏覆盖",
        "优雅荷官视觉主题",
        "一站式大厅",
        "多样老虎机系列",
        "捕鱼游戏专区",
        "商店与邮件系统"
      ]
    },
    "ms": {
      "name": "YouMe Casino",
      "tagline": "Platform kasino pelbagai kategori · Reka bentuk elegan",
      "description": "YouMe Casino adalah platform permainan pelbagai kategori dengan reka bentuk bertema dealer yang elegan, menampilkan Slot, Permainan Ikan dan kategori lain termasuk 88 Fortune, Golden Cicada dan FireKirin.",
      "features": [
        "Liputan permainan pelbagai kategori",
        "Tema visual dealer elegan",
        "Lobi semua-dalam-satu",
        "Koleksi slot pelbagai",
        "Bahagian permainan ikan",
        "Sistem kedai & mel"
      ]
    },
    "id": {
      "name": "YouMe Casino",
      "tagline": "Platform kasino semua kategori · Desain elegan",
      "description": "YouMe Casino adalah platform gaming semua kategori dengan desain bertema dealer yang elegan, menampilkan Slot, Game Ikan, dan kategori lain termasuk 88 Fortune, Golden Cicada, dan FireKirin.",
      "features": [
        "Cakupan game semua kategori",
        "Tema visual dealer elegan",
        "Lobi all-in-one",
        "Koleksi slot beragam",
        "Bagian game ikan",
        "Sistem toko & surat"
      ]
    },
    "th": {
      "name": "YouMe Casino",
      "tagline": "แพลตฟอร์มคาสิโนครบหมวดหมู่ · ดีไซน์หรูหรา",
      "description": "YouMe Casino คือแพลตฟอร์มเกมครบหมวดหมู่ที่มีดีไซน์ธีมดีลเลอร์หรูหรา นำเสนอสล็อต เกมปลา และหมวดหมู่อื่นๆ รวมถึง 88 Fortune, Golden Cicada, Cash Machine และ FireKirin",
      "features": [
        "ครอบคลุมเกมครบหมวดหมู่",
        "ธีมภาพดีลเลอร์หรูหรา",
        "ล็อบบี้ครบในที่เดียว",
        "คอลเลกชันสล็อตหลากหลาย",
        "ส่วนเกมปลา",
        "ระบบร้านค้าและเมล"
      ]
    },
    "my": {
      "name": "YouMe Casino",
      "tagline": "အမျိုးအစားစုံ Casino ပလပ်ဖောင်း · သပ်ရပ်သောဒီဇိုင်း",
      "description": "YouMe Casino သည် Dealer ဒီဇိုင်းဖြင့် Slot၊ ငါးဖမ်းဂိမ်း နှင့် 88 Fortune၊ Golden Cicada၊ FireKirin အပါအဝင် ဂိမ်းအမျိုးအစားစုံ ပေးဆောင်သော ပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "ဂိမ်းအမျိုးအစားစုံ",
        "သပ်ရပ်သော Dealer ဒီဇိုင်း",
        "တစ်နေရာတည်း လောဘီ",
        "Slot ဂိမ်းမျိုးစုံ",
        "ငါးဖမ်းဂိမ်းဆိုင်ရာ",
        "ဆိုင်နှင့် မေးလ်စနစ်"
      ]
    },
    "pt": {
      "name": "YouMe Casino",
      "tagline": "Plataforma de cassino completa · Design elegante",
      "description": "YouMe Casino é uma plataforma de jogos completa com design elegante de tema dealer, apresentando Slots, Jogos de Pesca e outras categorias com títulos como 88 Fortune, Golden Cicada e FireKirin.",
      "features": [
        "Cobertura completa de jogos",
        "Tema visual elegante de dealer",
        "Lobby tudo-em-um",
        "Coleção diversificada de slots",
        "Seção de jogos de pesca",
        "Sistema de loja e correio"
      ]
    },
    "hi": {
      "name": "YouMe Casino",
      "tagline": "फुल-कैटेगरी कैसीनो प्लेटफ़ॉर्म · एलिगेंट डिज़ाइन",
      "description": "YouMe Casino एक फुल-कैटेगरी गेमिंग प्लेटफ़ॉर्म है जिसमें एलिगेंट डीलर-थीम्ड डिज़ाइन है। इसमें स्लॉट, फिश गेम्स और अन्य कैटेगरी में 88 Fortune, Golden Cicada, FireKirin जैसे गेम हैं।",
      "features": [
        "फुल-कैटेगरी गेम कवरेज",
        "एलिगेंट डीलर विज़ुअल थीम",
        "ऑल-इन-वन लॉबी",
        "विविध स्लॉट संग्रह",
        "फिश गेम सेक्शन",
        "स्टोर और मेल सिस्टम"
      ]
    },
    "vi": {
      "name": "YouMe Casino",
      "tagline": "Nền tảng casino đầy đủ danh mục · Thiết kế thanh lịch",
      "description": "YouMe Casino là nền tảng game đầy đủ danh mục với thiết kế chủ đề dealer thanh lịch, giới thiệu Slot, Game Cá và các danh mục khác bao gồm 88 Fortune, Golden Cicada và FireKirin.",
      "features": [
        "Bao phủ game đầy đủ danh mục",
        "Chủ đề hình ảnh dealer thanh lịch",
        "Sảnh tất cả trong một",
        "Bộ sưu tập slot đa dạng",
        "Phần game cá",
        "Hệ thống cửa hàng và thư"
      ]
    },
    "ru": {
      "name": "YouMe Casino",
      "tagline": "Полнокатегорийная казино-платформа · Элегантный дизайн",
      "description": "YouMe Casino — полнокатегорийная игровая платформа с элегантным дизайном в теме дилера, включающая Слоты, Рыбалку и другие категории с играми 88 Fortune, Golden Cicada и FireKirin.",
      "features": [
        "Полное покрытие категорий игр",
        "Элегантная тема дилера",
        "Лобби всё-в-одном",
        "Разнообразная коллекция слотов",
        "Раздел рыбалки",
        "Система магазина и почты"
      ]
    },
    "ko": {
      "name": "YouMe Casino",
      "tagline": "전체 카테고리 카지노 플랫폼 · 우아한 디자인",
      "description": "YouMe Casino는 우아한 딜러 테마 디자인의 전체 카테고리 게임 플랫폼으로, 슬롯, 낚시 게임 등 88 Fortune, Golden Cicada, FireKirin 등의 타이틀을 제공합니다.",
      "features": [
        "전체 카테고리 게임 지원",
        "우아한 딜러 비주얼 테마",
        "올인원 로비",
        "다양한 슬롯 컬렉션",
        "낚시 게임 섹션",
        "상점 및 메일 시스템"
      ]
    },
    "ja": {
      "name": "YouMe Casino",
      "tagline": "フルカテゴリーカジノプラットフォーム · エレガントデザイン",
      "description": "YouMe Casinoは、エレガントなディーラーテーマのデザインを持つフルカテゴリーゲームプラットフォームで、スロット、フィッシュゲーム、88 Fortune、Golden Cicada、FireKirinなどを提供します。",
      "features": [
        "フルカテゴリーゲームカバー",
        "エレガントなディーラービジュアルテーマ",
        "オールインワンロビー",
        "多様なスロットコレクション",
        "フィッシュゲームセクション",
        "ストア＆メールシステム"
      ]
    },
    "ar": {
      "name": "YouMe Casino",
      "tagline": "منصة كازينو متكاملة الفئات · تصميم أنيق",
      "description": "YouMe Casino منصة ألعاب متكاملة الفئات بتصميم أنيق بثيم الديلر، تضم السلوت وألعاب الأسماك وفئات أخرى تشمل 88 Fortune وGolden Cicada وFireKirin.",
      "features": [
        "تغطية كاملة لفئات الألعاب",
        "ثيم بصري أنيق للديلر",
        "لوبي شامل",
        "مجموعة سلوت متنوعة",
        "قسم ألعاب الأسماك",
        "نظام متجر وبريد"
      ]
    },
    "fr": {
      "name": "YouMe Casino",
      "tagline": "Plateforme casino toutes catégories · Design élégant",
      "description": "YouMe Casino est une plateforme de jeux toutes catégories avec un design élégant à thème dealer, présentant Slots, Jeux de Pêche et autres catégories avec 88 Fortune, Golden Cicada et FireKirin.",
      "features": [
        "Couverture complète des catégories",
        "Thème visuel dealer élégant",
        "Lobby tout-en-un",
        "Collection de slots diversifiée",
        "Section jeux de pêche",
        "Système boutique et courrier"
      ]
    },
    "es": {
      "name": "YouMe Casino",
      "tagline": "Plataforma de casino completa · Diseño elegante",
      "description": "YouMe Casino es una plataforma de juegos completa con diseño elegante de tema dealer, con Slots, Juegos de Pesca y otras categorías incluyendo 88 Fortune, Golden Cicada y FireKirin.",
      "features": [
        "Cobertura completa de categorías",
        "Tema visual elegante de dealer",
        "Lobby todo-en-uno",
        "Colección diversificada de slots",
        "Sección de juegos de pesca",
        "Sistema de tienda y correo"
      ]
    }
  },
  "ngwinbet": {
    "en": {
      "name": "NgWinBet",
      "tagline": "African market platform · Sports & Slots",
      "description": "NgWinBet is a dynamic gaming platform designed for the African market. Featuring a vibrant sports-inspired design with a football stadium backdrop, it offers a rich selection of Slots, Poker, and Fishing games including Lucky Soccer, PokerWin, Hot Spin, African Buffalo, and Mahjong Ways 2.",
      "features": [
        "African market optimized",
        "Sports-inspired visual theme",
        "Football stadium backdrop",
        "Rich slot & poker selection",
        "Mahjong Ways 2 featured",
        "Naira currency support"
      ]
    },
    "zh": {
      "name": "NgWinBet",
      "tagline": "非洲市场平台 · 体育与老虎机",
      "description": "NgWinBet 是专为非洲市场设计的动态游戏平台，以充满活力的体育主题和足球场背景为特色，提供包括幸运足球、PokerWin、Hot Spin、非洲野牛和麻将Ways 2在内的丰富老虎机、扑克和捕鱼游戏。",
      "features": [
        "非洲市场优化",
        "体育主题视觉设计",
        "足球场背景",
        "丰富老虎机与扑克选择",
        "麻将Ways 2特色游戏",
        "奈拉货币支持"
      ]
    },
    "ms": {
      "name": "NgWinBet",
      "tagline": "Platform pasaran Afrika · Sukan & Slot",
      "description": "NgWinBet adalah platform permainan dinamik untuk pasaran Afrika dengan reka bentuk bertema sukan yang bersemangat dan latar belakang stadium bola sepak, menawarkan Slot, Poker, dan Permainan Ikan yang kaya.",
      "features": [
        "Dioptimumkan untuk pasaran Afrika",
        "Tema visual berinspirasi sukan",
        "Latar belakang stadium bola sepak",
        "Pilihan slot & poker yang kaya",
        "Mahjong Ways 2 ditampilkan",
        "Sokongan mata wang Naira"
      ]
    },
    "id": {
      "name": "NgWinBet",
      "tagline": "Platform pasar Afrika · Olahraga & Slot",
      "description": "NgWinBet adalah platform gaming dinamis untuk pasar Afrika dengan desain bertema olahraga yang semarak dan latar belakang stadion sepak bola, menawarkan Slot, Poker, dan Game Ikan yang kaya.",
      "features": [
        "Dioptimalkan untuk pasar Afrika",
        "Tema visual olahraga",
        "Latar belakang stadion sepak bola",
        "Pilihan slot & poker yang kaya",
        "Mahjong Ways 2 unggulan",
        "Dukungan mata uang Naira"
      ]
    },
    "th": {
      "name": "NgWinBet",
      "tagline": "แพลตฟอร์มตลาดแอฟริกา · กีฬาและสล็อต",
      "description": "NgWinBet คือแพลตฟอร์มเกมที่ออกแบบสำหรับตลาดแอฟริกา มีดีไซน์ธีมกีฬาที่สดใสพร้อมฉากหลังสนามฟุตบอล นำเสนอสล็อต โป๊กเกอร์ และเกมปลาที่หลากหลาย",
      "features": [
        "เหมาะสำหรับตลาดแอฟริกา",
        "ธีมภาพแรงบันดาลใจจากกีฬา",
        "ฉากหลังสนามฟุตบอล",
        "สล็อตและโป๊กเกอร์หลากหลาย",
        "Mahjong Ways 2 เด่น",
        "รองรับสกุลเงิน Naira"
      ]
    },
    "my": {
      "name": "NgWinBet",
      "tagline": "အာဖရိကဈေးကွက် ပလပ်ဖောင်း · အားကစားနှင့် Slot",
      "description": "NgWinBet သည် အာဖရိကဈေးကွက်အတွက် ဘောလုံးကွင်းနောက်ခံနှင့် Lucky Soccer၊ PokerWin၊ African Buffalo၊ Mahjong Ways 2 တို့ပါဝင်သော Slot၊ Poker နှင့် ငါးဖမ်းဂိမ်းများ ပေးဆောင်သော ပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "အာဖရိကဈေးကွက် အထူးဒီဇိုင်း",
        "အားကစားဓာတ်ပုံ ဒီဇိုင်း",
        "ဘောလုံးကွင်းနောက်ခံ",
        "Slot နှင့် Poker မျိုးစုံ",
        "Mahjong Ways 2 ထူးချွန်",
        "Naira ငွေကြေး ပံ့ပိုးမှု"
      ]
    },
    "pt": {
      "name": "NgWinBet",
      "tagline": "Plataforma do mercado africano · Esportes & Slots",
      "description": "NgWinBet é uma plataforma de jogos dinâmica para o mercado africano com design inspirado em esportes e fundo de estádio de futebol, oferecendo Slots, Poker e Jogos de Pesca.",
      "features": [
        "Otimizado para o mercado africano",
        "Tema visual inspirado em esportes",
        "Fundo de estádio de futebol",
        "Rica seleção de slot & poker",
        "Mahjong Ways 2 em destaque",
        "Suporte à moeda Naira"
      ]
    },
    "hi": {
      "name": "NgWinBet",
      "tagline": "अफ्रीकी बाज़ार प्लेटफ़ॉर्म · स्पोर्ट्स और स्लॉट",
      "description": "NgWinBet अफ्रीकी बाज़ार के लिए डिज़ाइन किया गया एक डायनामिक गेमिंग प्लेटफ़ॉर्म है जिसमें फुटबॉल स्टेडियम बैकड्रॉप के साथ स्पोर्ट्स-इंस्पायर्ड डिज़ाइन है।",
      "features": [
        "अफ्रीकी बाज़ार के लिए अनुकूलित",
        "स्पोर्ट्स-इंस्पायर्ड विज़ुअल थीम",
        "फुटबॉल स्टेडियम बैकड्रॉप",
        "समृद्ध स्लॉट और पोकर चयन",
        "Mahjong Ways 2 फीचर्ड",
        "नाइरा करेंसी सपोर्ट"
      ]
    },
    "vi": {
      "name": "NgWinBet",
      "tagline": "Nền tảng thị trường châu Phi · Thể thao & Slot",
      "description": "NgWinBet là nền tảng game năng động dành cho thị trường châu Phi với thiết kế lấy cảm hứng từ thể thao và phông nền sân vận động bóng đá, cung cấp Slot, Poker và Game Cá phong phú.",
      "features": [
        "Tối ưu cho thị trường châu Phi",
        "Chủ đề hình ảnh thể thao",
        "Phông nền sân vận động bóng đá",
        "Tuyển chọn slot & poker phong phú",
        "Mahjong Ways 2 nổi bật",
        "Hỗ trợ tiền tệ Naira"
      ]
    },
    "ru": {
      "name": "NgWinBet",
      "tagline": "Платформа африканского рынка · Спорт и слоты",
      "description": "NgWinBet — динамичная игровая платформа для африканского рынка со спортивным дизайном и фоном футбольного стадиона, предлагающая слоты, покер и рыбалку.",
      "features": [
        "Оптимизировано для африканского рынка",
        "Спортивная визуальная тема",
        "Фон футбольного стадиона",
        "Богатый выбор слотов и покера",
        "Mahjong Ways 2 в центре внимания",
        "Поддержка валюты Naira"
      ]
    },
    "ko": {
      "name": "NgWinBet",
      "tagline": "아프리카 시장 플랫폼 · 스포츠 & 슬롯",
      "description": "NgWinBet은 아프리카 시장을 위한 역동적인 게임 플랫폼으로, 축구 경기장 배경의 스포츠 영감 디자인과 슬롯, 포커, 낚시 게임을 제공합니다.",
      "features": [
        "아프리카 시장 최적화",
        "스포츠 영감 비주얼 테마",
        "축구 경기장 배경",
        "풍부한 슬롯 & 포커 선택",
        "Mahjong Ways 2 특집",
        "나이라 통화 지원"
      ]
    },
    "ja": {
      "name": "NgWinBet",
      "tagline": "アフリカ市場プラットフォーム · スポーツ＆スロット",
      "description": "NgWinBetはアフリカ市場向けのダイナミックなゲームプラットフォームで、サッカースタジアムを背景にしたスポーツインスパイアのデザインとスロット、ポーカー、フィッシングゲームを提供します。",
      "features": [
        "アフリカ市場最適化",
        "スポーツインスパイアビジュアルテーマ",
        "サッカースタジアム背景",
        "豊富なスロット＆ポーカー",
        "Mahjong Ways 2フィーチャー",
        "ナイラ通貨サポート"
      ]
    },
    "ar": {
      "name": "NgWinBet",
      "tagline": "منصة السوق الأفريقية · رياضة وسلوت",
      "description": "NgWinBet منصة ألعاب ديناميكية مصممة للسوق الأفريقية بتصميم رياضي مستوحى من كرة القدم مع خلفية ملعب، تقدم سلوت وبوكر وألعاب أسماك متنوعة.",
      "features": [
        "محسّن للسوق الأفريقية",
        "ثيم بصري رياضي",
        "خلفية ملعب كرة القدم",
        "تشكيلة غنية من السلوت والبوكر",
        "Mahjong Ways 2 مميز",
        "دعم عملة Naira"
      ]
    },
    "fr": {
      "name": "NgWinBet",
      "tagline": "Plateforme du marché africain · Sports & Slots",
      "description": "NgWinBet est une plateforme de jeux dynamique pour le marché africain avec un design inspiré des sports et un fond de stade de football, offrant Slots, Poker et Jeux de Pêche.",
      "features": [
        "Optimisé pour le marché africain",
        "Thème visuel inspiré des sports",
        "Fond de stade de football",
        "Riche sélection de slot & poker",
        "Mahjong Ways 2 en vedette",
        "Support de la devise Naira"
      ]
    },
    "es": {
      "name": "NgWinBet",
      "tagline": "Plataforma del mercado africano · Deportes y Slots",
      "description": "NgWinBet es una plataforma de juegos dinámica para el mercado africano con diseño inspirado en deportes y fondo de estadio de fútbol, ofreciendo Slots, Póker y Juegos de Pesca.",
      "features": [
        "Optimizado para el mercado africano",
        "Tema visual inspirado en deportes",
        "Fondo de estadio de fútbol",
        "Rica selección de slot & póker",
        "Mahjong Ways 2 destacado",
        "Soporte de moneda Naira"
      ]
    }
  },
  "lucky-juwa": {
    "en": {
      "name": "LuckyJUWA",
      "tagline": "US market gaming platform · Neon style",
      "description": "LuckyJUWA is a vibrant gaming platform targeting the US market. With a neon-lit futuristic aesthetic, it features a curated selection of popular titles including Golden Cicada, Zombie Awaken, King Kong's Rampage, and FireKirin, alongside a live Jackpot Grand display.",
      "features": [
        "US market focused",
        "Neon futuristic visual theme",
        "Live Jackpot Grand display",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage featured",
        "Dollar currency support"
      ]
    },
    "zh": {
      "name": "LuckyJUWA",
      "tagline": "美国市场游戏平台 · 霓虹风格",
      "description": "LuckyJUWA 是面向美国市场的充满活力的游戏平台，以霓虹未来主义美学为特色，精选包括金蝉、僵尸觉醒、金刚暴走和火麒麟在内的热门游戏，并配备实时大奖池显示。",
      "features": [
        "专注美国市场",
        "霓虹未来主义视觉主题",
        "实时大奖池显示",
        "金蝉与火麒麟",
        "金刚暴走特色游戏",
        "美元货币支持"
      ]
    },
    "ms": {
      "name": "LuckyJUWA",
      "tagline": "Platform permainan pasaran AS · Gaya neon",
      "description": "LuckyJUWA adalah platform permainan yang bersemangat untuk pasaran AS dengan estetika futuristik neon, menampilkan Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin dan paparan Jackpot Grand langsung.",
      "features": [
        "Fokus pasaran AS",
        "Tema visual futuristik neon",
        "Paparan Jackpot Grand langsung",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage ditampilkan",
        "Sokongan mata wang Dolar"
      ]
    },
    "id": {
      "name": "LuckyJUWA",
      "tagline": "Platform game pasar AS · Gaya neon",
      "description": "LuckyJUWA adalah platform gaming yang semarak untuk pasar AS dengan estetika futuristik neon, menampilkan Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin dan tampilan Jackpot Grand langsung.",
      "features": [
        "Fokus pasar AS",
        "Tema visual futuristik neon",
        "Tampilan Jackpot Grand langsung",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage unggulan",
        "Dukungan mata uang Dolar"
      ]
    },
    "th": {
      "name": "LuckyJUWA",
      "tagline": "แพลตฟอร์มเกมตลาดสหรัฐ · สไตล์นีออน",
      "description": "LuckyJUWA คือแพลตฟอร์มเกมที่สดใสสำหรับตลาดสหรัฐ ด้วยสุนทรียศาสตร์ฟิวเจอริสต์นีออน นำเสนอ Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin และการแสดง Jackpot Grand สด",
      "features": [
        "มุ่งเน้นตลาดสหรัฐ",
        "ธีมภาพฟิวเจอริสต์นีออน",
        "การแสดง Jackpot Grand สด",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage เด่น",
        "รองรับสกุลเงินดอลลาร์"
      ]
    },
    "my": {
      "name": "LuckyJUWA",
      "tagline": "အမေရိကန်ဈေးကွက် ဂိမ်းပလပ်ဖောင်း · Neon ဒီဇိုင်း",
      "description": "LuckyJUWA သည် Neon ဒီဇိုင်းဖြင့် Golden Cicada၊ Zombie Awaken၊ King Kong's Rampage၊ FireKirin တို့နှင့် Jackpot Grand တိုက်ရိုက်ပြသမှုပါဝင်သော အမေရိကန်ဈေးကွက်အတွက် ဂိမ်းပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "အမေရိကန်ဈေးကွက် အထူးဒီဇိုင်း",
        "Neon ဒီဇိုင်း",
        "Jackpot Grand တိုက်ရိုက်ပြသမှု",
        "Golden Cicada နှင့် FireKirin",
        "King Kong's Rampage ထူးချွန်",
        "ဒေါ်လာငွေကြေး ပံ့ပိုးမှု"
      ]
    },
    "pt": {
      "name": "LuckyJUWA",
      "tagline": "Plataforma de jogos do mercado dos EUA · Estilo neon",
      "description": "LuckyJUWA é uma plataforma de jogos vibrante para o mercado dos EUA com estética futurista neon, apresentando Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin e exibição ao vivo do Jackpot Grand.",
      "features": [
        "Focado no mercado dos EUA",
        "Tema visual futurista neon",
        "Exibição ao vivo do Jackpot Grand",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage em destaque",
        "Suporte à moeda Dólar"
      ]
    },
    "hi": {
      "name": "LuckyJUWA",
      "tagline": "US बाज़ार गेमिंग प्लेटफ़ॉर्म · नियॉन स्टाइल",
      "description": "LuckyJUWA US बाज़ार के लिए एक जीवंत गेमिंग प्लेटफ़ॉर्म है जिसमें नियॉन-लिट फ्यूचरिस्टिक एस्थेटिक है और Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin जैसे गेम हैं।",
      "features": [
        "US बाज़ार पर केंद्रित",
        "नियॉन फ्यूचरिस्टिक विज़ुअल थीम",
        "लाइव जैकपॉट ग्रैंड डिस्प्ले",
        "Golden Cicada और FireKirin",
        "King Kong's Rampage फीचर्ड",
        "डॉलर करेंसी सपोर्ट"
      ]
    },
    "vi": {
      "name": "LuckyJUWA",
      "tagline": "Nền tảng game thị trường Mỹ · Phong cách neon",
      "description": "LuckyJUWA là nền tảng game sôi động nhắm vào thị trường Mỹ với thẩm mỹ tương lai neon, giới thiệu Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin và hiển thị Jackpot Grand trực tiếp.",
      "features": [
        "Tập trung thị trường Mỹ",
        "Chủ đề hình ảnh tương lai neon",
        "Hiển thị Jackpot Grand trực tiếp",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage nổi bật",
        "Hỗ trợ tiền tệ Đô la"
      ]
    },
    "ru": {
      "name": "LuckyJUWA",
      "tagline": "Игровая платформа рынка США · Неоновый стиль",
      "description": "LuckyJUWA — яркая игровая платформа для рынка США с неоновой футуристической эстетикой, включающая Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin и живой дисплей Jackpot Grand.",
      "features": [
        "Ориентирован на рынок США",
        "Неоновая футуристическая тема",
        "Живой дисплей Jackpot Grand",
        "Golden Cicada и FireKirin",
        "King Kong's Rampage в центре",
        "Поддержка валюты Доллар"
      ]
    },
    "ko": {
      "name": "LuckyJUWA",
      "tagline": "미국 시장 게임 플랫폼 · 네온 스타일",
      "description": "LuckyJUWA는 미국 시장을 겨냥한 활기찬 게임 플랫폼으로, 네온 미래주의 미학과 Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin 및 라이브 잭팟 그랜드 디스플레이를 제공합니다.",
      "features": [
        "미국 시장 집중",
        "네온 미래주의 비주얼 테마",
        "라이브 잭팟 그랜드 디스플레이",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage 특집",
        "달러 통화 지원"
      ]
    },
    "ja": {
      "name": "LuckyJUWA",
      "tagline": "米国市場ゲームプラットフォーム · ネオンスタイル",
      "description": "LuckyJUWAは米国市場向けの活気あるゲームプラットフォームで、ネオン未来派の美学とGolden Cicada、Zombie Awaken、King Kong's Rampage、FireKirin、ライブジャックポットグランド表示を提供します。",
      "features": [
        "米国市場フォーカス",
        "ネオン未来派ビジュアルテーマ",
        "ライブジャックポットグランド表示",
        "Golden Cicada & FireKirin",
        "King Kong's Rampageフィーチャー",
        "ドル通貨サポート"
      ]
    },
    "ar": {
      "name": "LuckyJUWA",
      "tagline": "منصة ألعاب السوق الأمريكية · أسلوب النيون",
      "description": "LuckyJUWA منصة ألعاب نابضة بالحياة تستهدف السوق الأمريكية بجماليات مستقبلية نيون، تضم Golden Cicada وZombie Awaken وKing Kong's Rampage وFireKirin وعرض Jackpot Grand مباشر.",
      "features": [
        "تركيز على السوق الأمريكية",
        "ثيم بصري مستقبلي نيون",
        "عرض Jackpot Grand مباشر",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage مميز",
        "دعم عملة الدولار"
      ]
    },
    "fr": {
      "name": "LuckyJUWA",
      "tagline": "Plateforme de jeux du marché américain · Style néon",
      "description": "LuckyJUWA est une plateforme de jeux vibrante ciblant le marché américain avec une esthétique futuriste néon, présentant Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin et affichage Jackpot Grand en direct.",
      "features": [
        "Focalisé sur le marché américain",
        "Thème visuel futuriste néon",
        "Affichage Jackpot Grand en direct",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage en vedette",
        "Support de la devise Dollar"
      ]
    },
    "es": {
      "name": "LuckyJUWA",
      "tagline": "Plataforma de juegos del mercado de EE.UU. · Estilo neón",
      "description": "LuckyJUWA es una vibrante plataforma de juegos dirigida al mercado de EE.UU. con estética futurista de neón, presentando Golden Cicada, Zombie Awaken, King Kong's Rampage, FireKirin y visualización en vivo del Jackpot Grand.",
      "features": [
        "Enfocado en el mercado de EE.UU.",
        "Tema visual futurista neón",
        "Visualización en vivo del Jackpot Grand",
        "Golden Cicada & FireKirin",
        "King Kong's Rampage destacado",
        "Soporte de moneda Dólar"
      ]
    }
  },
  "royal-dream": {
    "en": {
      "name": "Royal Dream",
      "tagline": "Indonesian market platform · Event-driven lobby",
      "description": "Royal Dream is a feature-rich gaming platform designed for the Indonesian market. It showcases popular Pragmatic Play titles including Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess, and Gates of Olympus, with a live RTP display and event-driven lobby.",
      "features": [
        "Indonesian market optimized",
        "Live RTP display",
        "Pragmatic Play featured titles",
        "Event Domino promotion",
        "Ranking Jackpot system",
        "Rupiah currency support"
      ]
    },
    "zh": {
      "name": "Royal Dream",
      "tagline": "印尼市场平台 · 活动驱动大厅",
      "description": "Royal Dream 是专为印尼市场设计的功能丰富的游戏平台，展示包括GatotKaca之门、甜蜜Bonanza、Wild Bandito、星光公主和奥林匹斯之门在内的Pragmatic Play热门游戏，配备实时RTP显示和活动驱动大厅。",
      "features": [
        "印尼市场优化",
        "实时RTP显示",
        "Pragmatic Play精选游戏",
        "多米诺活动促销",
        "排名奖池系统",
        "印尼盾货币支持"
      ]
    },
    "ms": {
      "name": "Royal Dream",
      "tagline": "Platform pasaran Indonesia · Lobi berasaskan acara",
      "description": "Royal Dream adalah platform permainan kaya ciri untuk pasaran Indonesia, menampilkan tajuk Pragmatic Play popular termasuk Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess dan Gates of Olympus.",
      "features": [
        "Dioptimumkan untuk pasaran Indonesia",
        "Paparan RTP langsung",
        "Tajuk Pragmatic Play terpilih",
        "Promosi Domino Acara",
        "Sistem Jackpot Penarafan",
        "Sokongan mata wang Rupiah"
      ]
    },
    "id": {
      "name": "Royal Dream",
      "tagline": "Platform pasar Indonesia · Lobi berbasis event",
      "description": "Royal Dream adalah platform gaming kaya fitur untuk pasar Indonesia, menampilkan judul Pragmatic Play populer termasuk Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess, dan Gates of Olympus.",
      "features": [
        "Dioptimalkan untuk pasar Indonesia",
        "Tampilan RTP langsung",
        "Judul Pragmatic Play unggulan",
        "Promosi Event Domino",
        "Sistem Jackpot Ranking",
        "Dukungan mata uang Rupiah"
      ]
    },
    "th": {
      "name": "Royal Dream",
      "tagline": "แพลตฟอร์มตลาดอินโดนีเซีย · ล็อบบี้ขับเคลื่อนด้วยอีเวนต์",
      "description": "Royal Dream คือแพลตฟอร์มเกมที่มีคุณสมบัติครบครันสำหรับตลาดอินโดนีเซีย นำเสนอเกม Pragmatic Play ยอดนิยมรวมถึง Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess และ Gates of Olympus",
      "features": [
        "เหมาะสำหรับตลาดอินโดนีเซีย",
        "การแสดงผล RTP สด",
        "เกม Pragmatic Play เด่น",
        "โปรโมชัน Event Domino",
        "ระบบ Jackpot Ranking",
        "รองรับสกุลเงิน Rupiah"
      ]
    },
    "my": {
      "name": "Royal Dream",
      "tagline": "အင်ဒိုနီးရှားဈေးကွက် ပလပ်ဖောင်း · Event-driven လောဘီ",
      "description": "Royal Dream သည် Gates of GatotKaca၊ Sweet Bonanza၊ Wild Bandito၊ Starlight Princess နှင့် Gates of Olympus တို့ပါဝင်သော Pragmatic Play ဂိမ်းများနှင့် RTP တိုက်ရိုက်ပြသမှုဖြင့် အင်ဒိုနီးရှားဈေးကွက်အတွက် ပလပ်ဖောင်းဖြစ်သည်။",
      "features": [
        "အင်ဒိုနီးရှားဈေးကွက် အထူးဒီဇိုင်း",
        "RTP တိုက်ရိုက်ပြသမှု",
        "Pragmatic Play ထူးချွန်ဂိမ်းများ",
        "Event Domino ပရိုမိုးရှင်း",
        "Ranking Jackpot စနစ်",
        "Rupiah ငွေကြေး ပံ့ပိုးမှု"
      ]
    },
    "pt": {
      "name": "Royal Dream",
      "tagline": "Plataforma do mercado indonésio · Lobby orientado a eventos",
      "description": "Royal Dream é uma plataforma de jogos rica em recursos para o mercado indonésio, apresentando títulos populares da Pragmatic Play incluindo Gates of GatotKaca, Sweet Bonanza, Wild Bandito e Gates of Olympus.",
      "features": [
        "Otimizado para o mercado indonésio",
        "Exibição de RTP ao vivo",
        "Títulos Pragmatic Play em destaque",
        "Promoção Event Domino",
        "Sistema de Jackpot Ranking",
        "Suporte à moeda Rupia"
      ]
    },
    "hi": {
      "name": "Royal Dream",
      "tagline": "इंडोनेशियाई बाज़ार प्लेटफ़ॉर्म · इवेंट-ड्रिवन लॉबी",
      "description": "Royal Dream इंडोनेशियाई बाज़ार के लिए डिज़ाइन किया गया फीचर-रिच गेमिंग प्लेटफ़ॉर्म है जिसमें Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess और Gates of Olympus जैसे Pragmatic Play टाइटल हैं।",
      "features": [
        "इंडोनेशियाई बाज़ार के लिए अनुकूलित",
        "लाइव RTP डिस्प्ले",
        "Pragmatic Play फीचर्ड टाइटल",
        "Event Domino प्रमोशन",
        "Ranking Jackpot सिस्टम",
        "रुपिया करेंसी सपोर्ट"
      ]
    },
    "vi": {
      "name": "Royal Dream",
      "tagline": "Nền tảng thị trường Indonesia · Sảnh hướng sự kiện",
      "description": "Royal Dream là nền tảng game giàu tính năng dành cho thị trường Indonesia, giới thiệu các tựa Pragmatic Play nổi tiếng bao gồm Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess và Gates of Olympus.",
      "features": [
        "Tối ưu cho thị trường Indonesia",
        "Hiển thị RTP trực tiếp",
        "Tựa Pragmatic Play nổi bật",
        "Khuyến mãi Event Domino",
        "Hệ thống Jackpot Ranking",
        "Hỗ trợ tiền tệ Rupiah"
      ]
    },
    "ru": {
      "name": "Royal Dream",
      "tagline": "Платформа индонезийского рынка · Лобби на основе событий",
      "description": "Royal Dream — многофункциональная игровая платформа для индонезийского рынка с популярными тайтлами Pragmatic Play включая Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess и Gates of Olympus.",
      "features": [
        "Оптимизировано для индонезийского рынка",
        "Живой дисплей RTP",
        "Тайтлы Pragmatic Play в центре",
        "Акция Event Domino",
        "Система Jackpot Ranking",
        "Поддержка валюты Рупия"
      ]
    },
    "ko": {
      "name": "Royal Dream",
      "tagline": "인도네시아 시장 플랫폼 · 이벤트 기반 로비",
      "description": "Royal Dream은 인도네시아 시장을 위한 기능이 풍부한 게임 플랫폼으로, Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess, Gates of Olympus 등 인기 Pragmatic Play 타이틀을 선보입니다.",
      "features": [
        "인도네시아 시장 최적화",
        "라이브 RTP 디스플레이",
        "Pragmatic Play 특집 타이틀",
        "Event Domino 프로모션",
        "Ranking Jackpot 시스템",
        "루피아 통화 지원"
      ]
    },
    "ja": {
      "name": "Royal Dream",
      "tagline": "インドネシア市場プラットフォーム · イベント駆動ロビー",
      "description": "Royal Dreamはインドネシア市場向けの機能豊富なゲームプラットフォームで、Gates of GatotKaca、Sweet Bonanza、Wild Bandito、Starlight Princess、Gates of OlympusなどのPragmatic Playタイトルを提供します。",
      "features": [
        "インドネシア市場最適化",
        "ライブRTP表示",
        "Pragmatic Playフィーチャータイトル",
        "Event Dominoプロモーション",
        "Ranking Jackpotシステム",
        "ルピア通貨サポート"
      ]
    },
    "ar": {
      "name": "Royal Dream",
      "tagline": "منصة السوق الإندونيسية · لوبي مدفوع بالأحداث",
      "description": "Royal Dream منصة ألعاب غنية بالميزات للسوق الإندونيسية، تعرض عناوين Pragmatic Play الشهيرة تشمل Gates of GatotKaca وSweet Bonanza وWild Bandito وStarlight Princess وGates of Olympus.",
      "features": [
        "محسّن للسوق الإندونيسية",
        "عرض RTP مباشر",
        "عناوين Pragmatic Play مميزة",
        "ترويج Event Domino",
        "نظام Jackpot Ranking",
        "دعم عملة Rupiah"
      ]
    },
    "fr": {
      "name": "Royal Dream",
      "tagline": "Plateforme du marché indonésien · Lobby axé sur les événements",
      "description": "Royal Dream est une plateforme de jeux riche en fonctionnalités pour le marché indonésien, présentant des titres Pragmatic Play populaires incluant Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess et Gates of Olympus.",
      "features": [
        "Optimisé pour le marché indonésien",
        "Affichage RTP en direct",
        "Titres Pragmatic Play en vedette",
        "Promotion Event Domino",
        "Système Jackpot Ranking",
        "Support de la devise Rupiah"
      ]
    },
    "es": {
      "name": "Royal Dream",
      "tagline": "Plataforma del mercado indonesio · Lobby orientado a eventos",
      "description": "Royal Dream es una plataforma de juegos rica en funciones para el mercado indonesio, presentando títulos populares de Pragmatic Play incluyendo Gates of GatotKaca, Sweet Bonanza, Wild Bandito, Starlight Princess y Gates of Olympus.",
      "features": [
        "Optimizado para el mercado indonesio",
        "Visualización de RTP en vivo",
        "Títulos Pragmatic Play destacados",
        "Promoción Event Domino",
        "Sistema Jackpot Ranking",
        "Soporte de moneda Rupia"
      ]
    }
  }
};
