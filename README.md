# NovaPlay Gaming Platform

## 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 用户前台 | React + Vite + Tailwind CSS | React 19 |
| 后台管理 | React + Vite | React 18 |
| 后端 API | PHP + ThinkPHP | PHP ^7.4, ThinkPHP 5.1 |
| 数据库 | MySQL | 5.7 |

## 目录结构

```
├── frontend/     # 用户前台 (React 19 + Tailwind 4)
├── admin/        # 后台管理面板 (React)
├── api/          # 后端 API (PHP 7.4 + ThinkPHP 5.1)
│   ├── application/   # 应用代码
│   ├── thinkphp/      # ThinkPHP 5.1 框架
│   ├── vendor/        # Composer 依赖
│   ├── config/        # 配置文件
│   ├── route/         # 路由文件
│   └── database.sql   # 数据库结构和初始数据
```

## 快速启动

### 1. 数据库初始化
```bash
mysql -u root -e "CREATE DATABASE novaplay CHARACTER SET utf8mb4;"
mysql -u root novaplay < api/database.sql
```

### 2. 配置 .env
```bash
cp api/.env.example api/.env
# 修改 DB_HOST, DB_USER, DB_PASS
```

### 3. 启动 API
```bash
cd api && php -S 0.0.0.0:8080 public/index.php
```

### 4. 启动前台
```bash
cd frontend && pnpm install && pnpm dev
```

### 5. 启动后台
```bash
cd admin && pnpm install && pnpm dev
```

## 默认账号
- 管理员: `admin` / `Admin@2024`
