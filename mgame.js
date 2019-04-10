const cardsColor=["red","red","green","green","blue","blue","brown","brown",
"yellow","yellow","gray","gray","cadetblue","cadetblue","violet","violet",
"lightgreen","lightgreen"];


let cards = document.querySelectorAll('div');
cards = [...cards]; //changing nodes to array


const startTime = new Date().getTime()

let activeCard = "";

// checkin pair cards
const activeCards = [];
// pairs in the game 
const gamePairs = cards.length/  2;

let gameResult = 0;



// Function that random looing for random element ,add class to elemen + delete this color from tab


const clickCard = function () {
    activeCard = this;
    activeCard.classList.remove("hidden");


// checkin active card

    if(activeCards.length === 0 ) {
        activeCards[0] = activeCard;
        return;
    }

    else {
        cards.forEach(card => {
            card.removeEventListener("click",clickCard)
        })
        activeCards[1] = activeCard;

            // opoznienie funkcji 
        setTimeout(function(){
            if (activeCards[0].className === activeCards[1].className) 
            {
                activeCards.forEach(card => card.classList.add("off"))
                gameResult++;
                if(gameResult == gamePairs) {
                    const entTime = new Date().getTime();
                    const gameTime = (entTime - startTime)/1000
                     alert(`Congratulation ! Your score is :${gameTime} second`)
                     location.reload();
                }
            }
            else {
                activeCards.forEach(card => card.classList.add("hidden"))
            }

            activeCard= "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click",clickCard))

            

        

        },500)
        

    }
};

const init = function() {
    cards.forEach( card=> {
        const position = Math.floor(Math.random() *
         cardsColor.length);
         card.classList.add(cardsColor[position])
         cardsColor.splice(position, 1);


      
    })


    // function that add "hidden class"
    setTimeout(function(){
        cards.forEach(card => {
           card.classList.add("hidden") 
           card.addEventListener("click",clickCard)
        })

    }, 2000)

}
init()
