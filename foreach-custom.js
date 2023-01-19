Array.prototype.customForEach = function (callback) {
    function customForEach(arr, callback, index = 0) {
        if (index === arr.length) return;
        callback(arr[index]);
        customForEach(arr, callback, index + 1);
    }
    customForEach(this, callback);
};

let numbers = [1, 2, 3, 4, 5];
numbers.customForEach(function (num) {
    console.log(num);
});
