import React from 'react';

/** 함수를 정의하는 4가지 방법이 있음. 함수 선언문/ 함수 표현식 / Function 생성자 / 화살표 함수
  
    일급객체 : 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체 
              => 함수는 다른 함수의 매개변수가 될 수 있고 반환값이 될 수 있으며 할당도 가능.
    
    함수 표현식과 선언식의 차이 : 함수 선언문은 호이스팅이 일어나지만 함수 표현식은 호이스팅이 일어나지 않음.
        - 호이스팅 : 함수에 대한 선언을 실행 전에 미리 메모리에 등록하는 작업 (코드 순서와 상관 없이 정상적으로 함수 호출이 가능)
*/


// 1. 함수 표현식 (호이스팅X) ==========================================================================
const sum = function add(a, b) {
    console.log(arguments.callee.name); // 함수 이름 출력(add)
    return a + b;
}
// 할당하려는 함수 이름을 생략하는 게 일반적. 가독성이 떨어짐-> 함수이름은 add이나 실제 호출할 때는 sum을 사용함.
const sum1 = function (a, b) { 
    return a + b;
}
sum1(10, 20); 


// 2. 화살표 함수=======================================================================================
const add = (a, b) => {
    return a + b;
}

const add1 = (a, b) => a + b;

    //2.1 화살표 함수는 constructor가 없음. 즉, new 연산자를 사용하여 객체를 생성할 수 없음.
const Car = (name) => { 
    this.name = name;
}
const myCar = new Car('BMW'); // TypeError: Car is not a constructor

    //2.2 화살표 함수에서는 arguments가 존재하지 않음.

    //2.3 화살표 함수와 일반 함수의 가장 큰 차이점은 바로 this 바인딩!! (자신이 속한 객체나 자신이 생성할 인스턴스를 가리키는 값.)

// 클래스형 컴포넌트에서 일반 함수와 화살표 함수로 state를 갱신하는 예제
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 1, 
        }
    }
    
    functionCountUp() {
       console.log(this) ; // undefined
        this.setState((prev) => ({ counter: prev.counter +1 }))
    }

    ArrowFunctionCountUp() { 
        console.log(this); // class Component
        this.setState((prev) => ({ counter: prev.counter + 1 }))
    }

    render() {
        return (
            <div>
                {/* Cannot read properties of undefined(reading 'setState') */}
                <button onClick={this.functionCountUp}>일반 함수</button>
                {/* 정상 작동 */}
                <button onClick={this.ArrowFunctionCountUp}>화살표 함수</button>
            </div>
        )
    }
}


