# Тестовое задание

## 1. Верстка блока

Нужно сверстать страницу по макету по принципу mobile-first.

Примечания:

  + Если времен больше чем на 1 строчку, то в конце строчки должна появиться кнопка "ещё..." при нажатии на которую будут раскрываться скрытые времена.
  + Под ценой может не быть надписи "1200₽ на причале" в таком случае цена должна быть выровнена посередине относительно копки "подробнее"


### Стек используемых технологий:
+ react
+ redux-toolkit
+ sass

### Запуск приложения

Установка зависимостей
```
npm i
```

Запуск приложения
```
npm start
```

## 2. Вопрос по таблице

В текст статьи на странице с адаптивной версткой менеджеры добавили таблицу. На десктопе таблицы выглядят хорошо, но на мобиле - появляется горизонтальный скролл, верстка едет. Что делать?

### Ответ:
Горизонтальный скролл появляется в тех случаях, когда на странице имеются элементы с фиксированной шириной. Таким образом, решение проблемы заключается в использовании относительных величин, либо в удалении строки (закомментирована на фото)

<img width="187" alt="изображение" src="https://user-images.githubusercontent.com/74718352/194720717-a5fc76dd-86d8-4412-8935-6c55be68917e.png">

