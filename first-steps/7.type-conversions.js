// 형 변환
/* 
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환된다. 이런 과정을 "형 변환(type conversion)"이라고 한다.
alert가 전달받은 값의 자료형과 관계없이 이를 문자열로 자동 변환하여 보여주는 것이나, 수학 관련 연산자가 전달받은 값을 숫자로 변환하는 경우가 형 변환의 대표적인 예시이다.
이 외에, 전달받은 값을 의도를 갖고 원하는 타입으로 변환(명시적 변환)해 주는 경우도 형 변환이라고 할 수 있다.
*/


/* 문자형으로 변환
문자형으로의 형 변환은 문자형의 값이 필요할 때 일어난다.
alert 메서드는 매개변수로 문자형을 받기 때문에, alert(value)에서 value는 문자형이어야 한다. 만약, 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환된다.
String(value) 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있다.
*/

let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 " true"가 저장된다.
alert(typeof value); // string
// false는 문자열 "false"로, null은 문자열 "null"로 변환되는 것과 같이, 문자형으로의 변환은 대부분 예측 가능한 방식으로 일어난다.


/* 숫자형으로 변환
숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어난다.
*/
alert( "6" / "2" ); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행됨

// Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있다.
let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.

alert(typeof num); // number
// 숫자형 값을 사용해 무언가를 하려고 하는데 그 값을 문자 기반 폼(form)을 통해 입력받는 경우엔, 이런 명시적 형 변환이 필수이다. 한편, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 된다.
let age = Number("임의의 문자열 123");

alert(age); // NaN, 형 변환이 실패한다.

// 아래는 숫자형으로 변환 시 적용되는 규칙이다.
/*
전달받은 값	    형 변환 후
undefined	    NaN
null	        0
true and false	1 과 0
string	        문자열의 처음과 끝 공백이 제거된다.
                공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽는다. 변환에 실패하면 NaN이 된다.
*/
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
alert( Number(true) );        // 1
alert( Number(false) );       // 0
// null과 undefined는 숫자형으로 변환 시 결과가 다르다는 점에 유의하자. null은 0이 되고 undefined는 NaN이 된다.


/* 불린형으로 변환
불린형으로의 변환은 아주 간단하다. 이 형 변환은 논리 연산을 수행할 때 발생한다.
Boolean(value)를 호출하면 명시적으로 불리언으로의 형 변환을 수행할 수 있다.
불린형으로 변환 시 적용되는 규칙은 다음과 같다.
* 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 된다.
* 그 외의 값은 true로 변환된다.
*/
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)

/*
* 주의: 문자열 "0"은 true 이다.
PHP 등의 일부 언어에선 문자열 "0"을 false로 취급한다. 그러나 자바스크립트에선 비어 있지 않은 문자열은 언제나 true이다.
*/
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환된다.


/* 요약
문자, 숫자, 논리형으로의 형 변환은 자주 일어나는 형 변환이다.
문자형으로 변환은 무언가를 출력할 때 주로 일어난다. String(value)을 사용하면 문자형으로 명시적 변환이 가능하다. 원시 자료형을 문자형으로 변환할 땐, 대부분 그 결과를 예상할 수 있을 정도로 명시적인 방식으로 일어난다.
숫자형으로 변환은 수학 관련 연산시 주로 일어납니다. Number(value)로도 형 변환을 할 수 있다.

* 숫자형으로의 변환은 다음 규칙을 따른다.
전달받은 값	    형 변환 후
undefined	    NaN
null	        0
true / false	1 / 0
string	        전달받은 문자열을 “그대로” 읽되, 처음과 끝의 공백을 무시한다. 
                문자열이 비어있다면 0이 되고, 오류 발생 시 NaN이 된다.

불린형으로 변환은 논리 연산 시 발생한다. Boolean(value)으로도 변환할 수 있다.
* 불린형으로의 형 변환은 다음 규칙을 따른다.
전달받은 값	                    형 변환 후
0, null, undefined, NaN, ""	    false
그 외의 값	                    true

형 변환 시 적용되는 규칙 대부분은 이해하고 기억하기 쉬운 편에 속한다. 다만 아래는 예외적인 경우이기 때문에 실수를 방지하기 위해 따로 기억해 두도록 하자.
* 숫자형으로 변환 시 undefined는 0이 아니라 NaN이 된다.
* 문자열 "0"과 " "같은 공백은 불린형으로 변환 시 true가 된다.
*/