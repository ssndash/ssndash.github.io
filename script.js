// Функция для обновления счетчика
function updateCounter() {
  const counterElement = document.getElementById('visitorCounter');

// Генерируем случайное число от 0 до 999
let randomValue = Math.floor(Math.random() * 1000);
        
// Определяем, что показывать, с разной вероятностью
if (randomValue === 777) { // Самый редкий шанс (~0.1%)
  counterElement.innerHTML = 'SSNDash - Наше всё!';
  counterElement.style.color = '#ff0000';
  counterElement.style.fontWeight = 'normal';
    } else {
      // Генерируем "реалистичное" число посетителей от 1 до 500
      let visitorCount = Math.floor(Math.random() * 500) + 1;
      counterElement.innerHTML = `<strong>Вы посетитель №${visitorCount}</strong>`;
      counterElement.style.color = '';
      counterElement.style.fontWeight = 'normal';
    }
}
    
// Обновляем счетчик сразу при загрузке
updateCounter();
    
// Можно также обновлять его периодически (например, каждые 10 секунд)
setInterval(updateCounter, 10000);
