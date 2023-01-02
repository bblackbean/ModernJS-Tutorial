/*** 변수와 상수 ***/
/* 변수(variable) : 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'
* 자바스크립트에서는 let 키워드를 사용해 변수를 생성
*/
let message;

message = 'Hello'; //할당 연산자 = 를 사용해 변수 안에 문자열 데이터를 저장

let message2;
message = 'Hello!';
alert(message2); //변수에 저장된 값을 보여줌

let message3 = 'Hello!!'; //변수를 정의하고 값을 할당
alert(message3); // Hello!!

//한 줄에 여러 변수를 선언하는 것도 가능
//let user = 'John', age = 25, message4 = 'Hello!!!';
//권장하는 방법은 아님. 가독성을 위해 한 줄에는 하나의 변수를 작성
let user = 'John';
let age = 25;
let message4 = 'Hello';

let user2 = 'John',
  age2 = 25,
  message5 = 'Hello';

let user3 = 'John'
  , age3 = 25
  , message6 = 'Hello';
//차이가 있지는 않음. 개인 취향껏 원하는 방식으로 작성하면 됨


/** let 대신 var **/
var message7 = 'Hello';
//var는 let과 거의 동일하게 동작. 다만 var는 '오래된' 방식


/* 변수 message는 message라는 이름표가 붙어있는 상자에 "Hello!"라는 값을 저장한 것
* 상자 속에는 어떤 값이든지 넣을 수 있고, 원하는 만큼 값을 변경할 수도 있다.
* 값이 변경되면, 이전 데이터는 변수에서 제거된다.
* 변수를 두 개 선언하고, 한 변수의 데이터를 다른 변수에 복사할 수도 있다.
*/
let Hello = 'Hello world!';

let message8;

// Hello의 'Hello world' 값을 message에 복사한다.
message8 = Hello;

// 이제 두 변수는 같은 데이터를 가진다.
alert(Hello); // Hello world!
alert(message8); // Hello world!


// 변수를 두 번 선언하면 에러가 발샌한다. 변수는 한 번만 선언해야 한다.


/* 함수형 언어 
함수형(functional) 프로그래밍 언어는 변숫값 변경을 금지한다.
스칼라(Scala)와 얼랭(Erlang)은 대표적인 함수형 언어이다.
이들 언어에서는 ‘상자 속에’ 값이 일단 저장되면, 그 값을 영원히 유지한다.
다른 값을 저장하고 싶다면 새로운 상자를 만들어야(새 변수를 선언해야)만 한다.
이전 변수를 재사용할 수 없다. 함수형 언어는 중대한 개발에 상당히 적합한 언어이다.
이런 제약이 장점으로 작용하는 병렬 계산(parallel computation)과 같은 영역도 있다.
*/


/* 변수 명명 규칙
자바스크립트에서는 변수 명명 시 두 가지 제약 사항이 있다.
1. 변수명에는 오직 문자와 숫자, 그리고 기호 $ 와 _ 만 들어갈 수 있다.
2. 첫 글자는 숫자가 될 수 없다.

여러 단어를 조합하여 변수명을 만들 땐 카멜 표기법(camelCase)이 흔히 사용된다.
카멜 표기법은 단어를 차례대로 나열하면서 첫 단어를 제외한 각 단어의 첫 글자를 대문자로 작성한다. ex) myVeryLongName
달러 기호 '$' 와 밑줄 '_' 를 변수명에 사용할 수 있다는 점이 조금 특이하나, 이 특수 기호는 일반 글자처럼 특별한 의미를 지니진 않는다.
 */

//카멜 표기법 예시
let $ = 1; // '$'라는 이름의 변수를 선언
let _ = 2; // '_'라는 이름의 변수를 선언

alert($ + _); // 3

//잘못된 변수명
let 1a; // 변수명은 숫자로 시작해선 안 된다.
let my-name; // 하이픈 '-'은 변수명에 올 수 없다.

/*
* 대/소문자 역시 필히 구분해야 한다.
* 비 라틴계 언어도 변수명에 사용할 수는 있지만 권장하지 않는다.
* 예약어(reserved name) 목록에 있는 단어는 변수명으로 사용할 수 없다. 이 단어들은 자바스크립트 내부에서 이미 사용 중이기 때문이다.
* 예약어 예시: let, class, return, function
*/

