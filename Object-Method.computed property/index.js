// computed property 대해 공부를  하는 것.

let a = 'age';
const user = {
    name: 'John',
    age: 13,
}
console.log(user);

// 이때 출력 값은 {name: 'John', age: 13} 이라고 출력이 가능하다. 이때 user 안에 age를 쓰는 대신 [a]라고 쓰면 할당된 값인 age가 key 들어가게 된다.

let b = 'age';
const users = {
    name: 'Bike',
    [a]: 20
}
console.log(users);

// 이때 출력된 값은 { name: 'Bike', age: 20 }로 편리하게 코드를 짤 수 있다.

// 객체에서 사용할 수 있는 메서드들

const Objuser = {
    name: 'Mike',
    [a]: 20,
}

const cloneUser = Objuser; // 참조값만 복사, 하나의 객체에 두 변수가 접근

// assign을 이용하면 같은 내용이지만, 새로운 객체를 만들 수 있다.

const newUser = Object.assign({gender: "male"}, Objuser);
console.log( Objuser);
// 위에 {} 이것은  {name: 'Mike, age: 20} 으로 지정된 것이다.

// 출력 값은 { name: 'Bike', age: 20} 이렇게 나오게 된다.

const keyUser = {
    name: 'Jihun',
    age: 17,
    gender: 'male'
}

Object.keys(keyUser);
console.log(keyUser);

// 오늘의 js 공부는 여기까지 하겠음.