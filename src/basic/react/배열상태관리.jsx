import React, { useState } from 'react';

/** 드림코딩인강 5.8 참고
 * 
 *  [문법]
 * 
 *  - map ()
 *    -> 배열을 순환하며 처리하는 메서드
 *    -> 단순히 하나의 요소만 전달되는 것이 아닌, 콜백함수에 전달되는 여러 인수를 포함함
 *    -> element: 현재 처리 중인 배열 요소 
 *    -> index : 현재 처리 중인 배열 요소의 인덱스
 *    -> array : map() 메서드를 호출한 배열 자체
 *    -> this : 선택적 인자로, 콜백 함수 내부에서 this로 사용값을 지정함
 * 
 *  - filter()
 *    -> 배열을 순환하며 처리하는 메서드
 *    -> 콜백함수를 한번씩 호출하고 콜백함수가 참인 값을 반환하는 모든 값으로 새 배열을 구성. 
 * 
 *  - 객체의 불변성
 *    -> 내부 내용을 변경하고 싶다면 복사 후 업데이트해야함! 왜냐? 객체는 참조값을 갖는 것임을 기억하자
 */

// 완전한 map () 메소드 구문
let arr = [1, 2, 3];

const a = arr.map(function (element, index, array) {
  // 처리 로직
}, this);

const b = arr.map((element, index, array) => {
  // 처리 로직
});


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((element, index, array) => {
  console.log(element); // 현재 요소
  console.log(index);   // 현재 요소의 인덱스
  console.log(array);   // 원본 배열
  return element * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]


export default function 배열상태관리() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>

      <button
        onClick={() => {
          const newMentor = { name: '연진', title: '시니어개발자1' };
          // set함수 > 상태 업데이트 함수 호출. 이전 상태 값을 기반으로 새로운 상태 값을 계산하는 함수를 인자로 받음
            // set(인자) : 인자는 전개 구문을 사용하고 있음! 객체라서 ()로 한번 묶어 준거 볼 수 있음!! (person) => ({})
          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, newMentor]
          }))
        }}
      >
        멘토추가
      </button>
      
      <button
        onClick={() => {
          const selectedName = prompt(`삭제할 사람의 이름`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== selectedName
            )
          }))
        }}
      >
        멘토삭제
      </button>
    </div>
  );
}
