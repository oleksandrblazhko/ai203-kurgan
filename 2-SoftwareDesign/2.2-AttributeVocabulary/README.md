### Словник атрибутів об’єктів

| Об'єкт                     | Атрибут          | Короткий опис              | Тип        | Обмеження                |
|----------------------------|------------------|----------------------------|------------|--------------------------|
| Користувач                 | Пошта            | Електронна пошта           | текст      | довжина <84 символів     |
| Користувач                 | Пароль           | Зашифрований пароль        | текст      | довжина <84 символів     |
| Повідомлення               | Титул            | Заголовок повідомлення     | текст      | довжина <84 символів     |
| Повідомлення               | Відправник       | ID користувача-відправника | число      | значення від 0 до 2^32   |
| Повідомлення               | Тема             | ID теми                    | число      | значення від 0 до 2^32   |
| Повідомлення               | Текст            | Зміст повідомлення         | текст      | довжина <512 символів    |
| Тема                       | Назва            | Назва теми                 | текст      | довжина <84 символів     |
| Тема                       | Категорія        | ID категорії               | число      | значення від 0 до 2^32   |
| Тема                       | Автор            | ID користувача-автора      | число      | значення від 0 до 2^32   |
| Категорія                  | Назва            | Назва категорії            | текст      | довжина <84 символів     |