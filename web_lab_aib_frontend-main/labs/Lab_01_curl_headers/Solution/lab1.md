### Лабораторная работа №1 "HTTP HTTPS и их параметры"  

GET запрос
```git
$ curl --head https://www.rgups.ru/
```
Получил код:
```git
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 200 OK
Server: nginx/1.19.1
Date: Tue, 26 Sep 2023 11:25:49 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Powered-By: ProcessWire CMS
Set-Cookie: wire=216fba483605b2245e31b592fe4d6688; path=/; HttpOnly; SameSite=Lax
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
```
Описание к коду:
```
Строка % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current - отображает информацию о процессе загрузки файла. Разберем ее:

% Total - общий объем данных, которые будут получены
% Received - текущее количество полученных данных
% Xferd - текущий объем переданных данных
Average Speed - средняя скорость передачи данных
Time - общее время, которое прошло
Time - время, затраченное на конкретный этап (например, загрузка или передача данных)
Time - оставшееся время до завершения
Current - текущий прогресс (время, прошедшее с начала операции)
Строка Dload  Upload   Total   Spent    Left  Speed - отображает информацию о загрузке и передаче данных:

Dload - объем данных, загружаемых с сервера
Upload - объем данных, загружаемых на сервер
Total - общий объем данных, который будет загружен или передан
Spent - общее количество времени, затраченное на операцию
Left - оставшееся количество данных, которые необходимо передать или загрузить
Speed - текущая скорость передачи данных
Далее идет заголовок ответа сервера:

HTTP/1.1 200 OK - код состояния HTTP (200 означает успешный запрос), а также сообщение OK, указывающее, что запрос был выполнен успешно.
Затем следуют различные заголовки сервера, такие как:

Server: nginx/1.19.1 - информация о сервере (в данном случае используется сервер nginx версии 1.19.1)
Date: Tue, 26 Sep 2023 11:25:49 GMT - текущая дата и время
Content-Type: text/html; charset=utf-8 - тип содержимого и кодировка текста (в данном случае текст/html и utf-8)
Connection: keep-alive - информация о соединении (в данном случае keep-alive, что означает, что соединение будет удерживаться открытым для последующих запросов)
X-Powered-By: ProcessWire CMS - информация о технологии, на которой работает CMS
Set-Cookie: wire=216fba483605b2245e31b592fe4d6688; path=/; HttpOnly; SameSite=Lax - установка cookie с именем wire и значением 216fba483605b2245e31b592fe4d6688
И наконец, следуют различные заголовки, описывающие кеширование и управление кэшем:

Expires: Thu, 19 Nov 1981 08:52:00 GMT - дата истечения срока действия содержимого
Cache-Control: no-store, no-cache, must-revalidate - инструкции для управления кэшем
Pragma: no-cache - указание, что кэширование должно быть отключено
```
Вывод: я научился делать get-запросы и понимать полученную от них информацию.
