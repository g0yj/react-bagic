/**
 * 자바스크립트의 데이터 타입
 * - 원시타입 : boolean, null, undefined, number, string, symbol, bigint
 * - 객체타입 : object
 */

/** Symbol은 ES6에서 추가된 타입으로, 중복되지 않는 고유한 값을 나타내기 위해 만들어짐. */
const key = Symbol('key');
const key2 = Symbol('key');
//Symbol()을 통해 만들어짐-> Symbol()을 통해 만들어진 값은 다른 값과 절대로 같지 않음.
console.log(key === key2); // false
//동일한 값을 가지는 Symbol을 만들고 싶다면 Symbol.for()를 사용
console.log(Symbol.for('hello') === Symbol.for('hello')); // true.

/** === 와 Object.is
 * ===는 엄격한 동등 비교를 수행하며, 대부분의 경우에 충분히 정확하고 효율적( Object.is는 몇 가지 특별한 경우를 처리하기 위해 사용됨)
 */





