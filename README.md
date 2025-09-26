# infolimp-ai

Небольшой статичный репозиторий с веб-страницами и демо.

## Описание
В этом репозитории лежат HTML/CSS/JS файлы для простого сайта и демонстраций (например, `tetris.html`, `tetriphone.html`). Основная точка входа — `index.html`.

## Структура
- `index.html` — главная страница
- `styles.css` — стили
- `script.js` — скрипты
- `tetris.html`, `tetriphone.html` — отдельные демо/игры
- `zen_7St17VXlJJyrKa9qnkgZVLfoRzgdaoGhATcqyWunC1M8GPUc02E9YxTKvB1WhkvA.html` — файл верификации сервиса (см. ниже)
- `LICENSE` — лицензия проекта

## Запуск локально
Проще всего открыть `index.html` в браузере. Чтобы запустить локальный HTTP-сервер из корня репозитория:

```bash
python3 -m http.server 8000
# затем открыть http://localhost:8000/
```

## Верификация (Yandex.Zen или аналогичные сервисы)
Файл `zen_7St17VXlJJyrKa9qnkgZVLfoRzgdaoGhATcqyWunC1M8GPUc02E9YxTKvB1WhkvA.html` предназначен для подтверждения прав на сайт у внешнего сервиса (например, Yandex.Zen). Не удаляйте этот файл, если верификация нужна — удаление прервёт подтверждение.

## Лицензия
См. файл `LICENSE`.

## Контрибуция
PR и issues принимаются. При создании PR опишите изменения кратко.
