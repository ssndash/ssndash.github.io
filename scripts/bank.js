const fileSystem = {
    'C:': [
        { name: 'Windows', type: 'folder', icon: 'folder' },
        { name: 'Program Files', type: 'folder', icon: 'folder' },
        { name: 'Documents', type: 'folder', icon: 'folder' },
        { name: 'autoexec.bat', type: 'file', icon: 'file' },
        { name: 'config.sys', type: 'file', icon: 'file' }
    ],
    'D:': [
        { name: 'Games', type: 'folder', icon: 'folder' },
        { name: 'Music', type: 'folder', icon: 'folder' },
        { name: 'Photos', type: 'folder', icon: 'folder' },
        { name: 'readme.txt', type: 'file', icon: 'file' }
    ],
    'A:': [
        { name: 'Нет дискеты', type: 'file', icon: 'file' }
    ],
    'Games': [
        { name: 'Doom', type: 'folder', icon: 'folder' },
        { name: 'Quake', type: 'folder', icon: 'folder' },
        { name: 'solitaire.exe', type: 'file', icon: 'exe' }
    ],
    'Music': [
        { name: 'Backstreet Boys', type: 'folder', icon: 'folder' },
        { name: 'Spice Girls', type: 'folder', icon: 'folder' },
        { name: 'song.mp3', type: 'file', icon: 'music' }
    ],
    'Photos': [
        { name: 'Vacation', type: 'folder', icon: 'folder' },
        { name: 'Family', type: 'folder', icon: 'folder' },
        { name: 'photo.jpg', type: 'file', icon: 'image' }
    ]
};

// Данные для корзины
let recycleBin = [
    { name: 'старый_файл.txt', originalPath: 'C:\\Documents', deletedDate: '15.05.1998', icon: 'file' },
    { name: 'ненужный.doc', originalPath: 'D:\\Temp', deletedDate: '12.05.1998', icon: 'file' }
];

// Обновление часов
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Генерация случайной суммы
function generateRandomAmount() {
    const amount = Math.floor(Math.random() * 5000) + 1;
    document.getElementById('amountValue').textContent = amount + ' руб.';
}

// Перемещение окон
let activeWindow = null;
let offsetX, offsetY;

document.addEventListener('mousedown', function (e) {
    if (e.target.closest('.title-bar')) {
        const titleBar = e.target.closest('.title-bar');
        const window = titleBar.parentElement;
        activeWindow = window;

        // Поднимаем окно на передний план
        document.querySelectorAll('.window').forEach(w => {
            w.classList.remove('active');
        });
        window.classList.add('active');

        offsetX = e.clientX - window.offsetLeft;
        offsetY = e.clientY - window.offsetTop;

        document.addEventListener('mousemove', moveWindow);
        document.addEventListener('mouseup', stopMove);
    }
});

function moveWindow(e) {
    if (activeWindow) {
        activeWindow.style.left = (e.clientX - offsetX) + 'px';
        activeWindow.style.top = (e.clientY - offsetY) + 'px';
    }
}

function stopMove() {
    activeWindow = null;
    document.removeEventListener('mousemove', moveWindow);
    document.removeEventListener('mouseup', stopMove);
}

// Управление окнами
function minimizeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.style.display = 'none';

    // Обновляем кнопку в панели задач
    const taskbarApp = document.querySelector(`.taskbar-app[data-window="${windowId}"]`);
    if (taskbarApp) {
        taskbarApp.classList.remove('active');
    }
}

function maximizeWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window.style.width === 'calc(100% - 10px)') {
        window.style.width = '500px';
        window.style.height = '400px';
        window.style.top = '100px';
        window.style.left = '150px';
    } else {
        window.style.width = 'calc(100% - 10px)';
        window.style.height = 'calc(100% - 42px)';
        window.style.top = '5px';
        window.style.left = '5px';
    }
}

function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.style.display = 'none';

    // Удаляем кнопку из панели задач
    const taskbarApp = document.querySelector(`.taskbar-app[data-window="${windowId}"]`);
    if (taskbarApp) {
        taskbarApp.remove();
    }
}

function focusWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window.style.display === 'none') {
        window.style.display = 'block';
    }

    // Поднимаем окно на передний план
    document.querySelectorAll('.window').forEach(w => {
        w.classList.remove('active');
    });
    window.classList.add('active');

    // Обновляем кнопку в панели задач
    document.querySelectorAll('.taskbar-app').forEach(app => {
        app.classList.remove('active');
    });
    const taskbarApp = document.querySelector(`.taskbar-app[data-window="${windowId}"]`);
    if (taskbarApp) {
        taskbarApp.classList.add('active');
    }
}

