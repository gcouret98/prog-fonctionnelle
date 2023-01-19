function repeat(num) {
    if (num <= 20) {
        console.log(num);
        repeat(num + 1);
    }
}
repeat(0);