/** 배열 구조 분해 할당
 * - 배열이나 객체의 값을 쉽게 추출하여 변수에 할당할 수 있는 문법
 * - 코드 가독성 향상, 코드 간결화, 편리한 값 추출 가능
 */

//before
const array = [1, 2, 3, 4, 5];
const first = array[0];
const second = array[1];
const third = array[2];
const arrayRest = array.slice(3);

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(arrayRest); // [4, 5]

//after
const array1 = [1, 2, 3, 4, 5];
const [first1, second1, third1, ...arrayRest1] = array1;

console.log(first1); // 1
console.log(second1); // 2
console.log(third1); // 3
console.log(arrayRest1); // [4, 5]

/** 전개 구문
 * - 배열이나 객체, 문자열과 같이 순회할 수 있는 값에 대해 말 그대로 전개해 간결하게 사용할 수 있는 구문이다.
 * - 과거에는 배열 간에 합성을 하려면 push(), concat(), splice() 등의 메서드를 사용해야 했음.
 * - 배열 내부에 ...배열을 사용하면 해당 배열을 마치 전개하는 것처럼 선언하고 이를 내부 배열에서 활용할 수 있다. 
 *      -> 기존 배열에 영향을 미치지 않고 배열을 복사하는 것이 가능
 */

//after 배열 복사
const array3 = [1, 2, 3];
const array4 = [...array3];

console.log(array4); // [1, 2, 3]

//after 배열 합치기
const array6 = [1, 2, 3];
const array7 = [4, 5, 6];
const combinedArray = [...array6, ...array7];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//after 객체복사
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

console.log(obj2); // { a: 1, b: 2 }

//after 객체합치기
const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };
const combinedObj = { ...obj3, ...obj4 };

console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }