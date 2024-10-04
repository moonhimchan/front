let date = new Date();
let nowYear = date.getFullYear();
let nowMon = date.getMonth()+1;
let nowDay = date.getDay();

$(function(){
  //처음에 현재 연월이 나타나도록 표시
  $('table caption').text(`${nowYear}년 ${nowMon}월`);

  nowCal();
  //이전달 버튼을 클릭했을때 이벤트 처리
  $('#beforeBtn').on('click', function(){
    bfBtn();
    $('table caption').text(`${nowYear}년 ${nowMon}월`);
    nowCal();
  });

  //다음달 버튼을 클릭했을때 이벤트 처리
  $('#afterBtn').on('click', function(){
    atBtn();
    $('table caption').text(`${nowYear}년 ${nowMon}월`);
    nowCal();
  });
});

//이전달을 클릭할때 날짜가 전달로 이동함
let bfBtn = ()=>{
  if(nowMon != 1) {
    nowMon--;
  }
  else {
    nowMon = 12;
    nowYear --;
  }
}

//다음달을 클릭할때 날짜가 다음달로 이동함
let atBtn = ()=>{
  if(nowMon != 12) {
    nowMon++;
  }
  else {
    nowMon = 1;
    nowYear ++;
  }
}

//해당 연과 월마다 적용되는 달력을 만드는 함수
function nowCal(){
  $('.rmdate').remove(); //날짜에 해당하는 테이블 모두 삭제
  $(`table tr:nth-child(1)`).after('<tr class="rmdate"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'); //첫주에 해당하는 테이블 생성
  //2월 처리
  let twoMon = ()=>{
    if(nowYear % 4 ===0) return 29;
    else return 28;
  }
  //달의 마지막 날짜 처리
  var lastDate = [31,twoMon(),31,30,31,30,31,31,30,31,30,31];
  
  var thisDate = new Date(nowYear,nowMon-1,1);
  var thisDay = thisDate.getDay();
  var d = 1; //1일부터 시작
  var w = 1; //1주차부터 시작
  while(true){
    $(`table tr:nth-child(${w+1}) td:nth-child(${thisDay+1})`).text(d); //1일에 해당하는 칸에 1을 넣음
    thisDay++; //다음요일
    d++; //다음날
    if(d > lastDate[nowMon-1]) { //날짜가 마지막날짜를 넘어가면 종료
      break;
    }
    if(thisDay == 7) { //요일이 7이되면 주를 넘기고 요일을 0으로 변경
      thisDay = 0;
      w++;
      $(`table tr:nth-child(${w})`).after('<tr class="rmdate"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'); //한주에 대한 입력이 끝나면 다음주를 입력
    }
  }
}