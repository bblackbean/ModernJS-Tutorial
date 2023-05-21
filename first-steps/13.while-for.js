/* while과 for 반복문 */

while (condition) {
    // 코드
    // '반복문 본문(body)' 이라 불림
}
// condition 이 truthy 이면 반복문 본문의 코드가 실행

// 조건 i < 3 을 만족할 동안 i 를 출력
let i = 0;
while ( i < 3) {    // 0, 1, 2 가 출력
    alert( i );
    i++;
}

let a = 3;
while(a) {      // a가 0이 되면 조건이 falsy 가 되므로 반복문이 멈춤
    alert(a);
    a--;
}

// 본문이 한 줄이면 대괄호를 쓰지 않아도 됨
let b = 3;
while(b) alert(b--);


/* do...while 반복문 */
// do..while 반복문을 사용하면 condition을 반복문 본문 아래로 옮길 수 있다.
do {
    // 반복문 본문
} while (condition);
// 이때 본문이 먼저 실행되고, 조건을 확인한 후 조건이 truthy 인 동안엔 본문이 계속 실행

let c = 0;
do {
    alert(c);
    c++;
} while(c < 3);
// do...while 문법은 조건이 참인지 아닌지에 상관없이, 본문을 최소한 한 번이라도 실행하고 싶을 때만 사용해야 한다. 대다수의 상황에서는 do...while 보다 while(..) {..} 이 적합하다.


/* for 반복문 */
for (begin; condition; step) {
    // ...반복문 본문...
}

for (let d = 0; d < 3; d++){    // 0, 1, 2가 출력
    alert(d);
}


/* 반복문 빠져나오기 */
// 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나올 수 있음
let sum = 0;
while(true){
    let value = +prompt("숫자를 입력하세요",'');
    if(!value) break;   // (*)
    sum += value;
}
alert('합계: '+ sum);


/* 다음 반복으로 넘어가기 */
// continue 지시자는 break의 가벼운 버전
// 대신 현재 실행중인 이터레이션을 멈추고 반복문이 다음 이터레이션을 강제로 실행시키도록 한다(조건을 통과할 때)
// continue는 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있다.
for(let i = 0; i < 10; i++){
    // 조건이 참이라면 남아있는 본문은 실행되지 않는다.
    if(i % 2 == 0) continue;
    alert(i);   // 1, 3, 5, 7, 9가 차례대로 출력됨
}


/* break/continue와 레이블 */
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let input = prompt('(${i},${j})의 값', '');

        // 여기서 멈추고 아래의 '완료!'가 출력되게 하려면?
    }
}
alert('완료!');

// input 아래에 break 를 쓰면 안쪽 반복문만 빠져나올 수 있음. 이럴 때 레이블을 사용할 수 있다.
// 레이블(label)은 반복문 앞에 콜론과 함께 쓰이는 식별자이다.
labelName: for(...) {
    ...
}

// 반복문 안에서 break <labelName> 문을 사용하면 레이블에 해당하는 반복문을 빠져나올 수 있다.
outer: for(let i=0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let input = prompt('(${i},${j})의 값', '');

        // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나감
        if(!input) break outer;

        // 입력받은 값을 가지고 무언가를 함
    }
}
alert('완료!');


// for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보기
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

  let i2 = 0;
while (i2 < 3) {
  alert( `number ${i2}!` );
  i2++;
}

// 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num);

// 소수 출력하기
// 2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성
// n = 10 이라면 -> 2,3,5,7
/*
범위 내 모든 숫자 i에 대해서 {
  1과 i 사이에 제수가 있는지를 확인
  있으면 => 소수가 아님
  없으면 => 소수이므로 출력해줌
}
*/
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert( i ); // 소수
}