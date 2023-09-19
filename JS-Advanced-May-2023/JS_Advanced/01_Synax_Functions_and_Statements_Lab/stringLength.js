function stringLength(str1, str2, str3) {
    let sum = str1.length + str2.length + str3.length;
    let average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');