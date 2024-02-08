//  객체의 property key는 기본적으로 문항이다.

const obj = {
    1: '1입니다',
    false: '거짓',
}

// 문자열 배열로 반환됨
// Object.keys(obj);
// Object를 실행시키면 ["1"], ['false]

// 접근시 문자열로 접근 해야함

// 한 가지 key의 형태로 가능한 것이 심볼(symbol)  형이다.

//  1. 심볼 만들기

const a = Symbol();
const b = Symbol();

a === b // false
a == b // false


// 이번엔 if문을 배워볼게. 여기서 if문이랑 prompt랑 같이 쓸거야.

const name = prompt("당신의 이름은 무엇입니까?");
const score = parseInt(prompt("당신의 점수는?"));

let grade;

if (score >= 90) {
    grade = 'A';
}else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >=60){
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`${name}님의 점수는 ${score}입니다, 따라서 학점은 ${grade}입니다. 수고하셨습니다`);

// 이제 지금은 clickEvent에 대해서 배워보도록 하자. 많이 어렵더라도 해도 해보자.

for (let index = 0; index < cols.length; index++) {
    cols[i].addEventListener('click', click);   
}

function click(e) {
    style.body.color = 'red';
}

console.log(cols);

let sum = 0;

for (let index = 0; index > 10; index++) {
    sum++;
};

console.log(sum);