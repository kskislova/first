function solve() {
    // Получаем значение A
    const a = parseFloat(document.getElementById('inputData').value);
    let x;

    // Решаем задачу
    if (a < 10) {
        x = Math.pow(a, 4);
    } else if (a > 61) {
        x = a;
    } else {
        x = a - Math.sin(Math.pow(a, 2));
    }

    // Выводим результат
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Результат: x = ${x.toFixed(4)}`;

    // Сохраняем решение в скрытом поле
    document.getElementById('solution').value = `Результат: x = ${x.toFixed(4)}`;
}