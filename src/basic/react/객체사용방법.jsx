import React, { useState } from 'react';

/** 드림코딩인강 5.4 참고
 * 
 *  [문법]
 * 
 *  - ... (스프레드연산자) [javascript.06 참고]
 *    -> 전개구문: 배열이나 객체를 펼쳐서 개별 요소로 분리하는 기능
 *    -> ... 을 사용해 전개 구문을 적용할 수 있음
 *    -> 배열의 요소를 함수의 인수로 전달하거나 배열을 병합할때 유용하게 사용될 수 있음 (객체도 합칠 수 있음)
 * 
 *  - 객체 리턴 시 () 로 묶어줘야함.
 *    : 코드 블럭인지 객체를 나타내는건지 구분이 어렵기 때문!! 
 */

const obj = {
  name: '엘리',
  title: '개발자',
  mentor: {
    name: '밥',
    title: '시니어개발자',
  },
} 

const name = '연진';
const update = {
  ...obj,
  mentor: { ...obj.mentor, name:name} // key와 value가 동일하다면 축약이 가능. name:name을 name만 써도 괜찮
}


export default function AppXY() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
