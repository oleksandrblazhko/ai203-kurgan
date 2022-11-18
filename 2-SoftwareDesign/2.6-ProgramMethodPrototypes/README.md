### Прототипи методів програмних класів
|FR    |Опис вимоги   |Назва класу |Назва методу класу|
|:-    |:-            |:-          |:-                |
| FR1.1 | Адміністратор створює категорію | Administrator | createCategory(string) |
| FR1.2 | Адміністратор редагує категорію | Administrator | editCategory(integer, string) |
| FR1.3 | Користувач створює тему | User | createTopic(string) |
| FR1.4 | Користувач відправляє повідомлення | User | sendMessage(string) |
| FR1.5 | Адміністратор видаляє категорію | Administrator | deleteCategory(integer) |
| FR2.1 | Користувач редагує (своє) повідомлення | User | editMessage(integer, string) |
| FR2.2 | Модератор видаляє повідомлення | Moderator | deleteMessage(integer) |
| FR2.3 | Модератор видаляє тему | Moderator | deleteTopic(integer) |