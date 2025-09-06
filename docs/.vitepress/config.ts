import {defineConfig} from 'vitepress'   // подключаем хелпер для конфига

export default defineConfig({
    lang: 'ru-RU',                         // атрибут <html lang="...">
    title: 'PF-FORUM Docs',                 // глобальный заголовок сайта
    description: 'Документация',            // <meta name="description">
    cleanUrls: true,                        // убирает .html в ссылках

    themeConfig: {                          // настройки темы
        siteTitle: 'PF-FORUM Docs',         // текст слева в шапке
        nav: [                              // верхнее меню
            {text: 'Главная', link: '/'},
            {text: 'Гайд', link: '/guide/'},
            {text: 'Контакты', link: '/contact'}
        ],
        sidebar: [                          // меню слева (боковое)
            {text: 'Наша история', link: '/about/our-story'}
        ],
        outline: {                          // блок "On this page"
            level: [2, 3],                  // показывать H2 и H3
            label: 'Содержание'             // заголовок блока
        }
    }
})
