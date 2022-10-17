class Game{
    constructor(cols, rows){
        this.cols = cols;
        this.rows = rows;
        this.totalCards = (this.cols * this.rows) / 2;
        this.cardCounter = {};
        this.setCards = {};
        this.turns = 0;
        this.counter = 0;
        this.card1;
        this.card2;
        this.card1Id;
        this.card2Id;
        this.paired = 0;
    }

    createBoardFrame(){
        let boardWidth = this.cols * 100;
        let boardHeight = this.rows * 100;

        let board = document.getElementById("board");
        board.style.width = boardWidth + "px";
        board.style.height = boardHeight + "px";
    }

    createCardCounter(){
        for(let i=1; i<=this.totalCards; i++){
            this.cardCounter[i] = 0;
        }
    }

    setCardList(){
        for(let r=0; r<this.rows; r++){
            for(let c=0; c<this.cols; c++){
                let setCardsId = c + "-" + r;
                this.randomCards(setCardsId);
            }
        }
    }

    randomCards(setCardsId){
        let randCard = Math.floor((Math.random() * this.totalCards) + 1);
        if(this.cardCounter[randCard] > 1){
            this.randomCards(setCardsId);
        } else {
            this.cardCounter[randCard]++;
            this.setCards[setCardsId] = randCard;
        }
    }

    createBoard(){
        for(let r=0; r<this.rows; r++){
            for(let c=0; c<this.cols; c++){
                let cardBackId = c + "-" + r;
                let cardBack = document.createElement("img");
                cardBack.src = "img/back.jpg";
                cardBack.setAttribute("id", cardBackId);
                cardBack.setAttribute("class", "classCards");
                document.getElementById("board").append(cardBack);
            }
        }
    }

    getCard(e){
        let cardId = e.target.id;
        let card = document.getElementById(cardId);
        
        if(this.setCards[cardId] != "empty"){
            let pickCard = this.setCards[cardId];
            card.src = "img/" + pickCard + ".jpg";
            
            if(this.counter == 0){
                this.counter++;            
                this.card1 = pickCard;
                this.card1Id = card.id;
            } else {
                this.counter--;
                this.card2 = pickCard;
                this.card2Id = card.id;
                this.turns++;
                document.getElementById("turns").innerHTML = this.turns;
                setTimeout(function(){game.check();}, 1000);
            }
        }
    }

    check(){
        let checkCard1 = document.getElementById(this.card1Id);
        let checkCard2 = document.getElementById(this.card2Id);
        
        if(this.card1 == this.card2) {
            
            checkCard1.src = "img/blank.jpg";
            checkCard1.setAttribute("class", "emptyCard");
            this.setCards[this.card1Id] = "empty";

            checkCard2.src = "img/blank.jpg";
            checkCard2.setAttribute("class", "emptyCard");
            this.setCards[this.card2Id] = "empty";
            this.paired++;
            

            if(this.paired == this.totalCards){
                setTimeout(function(){game.win();}, 1000);
            }

        } else {
            checkCard1.src = "img/back.jpg";
            checkCard2.src = "img/back.jpg";
        }
    }

    win(){
        alert("You win!");
    }

}

window.onload = function(){

    let cols = 4;
    let rows = 4;

    game = new Game(cols, rows);
    game.createBoardFrame();
    game.createCardCounter();
    game.setCardList();
    game.createBoard();

    for(let r=0; r<rows; r++){
        for(let c=0; c<cols; c++){
            let card = document.getElementById(c + "-" + r);
            card.addEventListener("click", function(e){game.getCard(e);});
        }
    }
}