/**
 * const : 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용하는 키워드
 * let : 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드
 * var : 변수를 선언할 때 사용하는 키워드
 */

// var : scope가 함수 단위임 -> 'a' is already defined.
function myFunction() { 
    var a = 'hello';
    if (true) {
        var a = 'bye';
        console.log(a); //bye
    }
    console.log(a); //bye
}
myFunction();

//let
function myFunction1() {
    let a = 1;
    if (true) {
        let a = 2;
        console.log(a); //2
    }
    console.log(a); //1
}
myFunction1();