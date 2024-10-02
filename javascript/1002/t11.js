// t11.js (문자함수 연습)
'use strict';  
          //          1         2         3         4
          //0123456789012345678901234567890123456489012
let text1 ='ABCDEFTDDDGRFYDFGFDSGABCTRHDGFRGEfdsfsf';
let text2 ='  ABCE   FTD GFD  SG....ABC...RGEYDFG  ';
let text3 ='한국에 오신것을 환영합니다.';
let text4='010-1234-5678';

// length : 길이
// substring() : 특정위치의 문자열을 추출
// indexOf() : 문자(열) 검색(인덱스번지 변환, 없으면 -1을 반환)
// lastIndexOf() : 문자열의 마지막에서부터 검색한다.
// includes() : 문자열 검색(있으면 true/ 없으면 false)
// concat() : 문자열 결합
// trim() : 문자열의 앞뒤의 공백을 제거
// toUpperCase() : 영문자를 모두 대문자로 변환
// toLOwerCase() : 영문자를 모두 소문자로 변환
// charAt() : 문자열을 1문자씩 추출 처리..
// charCodeAt() : 지정된 1문자의 아스키코드값을 출력한다.
// replace() : 지정된 문자열로 첫번째 값만 치환한다.
// replaceAll() : 지정된 문자열로 모든 값을 치환한다.
// slice(a, b) : a번째 위치부터 b번째 위치 앞의 문자값을 추출한다.
// split(a) : a문자를 기준으로 분리시켜서 배열로 저장한다. 
let res = '', cnt=0;

res +=++cnt+" : "+text1.length+ "<br/>" ;//1 o
res +=++cnt+" : "+text2.length+ "<br/>" ;//2 o
res +=++cnt+" : "+text3.length+ "<br/>" ;//3 o
res +=++cnt+" : "+text1.substring(10)+ "<br/>" ;//4 o
res +=++cnt+" : "+text1.substring(10, 13)+ "<br/>" ;//5 o
res +=++cnt+" : "+text3.substring(10)+ "<br/>" ;//6 o
res +=++cnt+" : "+text1.indexOf('ABC')+ "<br/>" ;//7 o
res +=++cnt+" : "+text2.indexOf('ABC')+ "<br/>" ;//8 o
res +=++cnt+" : "+text3.indexOf('ABC')+ "<br/>" ;//9 o
res +=++cnt+" : "+text1.lastIndexOf('ABC')+ "<br/>" ;//10 o
res +=++cnt+" : "+text2.lastIndexOf('ABC')+ "<br/>" ;//11 o
res +=++cnt+" : "+text3.lastIndexOf('ABC')+ "<br/>" ;//12 o
res +=++cnt+" : "+text3.includes('Korea')+ "<br/>" ;//13 o
res +=++cnt+" : "+text3.includes('한국')+ "<br/>" ;//14 o
res +=++cnt+" : "+'미국'.concat(text3.substring(2))+ "<br/>";//15 o
res +=++cnt+" : "+ text1 + text2+"<br/>" ;//16 o
res +=++cnt+" : "+ text1 + text2.trim()+"<br/>" ;//17 o
res +=++cnt+" : "+ text3.charAt(2)+ "<br/>" ;//18 o
res +=++cnt+" : "+ text2.charCodeAt(2)+ "<br/>" ;//19 o   
res +=++cnt+" : "+ text1.replace('ABC', 'opq')+ "<br/>" ;//20 o 
res +=++cnt+" : "+ text2.replace('ABC', 'opq')+ "<br/>" ;//21 o    //앞에 ABC만 바꾼다.
res +=++cnt+" : "+ text2.replaceAll('ABC', 'opq')+ "<br/>" ;//22 o
res +=++cnt+" : "+ text1.slice(5)+ "<br/>" ;//23 o
res +=++cnt+" : "+ text1.slice(5, 8)+ "<br/>" ;//24 o
res +=++cnt+" : "+ text1.split('ABC')[0]+ "<br/>" ;//25 o
res +=++cnt+" : "+ text1.split('ABC')[1]+ "<br/>" ;//26 o
res +=++cnt+" : "+ text1.split('ABC')[2]+ "<br/>" ;//27 o
res +=++cnt+" : "+ text4.split('-')[0]+ "<br/>" ;//28 o
res +=++cnt+" : "+ text4.split('-')[1]+ "<br/>" ;//29 o
res +=++cnt+" : "+ text4.split('-')[2]+ "<br/>" ;//30 o

let tels = text4.split('-');
for(let tel of tels) {
  console.log(`tel : ${tel}`);
}

let title = ['지역번호','국번호','전화번호'];

tels.forEach((tel) => console.log(`tel : ${tel}`));
tels.forEach((tel, idx) => console.log(title[idx]," : ", tel));
//res += text1.length;


demo.innerHTML=res;