// Добавление приложения в панель задач
function addToTaskbar(windowId, title) {
    const taskbarApps = document.getElementById('taskbarApps');

    // Проверяем, нет ли уже такой кнопки
    let taskbarApp = document.querySelector(`.taskbar-app[data-window="${windowId}"]`);

    if (!taskbarApp) {
        taskbarApp = document.createElement('div');
        taskbarApp.className = 'taskbar-app active';
        taskbarApp.textContent = title;
        taskbarApp.setAttribute('data-window', windowId);
        taskbarApp.onclick = () => focusWindow(windowId);
        taskbarApps.appendChild(taskbarApp);
    } else {
        taskbarApp.textContent = title;
        taskbarApp.classList.add('active');
    }
}

// Меню Пуск
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}

// Закрытие меню Пуск при клике вне его
document.addEventListener('click', function (e) {
    if (!e.target.closest('.start-button') && !e.target.closest('.start-menu')) {
        document.getElementById('startMenu').style.display = 'none';
    }
});

// Открытие окон
function openPaymentWindow() {
    document.getElementById('startMenu').style.display = 'none';

    const paymentWindow = document.getElementById('paymentWindow');
    paymentWindow.style.display = 'block';
    focusWindow('paymentWindow');
    addToTaskbar('paymentWindow', 'SSNBank - Оплата онлайн');

    // Генерируем случайную сумму при открытии
    generateRandomAmount();
}

function openExplorer() {
    document.getElementById('startMenu').style.display = 'none';

    const explorerWindow = document.getElementById('explorerWindow');
    explorerWindow.style.display = 'block';
    focusWindow('explorerWindow');
    addToTaskbar('explorerWindow', 'Проводник - Мой компьютер');

    // Показываем содержимое корневого каталога
    showDriveContents('C:');
}

function openRecycleBin() {
    document.getElementById('startMenu').style.display = 'none';

    const recycleBinWindow = document.getElementById('recycleBinWindow');
    recycleBinWindow.style.display = 'block';
    focusWindow('recycleBinWindow');
    addToTaskbar('recycleBinWindow', 'Корзина');

    updateRecycleBinDisplay();
}

function openNotepad() {
    document.getElementById('startMenu').style.display = 'none';

    const notepadWindow = document.getElementById('notepadWindow');
    notepadWindow.style.display = 'block';
    focusWindow('notepadWindow');
    addToTaskbar('notepadWindow', 'Блокнот - Безымянный');
}

function shutdown() {
    document.getElementById('startMenu').style.display = 'none';
    if (confirm('Завершение работы Windows\n\nВы действительно хотите завершить работу?')) {
        alert('Теперь компьютер можно выключить.');
    }
}

// Функции проводника
let currentPath = 'C:';
let pathHistory = [];
let historyIndex = -1;

function showDriveContents(drive) {
    currentPath = drive;
    const files = fileSystem[drive] || [];
    const explorerFiles = document.getElementById('explorerFiles');
    const explorerStatus = document.getElementById('explorerStatus');
    const explorerLocation = document.getElementById('explorerLocation');

    explorerFiles.innerHTML = '';
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        const icon = document.createElement('span');
        icon.className = `icon-${file.icon}`;

        fileItem.appendChild(icon);
        fileItem.appendChild(document.createTextNode(file.name));

        if (file.type === 'folder') {
            fileItem.onclick = () => openFolder(file.name);
        }
        explorerFiles.appendChild(fileItem);
    });

    explorerStatus.textContent = `Объектов: ${files.length}`;
    explorerLocation.textContent = drive;

    // Обновляем заголовок окна
    document.getElementById('explorerWindowTitle').textContent = `Проводник - ${drive}`;
    addToTaskbar('explorerWindow', `Проводник - ${drive}`);
}

