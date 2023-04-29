// leetcode

const arr = []

for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}

numsSorted = arr.sort();

function bubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}


let now = new Date();
bubble(arr)
let after = new Date();

let dif = after - now
console.log(dif);

function isSorted(nums1, nums2) {
    if (nums1 === nums2) {
        return true
    } else {
        return false
    }
}

console.log(isSorted(arr, numsSorted));
