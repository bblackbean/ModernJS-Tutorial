// nullish 병합 연산자 '??'

/* 추가된 지 얼마 안 된 문법이므로, 구식 브라우저는 폴리필이 필요  */

// nullish 병합 연산자(nullish coalescing operator) ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있다.
// a ?? b의 평가 결과는 다음과 같다.
// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b

// nullish 병합 연산자 ??없이 x = a ?? b와 동일한 동작을 하는 코드를 작성하면 다음과 같다.
x = ( a != null && a !== undefined ) ? a : b;

// firstName, lastName, nickName이란 변수에 사용자 이름이나 별명을 저장하는데, 사용자가 아무런 정보도 입력하지 않는 케이스도 허용
// 화면에는 실제 값이 있는 변수의 값을 출력, 만약 세 변수 모두 값이없다면 '익명의 사용자'가 출력되도록
// 이때 nullish 병합 연산자 ?? 를 사용하면 값이 정해진 변수를 간편하게 찾아낼 수 있음
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null 이나 undefined 가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛


/* '??'와 '||'의 차이 
 || 는 첫 번째 truthy 값을 반환한다.
 ?? 는 첫 번째 정의된(defined) 값을 반환한다.
 null, undefined, 0 을 구분지어 다뤄야할 때 매우 중요한 역할
*/
height = height ?? 100;     // height 에 값이 정의되지 않은 경우 height엔 100이 할당

let height1 = 0;
alert(height1 || 100);  // 100
// height 에 0을 할당했지만 0을 falsy 한 값으로 취급, null 이나 undefined 를 할당한 것과 동일하게 처리
alert(height1 ?? 100);  // 0
// 0이 할당될 수 있는 변수를사용해 기능을 개발할 땐 || 보다 ?? 가 적합


/* 연산자 우선순위 */
// ?? 의 연산자 우선순위는 5로, 복잡한 표현식 안에서 ?? 를 사용해 값을 하나 선택할 땐 괄호를 추가하는 게 좋음
let height2 = null;
let width = null;

// 괄호를 추가
let area = (height2 ?? 100) * (width ?? 50);
alert(area); // 5000

// 안전성 관련 이슈 때문에 ?? 는 && 나 || 와 함께 사용하지 못한다.
let x = 1 && 2 ?? 3;   // SyntaxError: Unexpected token '??'
// 따라서 제약을 피하려면 괄호를 사용해야 한다.
let x1 = (1 && 2) ?? 3;
alert(x);   // 2