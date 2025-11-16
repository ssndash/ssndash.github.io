<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSNDash</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --secondary: #10b981;
            --dark: #1f2937;
            --light: #f9fafb;
            --gray: #6b7280;
            --bg: #f9fafb;
            --text: #1f2937;
            --card-bg: #ffffff;
            --footer-bg: #1f2937;
            --footer-text: #f9fafb;
            --logo-color: #ffffff;
        }

        [data-theme="dark"] {
            --bg: #1f2937;
            --text: #f9fafb;
            --card-bg: #374151;
            --footer-bg: #111827;
            --footer-text: #d1d5db;
            --gray: #9ca3af;
        }

        body {
            background-color: var(--bg);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
            transition: background-color 0.3s, color 0.3s;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            color: var(--logo-color);
        }

        .logo i {
            margin-right: 10px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            align-items: center;
        }

        .nav-links li {
            margin-left: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #e0e7ff;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: white;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .theme-toggle {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            transition: transform 0.3s;
        }

        .theme-toggle:hover {
            transform: scale(1.1);
        }

        .menu-toggle {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
        }

        /* Hero Section */
        .hero {
            padding: 180px 0 100px;
            background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        [data-theme="dark"] .hero {
            background: linear-gradient(135deg, #3730a3, #1e1b4b);
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%236366f1" fill-opacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
            background-size: cover;
            background-position: center;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            color: var(--dark);
        }

        [data-theme="dark"] .hero h1 {
            color: var(--light);
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: var(--gray);
        }

        .btn {
            display: inline-block;
            background: var(--primary);
            color: white;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        /* Team Section */
        .team {
            padding: 100px 0;
            background-color: var(--card-bg);
        }

        .section-title {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color: var(--text);
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
        }

        .section-title p {
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .team-member {
            background: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            text-align: center;
            padding: 2rem 1.5rem;
        }

        .team-member:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .member-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2.5rem;
            font-weight: 700;
        }

        .team-member h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--text);
        }

        .team-member .role {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 1rem;
            display: block;
        }

        .team-member p {
            color: var(--gray);
            margin-bottom: 1.5rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #f3f4f6;
            color: var(--gray);
            transition: all 0.3s ease;
        }

        [data-theme="dark"] .social-links a {
            background: #4b5563;
        }

        .social-links a:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-3px);
        }

        /* Projects Section */
        .projects {
            padding: 100px 0;
            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
        }

        [data-theme="dark"] .projects {
            background: linear-gradient(135deg, #1e3a8a, #0f172a);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            padding: 2rem;
            text-align: center;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .project-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            margin: 0 auto 1.5rem;
        }

        .project-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text);
        }

        .project-content p {
            color: var(--gray);
            margin-bottom: 1.5rem;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .project-tags span {
            background: #f3f4f6;
            color: var(--gray);
            padding: 4px 12px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        [data-theme="dark"] .project-tags span {
            background: #4b5563;
        }

        /* Footer */
        footer {
            background: var(--footer-bg);
            color: var(--footer-text);
            padding: 60px 0 30px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            position: relative;
            display: inline-block;
        }

        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--primary);
            border-radius: 2px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.8rem;
        }

        .footer-links a {
            color: var(--footer-text);
            text-decoration: none;
            transition: all 0.3s ease;
            opacity: 0.8;
        }

        .footer-links a:hover {
            opacity: 1;
            padding-left: 5px;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #374151;
            color: #9ca3af;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in-up {
            animation: fadeInUp 0.8s ease forwards;
        }

        .delay-1 {
            animation-delay: 0.2s;
        }

        .delay-2 {
            animation-delay: 0.4s;
        }

        .delay-3 {
            animation-delay: 0.6s;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--primary-dark);
                flex-direction: column;
                padding: 1rem 0;
                text-align: center;
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            }

            .nav-links.active {
                display: flex;
            }

            .nav-links li {
                margin: 0.8rem 0;
            }

            .menu-toggle {
                display: block;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .section-title h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav>
                <div class="logo">
                    <i class="fas fa-chart-line"></i>
                    SSNDash
                </div>
                <ul class="nav-links">
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#team">Команда</a></li>
                    <li><a href="#projects">Проекты</a></li>
                    <li>
                        <button class="theme-toggle" id="theme-toggle">
                            <i class="fas fa-moon"></i>
                        </button>
                    </li>
                </ul>
                <div class="menu-toggle">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content fade-in-up">
                <h1>главные петушки мира</h1>
                <p>SSNDash - команда крутых пацанчиков.</p>
                <a href="#projects" class="btn">Наши проекты</a>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team" id="team">
        <div class="container">
            <div class="section-title fade-in-up">
                <h2>Наша команда</h2>
                <p>Крутые пацанчики</p>
            </div>
            <div class="team-grid">
                <!-- tvrshk -->
                <div class="team-member fade-in-up delay-1">
                    <div class="member-avatar">TV</div>
                    <h3>tvrshk</h3>
                    <span class="role">разраб свинотыос</span>
                    <p>крутой пацанчик 1</p>
                    <div class="social-links">
                        <a href="https://github.com/tvrshk1256" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://t.me/tvrshk" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>

                <!-- KS51 -->
                <div class="team-member fade-in-up delay-2">
                    <div class="member-avatar">KS</div>
                    <h3>KS51</h3>
                    <span class="role">хз кто это</span>
                    <p>просто петушок</p>
                    <div class="social-links">
                        <a href="https://github.com/ks51s" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://t.me/ks51s" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>

                <!-- guga -->
                <div class="team-member fade-in-up delay-3">
                    <div class="member-avatar">GU</div>
                    <h3>guga</h3>
                    <span class="role">ратер крутой</span>
                    <p>восзожно петушок 2</p>
                    <div class="social-links">
                        <a href="https://t.me/sgniniameR" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>

                <!-- Timofya -->
                <div class="team-member fade-in-up delay-1">
                    <div class="member-avatar">TI</div>
                    <h3>Timofya</h3>
                    <span class="role">хз</span>
                    <p>крутой пацанчик 2</p>
                    <div class="social-links">
                        <a href="https://github.com/Timofya" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://t.me/shitelderevni12nenaidesh" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>

                <!-- Ackorbinka -->
                <div class="team-member fade-in-up delay-2">
                    <div class="member-avatar">AC</div>
                    <h3>Ackorbinka</h3>
                    <span class="role">миша</span>
                    <p>крутой пацанчик 3</p>
                    <div class="social-links">
                        <a href="https://t.me/Acquarbinka_Official" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>

                <!-- Letexe -->
                <div class="team-member fade-in-up delay-3">
                    <div class="member-avatar">LE</div>
                    <h3>Letexe</h3>
                    <span class="role">никита</span>
                    <p>петух 3</p>
                    <div class="social-links">
                        <a href="https://t.me/Y_NHH_E" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="projects" id="projects">
        <div class="container">
            <div class="section-title fade-in-up">
                <h2>Наши проекты</h2>
                <p>Инновационные решения, созданные с использованием современных технологий</p>
            </div>
            <div class="projects-grid">
                <div class="project-card fade-in-up delay-1">
                    <div class="project-icon">
                        <i class="fas fa-dashboard"></i>
                    </div>
                    <div class="project-content">
                        <h3>SvinotaOS</h3>
                        <p>свиной дистрибутив линукс</p>
                        <div class="project-tags">
                            <span>Свиное</span>
                            <span>Linux</span>
                        </div>
                    </div>
                </div>

                <div class="project-card fade-in-up delay-2">
                    <div class="project-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="project-content">
                        <h3>SberPay для ПК</h3>
                        <p>какое-то говно от кса</p>
                        <div class="project-tags">
                            <span>PHP</span>
                            <span>Программа</span>
                        </div>
                    </div>
                </div>

                <div class="project-card fade-in-up delay-3">
                    <div class="project-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="project-content">
                        <h3>GugaRAT</h3>
                        <p>крутая ратка от гуги и от кс-а</p>
                        <div class="project-tags">
                            <span>Хз (от гуги)</span>
                            <span>HTML (от кс-а)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>SSNDash</h3>
                    <p>Команда разработчиков, создающая инновационные цифровые решения для бизнеса и пользователей.</p>
                    <div class="social-links">
                        <a href="https://github.com/SSNDash" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://t.me/SSNDash" target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Навигация</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#team">Команда</a></li>
                        <li><a href="#projects">Проекты</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 SSNDash. Все права защищены.</p>
            </div>
        </div>
    </footer>

    <script>
        // Переключение темы
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Проверяем сохраненную тему или системные настройки
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
