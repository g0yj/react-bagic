//Car 클래스 선언
class Car {
    //생성자
    constructor(name) {
        this.name = name;    
    }
    
    // 메서드
    honk() {
        console.log( `${this.name}이 경적을 울립니다!`)
    }

    // 정적 메서드
    static hello() {
        console.log('저는 자동차입니다')
    }

    // setter
    set age(value) {
        this.carAge = value;
    }

    // getter
    get age() {
        return this.carAge;
    }
}

const myCar = new Car('자동차')

// 메서드 호출
myCar.honk();

// 정적 메서드는 클래스에서 직접 호출
Car.hello();
myCar.hello();//Uncaught TypeError : myCar.hello is not a function

// setter를 만들면 값을 할당할 수 있음
myCar.age = 32;

// getter로 값을 가져올 수 있음
console.log(myCar.age, myCar.name); //32 자동차