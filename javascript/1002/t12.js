// t12.js (문자함수 연습)
'use strict';  

let su1=10;
let su2=-20;
let su3=3.141592;
let su4=-3.141592;
let cnt=0;
let res;

// Math.max(), Math.min()

res += ++cnt+" : "+Math.ceil(su3)+'<br/>'; // ceil() : 
res += ++cnt+" : "+Math.ceil(su4)+'<br/>';
res += ++cnt+" : "+Math.floor(su3)+'<br/>'; // floor() : 무조건 내림
res += ++cnt+" : "+Math.floor(su4)+'<br/>';
res += ++cnt+" : "+Math.floor(su3)+'<br/>'; // trunc() : 소수이하를 무조건 자름
res += ++cnt+" : "+Math.floor(su4)+'<br/>';
res += ++cnt+" : "+Math.pow(su1, 3)+'<br/>'; // pow() : 지수승...
res += ++cnt+" : "+Math.abs(su1)+'<br/>'; // abs() : 절대값...
res += ++cnt+" : "+Math.abs(su2)+'<br/>'; 
res += ++cnt+" : "+Math.sqrt(su1)+'<br/>'; // sqrt() : 재곱근
res += ++cnt+" : "+Math.sqrt(16)+'<br/>';
res += ++cnt+" : "+su3.toFixed(2)+'<br/>'; // toFixed(a) : (a자리+1)에서 반올림
res += ++cnt+" : "+Math.round(su3)+'<br/>'; //round() : 정수부 반올림

// 난수 발생함수 : Math.random() - 0 <= 난수 < 1 실수형 난수
res += ++cnt +" : "+Math.random()+'<br/>';
res += ++cnt +" : "+(parseInt(Math.random()*10)+1)+'<br/>';
res += ++cnt +" : "+(parseInt(Math.random()*(10-5+1))+5)+'<br/>';





demo.innerHTML = res;