// #1 O(n) 
//you have tow variable num of people and breed of dog(golden retriever)
//when you find the person who has the same breed of dog then you stop looking
//do a for loop through the people and with each person you check the breed of dog.
//since the person only has one dog you won't need do multiple loops

/*
2. 
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}

A. - O(1) - to check if a number is even, no matter the number it only runs once

3. 
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

A. - O(n * m) - you loop through arr1, 
each time you iterate through arr1 you go through all of arr2

4.
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

A. - O(n) - loop through the array, for each value in the 
array you multiple it by 2 and return the doubled array. The Big O
is the number of items in the array.

5. 
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

A. - O(log n) - searches and the time only increases by 1 even if you double the array

6.
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

A. - O(n^2) - two loops same array

7.
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

A. - O(log n) - based on example in llesson, I need to study this a little more

8.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

A. - O()
*/ 