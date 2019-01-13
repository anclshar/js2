var arg1 = +prompt('Введите число')
var arg2 = +prompt('Введите число')
var operation = +prompt('Введите название математической операции')
function mathOperation(arg1, arg1, operation)
{
    switch (operation) {
        case 'сложение':
        return (arg1 + arg2)
        case 'вычитание':
        return (arg1 - arg2)
        case 'умножение':
        return (arg1 * arg2)
        case 'деление':
        return (arg1 / arg2)
    }
}