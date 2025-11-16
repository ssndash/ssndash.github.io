<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSNDash - КРУТОЙ МОЛОДЕЖНЫЙ ПРОЕКТ!</title>
    <style>
        body {
            background-color: #000;
            color: #0f0;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="black"/><circle cx="20" cy="20" r="5" fill="lime"/><circle cx="50" cy="50" r="8" fill="cyan"/><circle cx="80" cy="80" r="6" fill="magenta"/></svg>');
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 5px double #ff00ff;
            background-color: #000080;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        h1 {
            font-size: 48px;
            text-shadow: 3px 3px 0 #ff00ff, -3px -3px 0 #00ffff;
            animation: blink 1s infinite;
            margin: 20px 0;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        .marquee {
            background-color: #ff0;
            color: #f00;
            padding: 10px;
            font-weight: bold;
            font-size: 24px;
            margin: 20px 0;
            border: 3px dotted #f00;
        }
        
        .content {
            background-color: #000;
            padding: 20px;
            border: 3px ridge #0f0;
            margin: 20px 0;
        }
        
        h2 {
            color: #ff0;
            border-bottom: 2px dashed #ff0;
            padding-bottom: 5px;
        }
        
        .button {
            display: inline-block;
            background: linear-gradient(to bottom, #ff0, #f90);
            color: #000;
            padding: 10px 20px;
            margin: 10px;
            border: 3px outset #f90;
            text-decoration: none;
            font-weight: bold;
            font-size: 18px;
        }
        
        .button:hover {
            background: linear-gradient(to bottom, #f90, #ff0);
            border: 3px inset #f90;
        }
        
        .counter {
            background-color: #000;
            color: #0f0;
            border: 2px solid #0f0;
            padding: 5px 10px;
            font-family: 'Courier New', monospace;
            font-size: 24px;
            display: inline-block;
            margin: 10px;
        }
        
        .blink {
            animation: blink 0.5s infinite;
        }
        
        .guestbook {
            background-color: #330033;
            padding: 15px;
            margin: 20px 0;
            border: 3px groove #ff00ff;
        }
        
        textarea {
            width: 100%;
            height: 100px;
            background-color: #000;
            color: #0f0;
            border: 2px solid #0f0;
            font-family: 'Courier New', monospace;
        }
        
        .under-construction {
            text-align: center;
            margin: 30px 0;
        }
        
        .construction-gif {
            width: 400px;
            height: 50px;
            background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            font-weight: bold;
            font-size: 24px;
        }
        
        .webring {
            text-align: center;
            margin: 20px 0;
            padding: 10px;
            background-color: #006600;
            border: 3px dotted #00ff00;
        }
        
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #888;
        }
        
        /* Анимированные элементы */
        .spinning-star {
            display: inline-block;
            animation: spin 3s linear infinite;
            font-size: 24px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .rainbow-text {
            background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SSNDash <span class="spinning-star">★</span> ПРОЕКТ</h1>
            <div class="marquee">
                <marquee behavior="scroll" direction="left">ДОБРО ПОЖАЛОВАТЬ НА САМЫЙ КРУТОЙ МОЛОДЕЖНЫЙ САЙТ 2023 ГОДА!!! ЗДЕСЬ ВЫ НАЙДЕТЕ ВСЕ, ЧТО НУЖНО ДЛЯ КРУТОГО ВРЕМЯПРЕПРОЖДЕНИЯ!!!</marquee>
            </div>
        </div>
        
        <div class="content">
            <h2>О ПРОЕКТЕ SSNDash</h2>
            <p>SSNDash - это <span class="rainbow-text">супер-пупер</span> инструмент для всех, кто хочет быть в теме! С нами ты сможешь:</p>
            <ul>
                <li>Следить за своими социальными сетями в одном месте</li>
                <li>Быть самым популярным в своем районе</li>
                <li>Поражать друзей своими цифровыми навыками</li>
            </ul>
            <p>Присоединяйся к нам прямо сейчас - это абсолютно <span class="blink">БЕСПЛАТНО</span>!</p>
            
            <center>
                <a href="https://github.com/your-username/SSNDash" class="button">СКАЧАТЬ С GITHUB</a>
                <a href="#" class="button">ПОСМОТРЕТЬ ДЕМО</a>
            </center>
        </div>
        
        <div class="content">
            <h2>СКРИНШОТЫ</h2>
            <center>
                <div style="background-color: #333; padding: 20px; border: 3px solid #0f0; margin: 10px;">
                    <p style="color: #0f0; margin: 0;">[ЗДЕСЬ БУДЕТ СКРИНШОТ ИНТЕРФЕЙСА]</p>
                </div>
                <p><em>Скриншот загружается... <span id="counter">0</span>%</em></p>
            </center>
        </div>
        
        <div class="guestbook">
            <h2>ГОСТЕВАЯ КНИГА</h2>
            <p>Оставьте свой отзыв о нашем проекте!</p>
            <form>
                <p>Ваше имя: <input type="text" style="background-color: #000; color: #0f0; border: 1px solid #0f0;"></p>
                <p>Ваше сообщение:</p>
                <textarea></textarea>
                <br>
                <input type="submit" value="ОТПРАВИТЬ" class="button">
            </form>
        </div>
        
        <div class="under-construction">
            <div class="construction-gif">
                САЙТ В РАЗРАБОТКЕ
            </div>
            <p>Мы постоянно работаем над улучшением нашего сайта! Заходите позже!</p>
        </div>
        
        <div class="webring">
            <h3>ПРИСОЕДИНЯЙСЯ К НАШЕМУ ВЕБ-РИНГУ!</h3>
            <p>
                <a href="#" style="color: #ff0;">[ПРЕДЫДУЩИЙ САЙТ]</a> | 
                <a href="#" style="color: #ff0;">[СЛУЧАЙНЫЙ САЙТ]</a> | 
                <a href="#" style="color: #ff0;">[СЛЕДУЮЩИЙ САЙТ]</a>
            </p>
        </div>
        
        <div class="footer">
            <p>© 2023 SSNDash Project. Все права защищены.</p>
            <p>Сайт просмотрен раз: <span class="counter">12345</span></p>
            <p>Последнее обновление: Сегодня</p>
            <p>
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAIALAAAAAAQABAAAAMjCLrc/jDKSatlQtScOOvNd4ZgGAaEoqj" width="88" height="31" alt="Best Viewed With Netscape Navigator">
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAAAAAP///wAAAAAAAAAAACH5BAEAAAIALAAAAAAQABAAAAMjCLrc/jDKSatlQtScOOvNd4ZgGAaEoqj" width="88" height="31" alt="Best Viewed With Internet Explorer">
            </p>
        </div>
    </div>

    <script>
        // Анимированный счетчик загрузки
        let counter = 0;
        const counterElement = document.getElementById('counter');
        
        const interval = setInterval(() => {
            counter += Math.floor(Math.random() * 10) + 1;
            if (counter >= 100) {
                counter = 100;
                clearInterval(interval);
            }
            counterElement.textContent = counter;
        }, 200);
        
        // Случайные фразы для бегущей строки
        const phrases = [
            "НЕ ЗАБУДЬTE ПОДПИСАТЬСЯ НА НАШ КАНАЛ!",
            "ССЫЛКА НА GITHUB В ОПИСАНИИ!",
            "ПОДПИШИСЬ НА РАССЫЛКУ - ПОЛУЧИ БОНУС!",
            "ЭТОТ САЙТ СОЗДАН С ПОМОЩЬЮ NOTEPAD!",
            "ПРОВЕРЬТЕ НАШИ НОВЫЕ ФИЧИ!"
        ];
        
        let currentPhrase = 0;
        const marquee = document.querySelector('marquee');
        
        setInterval(() => {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            marquee.textContent = phrases[currentPhrase];
        }, 5000);
        
        // Мигающие элементы
        const blinkElements = document.querySelectorAll('.blink');
        setInterval(() => {
            blinkElements.forEach(el => {
                el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
            });
        }, 500);
    </script>
</body>
</html>
