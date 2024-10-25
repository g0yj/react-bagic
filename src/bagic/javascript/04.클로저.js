/**
 * 클로저 : 함수와 함수가 선언된 어휘적 환경의 조합.
 *          변수가 코드 내부에서 어디서 선언됐는지를 말함. 호출되는 방식에 따라 동적으로 결정되는 this와 다르게
 *          코드가 작성된 순간에 정적으로 결정됨. 클로저는 이런 어휘적 환경을 조합해 코딩하는 기법.
 *          클로저의 기본 원리에 따라 클로저가 선언된 순간 내부 함수는 외부 함수의 선언적인 환경을 기억하고 있어야 하기 때문에 어디서 사용하는지의
 *          여부와 관계 없이 저장해두기 때문에 비효율적인 메모리 사용이된다. 권장하지 않음!
 * 
 * 스코프 : 변수의 유효 범위.
 */

/** 자바스크립트는 기본적으로 함수 레벨 스코프를 따름 */
if (true) {
    var global = 'global scope';
}
console.log(global); // 'global scope'
console.log(global === window.global) // true

function hello() {
    var local = 'local variable';
    console.log(local); // local variable
}

hello();
console.log(local); // Uncaught ReferenceError : local is not defined.
































