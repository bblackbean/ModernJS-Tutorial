/* 자료형 
자바스크립트에는 여덟 가지 기본 자료형이 있다.
자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있다. 따라서 변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있다.
*/
// no error
let message = "hello";
message = 123456;
// 이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 '동적 타입(dynamically typed)' 언어라고 부른다.


//숫자형
let n = 123;
n = 12.345;
/* 숫자형(number type) 은 정수 및 부동소수점 숫자(floating point number)를 나타낸다.
숫자형과 관련된 연산은 다양한데, 곱셈 *, 나눗셈 /, 덧셈 +, 뺄셈 - 등이 대표적이다.
숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN같은 '특수 숫자 값(special numeric value)'이 포함된다. */

// Infinity는 어떤 숫자보다 더 큰 특수 값, 무한대(∞)를 나타낸다.
// 어느 숫자든 0으로 나누면 무한대를 얻을 수 있다.
alert(1/0); // 무한대
// Infinity 를 직접 참조할 수도 있다.
alert(Infinity); // 무한대

// NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값이다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데, 이때 NaN이 반환된다.
alert("숫자가 아님" / 2); // NaN, 문자열을 숫자로 나누면 오류가 발생한다.
// NaN 은 여간해선 바뀌지 않는다. NaN 에 어떤 추가 연산을 해도 결국 NaN 이 반환된다.
alert("숫자가 아님" / 2 + 5); // NaN
// 연산 과정 어디에선가 NaN 이 반환되었다면, 이는 모든 결과에 영향을 미친다.


/* BigInt
내부 표현 방식 때문에 자바스크립트에선 (2^53-1)(9007199254740991) 보다 큰 값 혹은 -(2^53-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없다.
사실 대부분의 상황에서 이런 제약사항은 문제가 되지 않는다. 그렇지만 암호 관련 작업같이 아주 큰 숫자가 필요한 상황이거나 아주 높은 정밀도로 작업을 해야 할 때는 이런 큰 숫자가 필요하다.
BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있다.
BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있다.
*/