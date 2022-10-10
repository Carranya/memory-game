class Game{
    constructor(){
        this.cols = 8;
        this.rows = 8;
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

}

window.onload = function(){
    game = new Game;
    game.createBoardFrame();
    game.createCardCounter();
    game.setCardList();
}