/* use strict 없이 할당하기 
변수는 대개 정의되어 있어야 사용할 수 있다.
그러나 예전에는 let 없이도 단순하게 값을 할당해 변수를 생성하는 것이 가능했다.
use strict를 쓰지 않으면 과거 스크립트와의 호환성을 유지할 수 있기 때문에 여전히 이 방식을 사용할 수 있다.
*/

// 참고: 이 예제에는 "use strict"가 없다.

num = 5; // 변수 'num'이 정의되어있지 않더라도, 단순 할당만으로 변수가 생성된다.

alert(num); // 5
//하지만 이렇게 변수를 생성하는 것은 나쁜 관습이다. 엄격 모드에서 에러를 발생시키기 때문이다.
"use strict";
num = 5; // error: num is not defined


/* 상수
* 변화하지 않는 변수를 선언할 땐, let 대신 const 를 사용한다.
*/
const myBirthday = '18.04.1982';
// 이렇게 const 로 선언한 변수를 '상수(const)'라고 부른다. 상수는 재할당할 수 없으므로  상수를 변경하려고 하면 에러가 발생한다.
myBirthday = '01.01.2001'; // error, can't reassign the constant!
// 변숫값이 절대 변경되지 않을 것이라 확신하면, 값이 변경되는 것을 방지하면서 다른 개발자들에게 이 변수는 상수라는 것을 알리기 위해 const 를 사용해 변수를 선언하도록 한다.


/* 대문자 상수
* 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습이다.
* 이런 상수는 대문자와 밑줄로 구성된 이름으로 명명한다.
* 예시로 웹에서 사용하는 색상 표기법인 16진수 컬러 코드에 대한 상수를 만들어보자.
 */
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/* 대문자로 상수를 만들어 사용하면 다음과 같은 장점이 있다.
* COLOR_ORANGE 는 "#FF7F00" 보다 기억하기가 훨씬 쉽다.
* COLOR_ORANGE 를 사용하면 "#FF7F00"를 사용하는 것보다 오타를 낼 확률이 낮다.
* COLOR_ORANGE 가 "#FF7F00"보다 훨씬 유의미하므로, 코드 가독성이 증가한다.

* 그렇다면 언제 일반적인 방식으로 상수를 명명하고, 언제 대문자를 사용해서 명명해야 하는가?
* '상수'는 변수의 값이 절대 변하지 않음을 의미한다. 그 중에는 (빨간색을 나타내는 16진수 값처럼) 코드가 실행되기 전에 이미 그 값을 알고 있는 상수도 있고, 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수도 있다.
 */
const pageLoadTime = /* 웹페이지를 로드하는데 걸린 시간 */;
/* pageLoadTime의 값은 페이지가 로드되기 전에는 정해지지 않기 때문에 일반적인 방식으로 변수명을 지었다. 하지만 이 값은 최초 할당 이후에 변경되지 않으므로 여전히 상수이다.
정리하자면, 대문자 상수는 '하드 코딩한' 값의 별칭을 만들 때 사용하면 된다.*/


/* 바람직한 변수명
변수명은 간결하고, 명확해야 한다. 변수가 담고있는 것이 무엇인지 잘 설명할 수 있어야 한다.
아래는 변수 명명 시 참고하기 좋은 규칙이다.
* userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용한다.
* 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피한다.
* 최대한 서술적이고 간결하게 명명한다. data와 value는 나쁜 이름의 예시이다. 이런 이름은 아무것도 설명해주지 않는다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용한다.
* 자신만의 규칙이나 소속된 팀의 규칙을 따른다. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 한다.
 */


/* 요약
* var, let, const 를 사용해 변수를 선언할 수 있다. 선언된 변수엔 데이터를 저장할 수 있다.
* let - 모던한 변수 선언 키워드이다.
* var - 오래된 변수 선언 키워드이다. 잘 사용하지 않는다.
* const - let 과 비슷하지만, 변수의 값을 변경할 수 없다.
변수명은 변수가 담고 있는 것이 무엇인지 쉽게 알 수 있도록 지어져야 한다.
 */
