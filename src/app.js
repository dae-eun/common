document.querySelector('#app').innerHTML = `
    <button class="btn-add-card" type="button">Add card</button>

    <div class="cards"></div>
`;
let cardCount = 0;
document.querySelector(".btn-add-card").addEventListener("click", ()=>{
    cardCount += 1;
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML=`
        <p>Card #${cardCount}</p>
        <button class="btn-hello" type="button" data-number="${cardCount}">hello</button>
    `;
    const myCardCount = cardCount;
    // card.querySelector(".btn-hello").addEventListener("click", ()=>{
    //     console.log(`hello! ${myCardCount}`)
    // });
    document.querySelector(".cards").appendChild(card);
});

// innerText로 cardNumber를 가져 올 경우 버튼의 이름이 바꼈을 경우 쉽게 깨질 수 있는 구현 방법이다.
// 그래서 버튼에 data-attribute라는 속성을 이용하여 임의의 속성이름으로 부여하여 사용도 가능하다~
// <button class="btn-hello" type="button" data-number="${cardCount}">hello</button>
document.querySelector(".cards").addEventListener('click', (event)=>{
    // console.log("click from .cards", event);
    const maybeButton = event.target;
    if(maybeButton.matches(".btn-hello")){
        // data-atrribute를 사용하지 않고 텍스트를 사용하였을 때 사용방식
        const cardName = maybeButton.parentElement.children[0].innerText;
        const cardNumber = parseInt(cardName.split(" ")[1].slice(1), 10)
        console.log("button is clicked",cardNumber);
        // data-atrribute를 사용하여 getAttribute api를 사용하여 부여된 속성 값을 가져오는 방식
        // data-atrribute는 속성으로도 부여 가능함. setAttriube로 부여 가능
        console.log("button is clicked", maybeButton.getAttribute("data-number"));
    } else{
        console.log("something else. let's ignore this.");
    }
});