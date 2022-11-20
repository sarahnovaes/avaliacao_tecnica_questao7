function ArrayAvg(idade) {
    var i = 0, summ = 0, ArrayLen = idade.length;
    while (i < ArrayLen) {
        summ = summ + idade[i++];
}
    return summ / ArrayLen;
}
var idade = [33, 25, 17, 2, 93, 70, 69];
var a = ArrayAvg(idade);
console.log(a)