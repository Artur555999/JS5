var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')
if(a==b || b==c || a==c) {
    alert('Нет среднего числа')
} else if(a <= b && a >= c) {
    alert('Среднее число: ' + a)
}else if (a >= b && b >= c) {
    alert('Среднее число: ' + b)
}else if (a >= c && b <= c) {
    alert('Среднее число: ' + c)
}else if (a >= b && a <= c) {
    alert('Среднее число: ' + a)
}else if (a <= b && b <= c) {
    alert('Среднее число: ' + b)
}else if (a <= c && b >= c) {
    alert('Среднее число: ' + c)
}else {
    alert('Что то пошло не так')
}