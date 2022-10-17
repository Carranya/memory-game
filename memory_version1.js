class Game{
    constructor(cols, rows){
        this.cols = cols;
        this.rows = rows;
        this.totalCards = (this.cols * this.rows) / 2;
        this.cardCounter = {};
        this.setCards = {};
        this.turns = 0;
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
        alert(cardId);
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