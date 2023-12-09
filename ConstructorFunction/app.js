// 생성자 함수에 대해 공부를 하는 것이다.
function Item(title, price) {
    // this = {}            <= this는 중괄호를 의미한다.
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다`);
    };
    // return this;
}

const item1 = new Item("인형", "4000");
const item2 = new Item("가방", "6000");
const item3 = new Item("지갑", "9000");

console.log(item1, item2, item3);

item3.showPrice();


// 만약 const item2 = Item("가방", "6000"); 처럼 하였을 때 실행을 하면 undefined 값이 나오게 된다.

const item5 = Item("가방", "6000");
console.log(item5);

// 결과를 보았을 때 undefined가 나오게 되는 것을 알 수 있다.