---
title: Options API vs Composition API
description: Сравнение двух подходов во Vue 3 и практика применения
---

# Vue: Options API vs Composition API

## 📖 Теория

**Options API** — классический подход Vue 2 и поддерживаемый в Vue 3.  
Логика разделяется по опциям (`data`, `methods`, `computed`, `watch`).

**Composition API** — современный подход Vue 3.  
Использует `setup()`, `ref`, `reactive`, `computed`, `watch`. Позволяет группировать код по смыслу (фичам), а не по типу.

---

## 🔍 Сравнение

| Критерий | Options API | Composition API |
|----------|-------------|-----------------|
| Стиль    | Декларативный через опции | Функциональный через `setup` |
| Код      | Разделяется по типам (`data`, `methods`, `watch`) | Группируется по логике |
| Масштабируемость | Сложно при больших компонентах | Легче выделять и переиспользовать |
| TypeScript | Ограниченная поддержка | Полная интеграция |
| Повторное использование | Mixins (минусы: коллизии, неочевидность) | Composables (чистые функции, контроль импортов) |

---

## 🧩 Примеры

### Options API

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <button @click="increment">{{ double }}</button>
</template>