function openFolder(folderName) {
    pathHistory = pathHistory.slice(0, historyIndex + 1);
    pathHistory.push(currentPath);
    historyIndex++;

    currentPath = folderName;

    // Получаем файлы для папки
    const files = fileSystem[folderName] || [];
    const explorerFiles = document.getElementById('explorerFiles');
    const explorerStatus = document.getElementById('explorerStatus');
    const explorerLocation = document.getElementById('explorerLocation');

    explorerFiles.innerHTML = '';
    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        const icon = document.createElement('span');
        icon.className = `icon-${file.icon}`;

        fileItem.appendChild(icon);
        fileItem.appendChild(document.createTextNode(file.name));

        if (file.type === 'folder') {
            fileItem.onclick = () => openFolder(file.name);
        }
        explorerFiles.appendChild(fileItem);
    });

    explorerStatus.textContent = `Объектов: ${files.length}`;
    explorerLocation.textContent = folderName;

    // Обновляем заголовок окна
    document.getElementById('explorerWindowTitle').textContent = `Проводник - ${folderName}`;
    addToTaskbar('explorerWindow', `Проводник - ${folderName}`);
}

function explorerBack() {
    if (historyIndex > 0) {
        historyIndex--;
        const prevPath = pathHistory[historyIndex];
        if (prevPath.includes(':')) {
            showDriveContents(prevPath);
        } else {
            openFolder(prevPath);
        }
    }
}

function explorerForward() {
    if (historyIndex < pathHistory.length - 1) {
        historyIndex++;
        const nextPath = pathHistory[historyIndex];
        if (nextPath.includes(':')) {
            showDriveContents(nextPath);
        } else {
            openFolder(nextPath);
        }
    }
}

function explorerUp() {
    // Возвращаемся к корневому каталогу
    showDriveContents('C:');
}

function openDrive(drive) {
    pathHistory = pathHistory.slice(0, historyIndex + 1);
    pathHistory.push(currentPath);
    historyIndex++;

    showDriveContents(drive);
}

// Функции корзины
function updateRecycleBinDisplay() {
    const recycleBinList = document.getElementById('recycleBinList');
    const recycleBinStatus = document.getElementById('recycleBinStatus');

    recycleBinList.innerHTML = '';
    recycleBin.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'recycle-item';

        const icon = document.createElement('span');
        icon.className = `icon-${file.icon}`;

        item.appendChild(icon);
        item.appendChild(document.createTextNode(file.name));

        const dateSpan = document.createElement('span');
        dateSpan.style.marginLeft = 'auto';
        dateSpan.style.fontSize = '10px';
        dateSpan.style.color = '#808080';
        dateSpan.textContent = `Удален: ${file.deletedDate}`;

        item.appendChild(dateSpan);
        recycleBinList.appendChild(item);
    });

    recycleBinStatus.textContent = `Файлов: ${recycleBin.length}`;
}

function emptyRecycleBin() {
    if (recycleBin.length === 0) {
        alert('Корзина уже пуста.');
        return;
    }

    if (confirm('Вы уверены, что хотите очистить корзину?')) {
        recycleBin = [];
        updateRecycleBinDisplay();
        alert('Корзина очищена.');
    }
}

function restoreAllFiles() {
    if (recycleBin.length === 0) {
        alert('В корзине нет файлов для восстановления.');
        return;
    }

    recycleBin = [];
    updateRecycleBinDisplay();
    alert('Все файлы восстановлены в исходные папки.');
}

// Функции блокнота
function saveNotepad() {
    const text = document.getElementById('notepadText').value;
    if (text.trim() === '') {
        alert('Нет текста для сохранения.');
        return;
    }

    alert('Файл сохранен как "Безымянный.txt"');
}

function clearNotepad() {
    if (confirm('Очистить содержимое блокнота?')) {
        document.getElementById('notepadText').value = '';
    }
}

// Функции оплаты
function formatCardNumber(input) {
    let value = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    input.value = formattedValue;
}

function formatExpiryDate(input) {
    let value = input.value.replace(/[^0-9]/g, '');

    if (value.length >= 2) {
        input.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
}

document.getElementById('cardNumber').addEventListener('input', function () {
    formatCardNumber(this);
});

document.getElementById('expiryDate').addEventListener('input', function () {
    formatExpiryDate(this);
});

document.getElementById('cvv').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

function processPayment() {
    const amount = document.getElementById('amountValue').textContent;
    alert(`Платеж на сумму ${amount} обрабатывается...\n\nСпасибо за использование SSNBank!`);
    document.getElementById('paymentForm').reset();
    generateRandomAmount();
}

function cancelPayment() {
    if (confirm('Вы уверены, что хотите отменить платеж?')) {
        document.getElementById('paymentForm').reset();
        alert('Платеж отменен');
        generateRandomAmount();
    }
}

// Инициализация при загрузке
window.onload = function () {
    generateRandomAmount();
    openPaymentWindow();
};
