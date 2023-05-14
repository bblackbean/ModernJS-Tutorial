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
