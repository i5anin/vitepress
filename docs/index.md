---
layout: home
title: Документация проекта
description: Единый источник правды по фронтенду, бэкенду и DevOps
hero:
  name: Проектная документация
  text: Стандарты, гайдлайны и практики 2025
  tagline: Vue 3 (Composition API) · TypeScript · Express · Laravel · SQL · Docker
  actions:
    - theme: brand
      text: Быстрый старт
      link: /getting-started
    - theme: alt
      text: Архитектура
      link: /architecture
features:
  - icon: ⚙️
    title: Стек 2025
    details: Vue 3 + TypeScript, Vite, Pinia, Vitest, Playwright, Docker, CI/CD
  - icon: 🧩
    title: Чистый код
    details: SOLID, модульность, явные контракты, предсказуемые абстракции
  - icon: 📦
    title: Сборка
    details: Vite, код-сплиттинг, динамический импорт, минимальный бандл
  - icon: 🧪
    title: Тестирование
    details: Unit, компонентные и e2e тесты, покрытие как метрика качества
  - icon: 🔐
    title: Безопасность
    details: .env, секреты вне репозитория, валидация ввода, политика зависимостей
  - icon: 🚀
    title: Доставка
    details: CI/CD, линтеры на PR, автоверсионирование и ченджлог
---

## Быстрый обзор

- Цель: единообразная разработка и поставка функций без деградаций производительности и качества.
- Основание: требования к стеку и практика 2025 года, акцент на предсказуемость и воспроизводимость среды.

## TL;DR
1. Установи зависимости.
2. Запусти dev-сервер.
3. Запусти тесты и линтеры.
4. Собери артефакт.

### Windows / PowerShell
```powershell
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm run dev
