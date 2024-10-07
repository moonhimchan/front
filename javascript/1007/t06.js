// t06.js
'use strict';

function regCheck() {
  const regEx1 = /atom/gm;  // 'atom'이라는 문자열이 있으면 'true', 없으면 'false'(여러줄에서의 처리)
  const regEx2 = /atom/g;   // 'atom'이라는 문자열이 있으면 'true', 없으면 'false'(한줄에서의 처리)
  const regEx3 = /mbc|kbs|sbs/g;   // 'mbc'또는 'kbs'또는 'sbs'를 포함하고 있느냐?
  const regEx4 = /홍길(동|순)/g;   // '홍길동' 또는 '홍길순'을 포함하고 있느냐?
  const regEx5 = /[a-z]/g;    // 영문 소문자를 포함하고 있느냐?
  const regEx6 = /[^a-z]/g;    // 영문 소문자를 포함하고 있지 않느냐?
  const regEx7 = /[A-A]/g;    // 영문 대문자를 포함하고 있느냐?
  const regEx8 = /[^A-Z]/g;    // 영문 대문자를 포함하고 있지 않느냐?
  const regEx9 = /[0-9]/g;    // 0~9를 포함하고 있느냐?
  const regEx10 = /[^0-9]/g;    // 0~9를 포함하고 있지 않느냐?
  const regEx11 = /[가-힣]/g;    // 한글을 포함하고 있느냐?
  const regEx12 = /[^가-힣]/g;    // 한글을 포함하고 있지 않느냐?
  const regEx13 = /[a-zA-Z0-9]/g;  // 영문자와 숫자를 포함하고 있느냐?
  const regEx14 = /[^a-zA-Z0-9]/g;  // 영문자와 숫자만 포함하고 있느냐?
  const regEx15 = /[^a-zA-Z0-9_]/g;  // 영문자와 숫자와 밑줄만 포함하고 있느냐?

  const regEx16 = /\./g;  // '.'을 포함하고 있느냐?
  const regEx17 = /\d/g;  // 숫자를 포함하고 있느냐?
  const regEx18 = /\D/g;  // 숫자를 포함하고 있지 않느냐?
  const regEx19 = /\w/g;  // 영문자/숫자/_ 을 포함하고 있느냐?
  const regEx20 = /\W/g;  // 영문자/숫자/_ 을 포함하고 있지 않느냐?
  const regEx21 = /\s/g;  // 공백을 포함하고 있느냐?

  const regEx22 = /홍길동?/g;  // ?앞의 글자가 0개이거나 1개를 포함하느냐?
  const regEx23 = /홍길동+/g;  // +앞의 글자가 1개이상 포함하느냐?
  const regEx24 = /홍길동*/g;  // *앞의 글자가 0개이상 포함하느냐?

  let content = document.getElementById("content").value.trim();

  if(content == "") alert('문자열을 입력하세요');
  // else if(!content.match(regEx1)) alert('본문에 atom문자열을 포함하고 있지 않습니다.');
  // else if(!content.match(regEx2)) alert('본문에 atom문자열을 포함하고 있지 않습니다.');
  // else if(!content.match(regEx3)) alert('본문에 mbc또는 kbs또는 sbs를 포함하고 있지 않습니다.');
  // else if(!content.match(regEx4)) alert("본문에 '홍길동' 또는 '홍길순'을 포함하고 있지 않습니다.");
  // else if(!content.match(regEx5)) alert("본문에 영문 소문자를 포함하고 있지 않습니다.");
  // else if(content.match(regEx6)) alert("본문에 영문 소문자만을 포함하고 있지 않습니다.");
  // else if(!content.match(regEx7)) alert("본문에 영문 대문자를 포함하고 있지 않습니다.");
  // else if(content.match(regEx8)) alert("본문에 영문 대문자만을 포함하고 있지 않습니다.");
  // else if(!content.match(regEx9)) alert("본문에 숫자를 포함하고 있지 않습니다.");
  // else if(content.match(regEx10)) alert("본문에 숫자만을 포함하고 있지 않습니다.");
  // else if(!content.match(regEx11)) alert("본문에 한글을 포함하고 있지 않습니다.");
  // else if(content.match(regEx12)) alert("본문에 영문 한글만을 포함하고 있지 않습니다.");
  // else if(!regEx13.test(content)) alert("본문에 영문자와 숫자를 포함하고 있지 않습니다.");
  // else if(regEx14.test(content)) alert("본문에 영문자와 숫자만 포함하고 있지 않습니다.");
  // else if(regEx15.test(content)) alert("본문에 영문자와 숫자와 밑줄만 포함하고 있지 않습니다.");
  // else if(!regEx16.test(content)) alert("본문에 '.'을 포함하고 있지 않습니다.");
  // else if(regEx18.test(content)) alert("본문에 숫자만을 포함하고 있지 않습니다.");
  // else if(regEx20.test(content)) alert("본문에 영문자/숫자/밑줄만을 포함하고 있지 않습니다.");
  // else if(regEx21.test(content)) alert("본문에 공백이 포함되어 있습니다.");
  // else if(regEx22.test(content)) alert("본문에 '홍길'또는 홍길? 포함되어 있습니다.");
  // else if(regEx23.test(content)) alert("본문에 '홍길동'또는 '홍길동~~' 포함되어 있습니다.");
  else if(regEx24.test(content)) alert("본문에 '홍길동'이 없거나 또는 '홍길동~~' 포함되어 있습니다.");
  else alert('정상적으로 통과 되셨습니다.');
}