// Fundamentals of JS
// arrays and Objects'
// Functions Return
// async

var arr = [1, 2, 3, {}, [5, 6, 7], true]; //anything can be inserted in array

// foreach
arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (val) {
    console.log(val + " Hello");
});

// 1 Hello
// 2 Hello
// 3 Hello
// 4 Hello
// 5 Hello

// map
arr2 = [1, 2, 3, 4, 5];
var newArr2 = arr2.map(function (val) {
    return val * 3;
});

console.log(newArr2);
// (5) [3, 6, 9, 12, 15]

// filter
// when we need to create a new array which either will be smaller or equal in length of original array
// will not change the original arr but will give new filtered array

arr3 = [1, 2, 3, 4, 5];
var num3 = arr3.filter(function (val) {
    return val <= 2;
});
console.log(num3);
// (2) [1, 2]

// find
arr4 = [1, 3, 4, 2, 5];
var ans = arr4.find((val) => {
    if (val === 2) return val;
});
// .find() expects a boolean return value.
console.log(ans); // 2

// indexOf
//returns the first index of 2
arr5 = [1, 4, 2, 5, 1, 2];
console.log(arr5.indexOf(2)); // 2
