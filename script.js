//1-masala
// function customRepeat(str, count) {
//     if (typeof str !== "string" || count < 0) return "";
//     let result = "";
//     for (let i = 0; i < count; i++) {
//       result += str;
//     }
//     return result;
//   }
//   console.log(customRepeat("hello", 3)); 


//2-masala
// let obj = {
//     name: "Usmon",
//     age: 22,
//     surname: "Aliyev",
//     birthYear: "2000",
//     money: 4000
//   };
//   function sumNumbersInObject(obj) {
//     let sum = 0;
//     for (let key in obj) {
//       if (typeof obj[key] === "number") {
//         sum += obj[key];
//       }
//     }
//     return sum;
//   }
//   console.log(sumNumbersInObject(obj));


//3-masala
// function customSplit(str, separator) {
//     let result = [];
//     let temp = "";  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === separator) {
//         result.push(temp);
//         temp = "";
//       } else {
//         temp += str[i];
//       }
//     } 
//     result.push(temp);
//     return result;
//   }
//   console.log(customSplit("hello world", " ")); 


//4-masala
// function isPowerOfFour(n) {
//     if (n < 1) return false;
//     while (n % 4 === 0) {
//       n /= 4;
//     }
//     return n === 1;
//   }
//   console.log(isPowerOfFour(16)); 


//5-masala
// function rotateArray(nums, k) {
//     k %= nums.length; 
//     return [...nums.slice(-k), ...nums.slice(0, -k)];
//   }
//   console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 


//6-masala
// let s = ["H","e","l","l","o"];
// function reverseS(){
//     return s.reverse()
// }
// reverseS();
// console.log(s);

//7-masala
// function reverseVowels(s) {
//     let vowels = s.match(/[aeiouAEIOU]/g);
//     if (!vowels) return s; 
//     return s.replace(/[aeiouAEIOU]/g, () => vowels.pop()); 
//   }
  
//   console.log(reverseVowels("IceCream"));
  