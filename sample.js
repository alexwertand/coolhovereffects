function consoleRec (source, number) {
    console.log(source[number++]);
    if (number < source.length) consoleRec(source, number);
}

var arr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

consoleRec(arr, 0);