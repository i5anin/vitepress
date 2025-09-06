---
layout: home
title: Подготовка к собеседованию
description: 2-недельный интенсив по JavaScript, TypeScript и Vue 3
hero:
  name: Подготовка к собеседованию
  text: Дорожная карта для выхода на уровень middle+/senior
  tagline: 80% JavaScript · 10% TypeScript · 10% Vue 3
  actions:
    - theme: brand
      text: JavaScript Core
      link: /javascript/index
    - theme: alt
      text: TypeScript + Vue
      link: /typescript/index
features:
  - icon: 🟨
    title: JavaScript Core
    details: Event Loop, асинхронность, прототипы, классы, объекты, ES2025, алгоритмы
  - icon: 🔷
    title: TypeScript
    details: Generics, utility types, strict mode, типизация API, discriminated unions
  - icon: 🟩
    title: Vue 3
    details: Composition API, Pinia, реактивность, оптимизация, архитектура приложений
---

## 📌 Общая структура подготовки

:::info Почему так?
На собеседованиях на зарплаты **200к+** вопросы распределяются:
- **80% — JavaScript**
- **10% — TypeScript**
- **10% — Vue**
  :::

---

## 🔥 JavaScript Core (80%)

### Темы и практика
- [Event Loop](/practice/event-loop)
- [Promises (all, race, any, allSettled)](/practice/promises)
- [setTimeout vs queueMicrotask](/practice/timeout-microtask)
- [Контекст выполнения (`this`, call, apply, bind)](/practice/this-context)
- [Замыкания и область видимости](/practice/closures)
- [Прототипы, классы, наследование](/practice/prototypes)
- [Object.defineProperty и Proxy](/practice/proxy-defineproperty)
- [ES2021–ES2025 новые возможности](/practice/es2025)
- [Алгоритмы с массивами](/practice/arrays)
- [Set/Map/WeakMap](/practice/collections)

**Практика:**
- [Написать debounce](/practice/debounce)
- [Написать throttle](/practice/throttle)
- [Реализовать deepClone](/practice/deepclone)
- [Собрать EventEmitter](/practice/eventemitter)
- [Реализовать Promise.all руками](/practice/promise-all)

---

## 🔷 TypeScript (10%)

- [Generics](/practice/ts-generics)
- [Utility Types](/practice/ts-utility)
- [Типизация API (`PaginatedResponse<T>`)](/practice/ts-api)
- [Discriminated unions](/practice/ts-unions)
- [Типизация Vue props/emits](/practice/ts-vue-props)

---

## 🟩 Vue 3 (10%)

- [Options API vs Composition API](/practice/vue-options-vs-composition)
- [ref vs reactive](/practice/vue-ref-reactive)
- [watch vs watchEffect](/practice/vue-watch)
- [Pinia + типизация](/practice/vue-pinia)
- [Оптимизация (v-memo, lazy, virtual scroll)](/practice/vue-optimization)

---

## 📅 2-недельный план

:::steps
### День 1–5
Фокус на **JavaScript Core**: теория + 5 задач в день.

### День 6–7
**TypeScript**: generics, utility types, API типизация.

### День 8–10
**Vue 3**: реактивность, Pinia, архитектура.

### День 11–13
Mock-интервью: 70% JS, 20% алгоритмы, 10% Vue/TS.

### День 14
Финальное повторение + soft-skills.
:::

---

## 📚 Навигация
- [JavaScript Core](/javascript/index)
- [TypeScript](/typescript/index)
- [Vue 3](/vue/index)
- [Практика (все темы)](/practice/index)
