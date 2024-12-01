function swap(a, b) {
    return [b, a];
}
let [x, y] = swap(5, 10);
console.log(x, y); 

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2)); 
console.log(countOccurrences(["a", "b", "a"], "a")); 


function mostFrequent(arr) {
    const frequency = {};
    arr.forEach(item => frequency[item] = (frequency[item] || 0) + 1);
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3])); 
console.log(mostFrequent(["a", "b", "b", "a", "a"]));


function combineStrings(str1, str2) {
    return `${str1} ${str2}`;
}
console.log(combineStrings("Hello", "World")); 
console.log(combineStrings("Saylani", "Institute")); 

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(randomColor()); 
console.log(randomColor()); 

function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
console.log(sumOfDigits(123)); 
console.log(sumOfDigits(4567)); 


function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4], 3)); 
console.log(findIndex(["a", "b", "c"], "b")); 


function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}
console.log(shuffleString("hello"));
console.log(shuffleString("Saylani")); 


function secondLargest(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted[1];
}
console.log(secondLargest([1, 2, 3, 4]));
console.log(secondLargest([10, 20, 20, 5])); 


function stringToArray(str) {
    return str.split(' ');
}
console.log(stringToArray("Saylani Web Development")); 
console.log(stringToArray("JavaScript is fun")); 

function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 
console.log(mergeSortedArrays([10, 20], [15, 25])); 


function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumPositiveNumbers([1, -2, 3, 4, -5])); 
console.log(sumPositiveNumbers([-10, 20, 30, -40])); 


function extractDomain(url) {
    return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
}
console.log(extractDomain("https://www.example.com/page")); 
console.log(extractDomain("http://test.com")); 

function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); 
console.log(sumEvenNumbers([10, 15, 20, 25]));


function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date(date).getDay()];
}
console.log(getDayOfWeek("2024-12-01")); 
console.log(getDayOfWeek("2024-12-25")); 


function largestEvenNumber(arr) {
    return Math.max(...arr.filter(num => num % 2 === 0));
}
console.log(largestEvenNumber([1, 2, 3, 4, 6])); 
console.log(largestEvenNumber([10, 15, 20, 25])); 



function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
console.log(mergeObjects({ x: 5 }, { y: 10 })); 



function capitalizeFirstLetter(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}
console.log(capitalizeFirstLetter("hello world")); 
console.log(capitalizeFirstLetter("saylani technical institute")); 


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInteger(1, 10));


function uniqueArray(arr) {
    return [...new Set(arr)];
}
console.log(uniqueArray([1, 2, 2, 3, 4, 4])); 
console.log(uniqueArray(["a", "b", "a", "c"])); 


function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world")); 


function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(removeVowels("hello world"));
console.log(removeVowels("Saylani Institute")); 

function getAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
console.log(getAge(2000)); 
console.log(getAge(1995)); 


function findMissingNumber(arr) {
    const n = arr.length + 1;
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}
console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber([3, 5, 6, 4])); 

function countUppercase(str) {
    return str.split('').filter(char => char >= 'A' && char <= 'Z').length;
}
console.log(countUppercase("Hello World"));// 2
console.log(countUppercase("Saylani TECHNICAL Institute"));


















