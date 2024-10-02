// t10.js
'use strict';

let arr1= [
  '문자자료',
  5,
  true,
  [2,4,6,8],
  {
    tel : '010-1234-5678',
    address : '청주',
    age : 99
  },
  function() { 
    let atom=5;
    console.log(atom+ ".안녕하세요"); 
  }
];
console.log("arr1 :", arr1);
console.log("1. : ", arr1[1]);
console.log("2-1. : ", arr1[3]);
console.log("2-2. : ", arr1[3][1]);
console.log("3. : ", arr1[4]);
console.log("4. : ", arr1[4].tel);
console.log("5. : ", arr1[5]);
arr1[5]();
console.log("=====================================");

arr1.push(50);
console.log("arr1 :", arr1);

let str1 = arr1+'';
console.log("str1 :", str1); //?

let str2 = arr1.join('-'); //?
console.log("str2 :", str2);
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

arr1.forEach(function(data,idx) {
  console.log(idx,":", data);
});

arr1.forEach((data, idx)=>console.log(idx,":",data));
console.log("9999999999999999999999999999999999999"); //clg

arr1.map((data, idx)=>console.log(idx,":",data));
console.log("--------------------------------------"); //clg

arr1.filter((data, idx)=>console.log(idx,":",data))
console.log("---------------------------------------"); //clg

arr1.filter((data, idx)=>idx%2==0)
  .map((data, idx)=>console.log(idx,":",data));  //인덱스값 짝수로 필터링해도 인덱스번호는 순서대로 간다.
console.clear(); //ccl

let arr2 = [10, 8, 20, 15, 11, 17];
console.log("arr2 :", arr2);

// 오름차순 정렬 : sort() - 문자값으로 정렬 앞의 자리숫자 순으로 정렬된다.
let res = arr2.sort();
console.log("res :", res);
console.log("555555555555555555555555555555555555555");

res = arr2.sort((a,b) => a-b); // 문자값순서대로 정렬한다.
console.log('res :', res);
console.log("555555555555555555555555555555555555555");

// 내림차순 정렬
res = arr2.sort((a,b) => b-a); 
console.log('res :', res);
console.log("555555555555555555555555555555555555555");

// 역순으로 출력 : reverse()
res = arr2.reverse();
console.log('res :', res);
console.log("55555555555659874879684789896547698478");

let arr3 = [10, 8, 20, 15, 11, 17]
console.log('arr3 :', arr3);
res=arr3.reverse();
console.log('res', res);
console.log("55555555555659874879684789896547698478");

//let str3 = 'asdfasdr';  //reverse는 객체에서는 가능하지만 문자열에서는 불가능이다 error 발생
//console.log(str3.reverse());

let max = Math.max(10, 8, 20, 15, 11, 17);
console.log("max :", max);
let min = Math.min(10, 8, 20, 15, 11, 17);
console.log("min :", min);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

let max2 = Math.max(...arr3);  //배열데이터를 열거형으로 바꿀때 ...을 이용한다.
//let max2 = Math.max(...res);
console.log("max :", max2);
let min2 = Math.min(...arr3); 
console.log("max :", min2);

