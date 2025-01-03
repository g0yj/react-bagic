import React from "react"
import 이벤트 from './이벤트';
import Props사용방법 from "./Props사용방법";
/**
 * JSX 내부의 자바스크립트 표현식에서는 if문 사용이 불가-> {} 안에 조건부 연산자를 사용해보자
 * 
 * 1. 삼항연산자
 * 2. AND 연산자를 사용한 조건부 렌더링 
 *      -> 특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때 아무것도 렌더링하지 않도록.
 * 3. 리액트 컴포넌트에서는 함수에서 undefined만 반환해 렌더링하는 상황을 만들면 안됨. (return 하고 바로 undefined가 안된다는거임.)
 *      -> 어떤 값이 undefined일 수 있다면 , OR 연산자를 사용해 오류 방지 필요.
 *      -> JSX 내부에서는 undefined여도 괜찮!!! 32번 라인 참고
 */

function 조건주는방법(){
    const name = '리액트';
    
    const 값이정의되어있지않음 = undefined;

    return (
        <div>
            {name === '리액트' ? (
                <h1>리액트입니다.</h1>
            ) : (
                <h2>리액트가 아닙니다.</h2>
            )}

            
            {name === '리액트' ? <h1>리액트입니다1</h1> : null}

            {name === '리액트' && <h1>리액트입니다2</h1>}

            {값이정의되어있지않음 || '값이 undefined'}
            {값이정의되어있지않음}
            {값이정의되어있지않음 || `값이 정해있지 않은 변수에 특정 문자를 보여주고 싶다면 ' || ' 를 사용`}

            <h1>props 사용방법</h1>
            <Props사용방법 name='속성줬다!'>children내용은이거임</Props사용방법>
            <h3>속성이 없을때 기본 값을 주고 싶다면?!</h3>
            <Props사용방법> 속성의 기본값을 정해</Props사용방법>
            
            <h1>이벤트 연습</h1>
            <이벤트></이벤트>
        </div>
    );
}

export default 조건주는방법;
