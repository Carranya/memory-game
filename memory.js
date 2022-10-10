class Game{
    constructor(){
        this.cols = 8;
        this.rows = 8;
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
        for(let i=1; i<=32; i++){
            this.cardCounter[i] = 0;
        }
    }

    setCardList(){
        for(let r=0; r<this.rows; r++){
            for(let c=0; c<this.cols; c++){
                let setCardId = c + "-" + r;
                this.randomCards(setCardId);
            }
        }
    }

    randomCards(setCardId){
        let randCard = Math.floor((Math.random() * 32)+1);
        if(this.cardCounter[randCard] > 1){
            this.randomCards(setCardId);
        } else {
            this.cardCounter[randCard]++;
            this.setCards[setCardId] = randCard;
        }
    }

     testfunc(){
        for(let r=0; r<this.rows; r++){
            for(let c=0; c<this.cols; c++){
                let id = c + "-" + r;
                // let text = "ID: " + id + "/ Inhalt: " + this.setCards[id] + ".jpg<br>";
                let text = this.setCards[id] + "<br>";
                // let text = "ID: " + id + "/ Counter: " + this.cardCounter[id] + "/ Inhalt: " + this.setCards[id] + ".jpg<br>";

                let test = document.createElement("div");
                test.setAttribute("id", "test" + id);
                test.innerHTML = text;
                document.getElementById("test").append(test);
            }
        }
    }

    testCounter(){
        for(let i=1; i<=32; i++){
            let text2 = "Counter: " + this.cardCounter[i] + "<br>";
        let test2 = document.createElement("div");
                test2.setAttribute("id", "counter" + i);
                test2.innerHTML = text2;
                document.getElementById("test2").append(test2);
        }
    }
}

window.onload = function(){
    game = new Game;
    game.createBoardFrame();
    game.createCardCounter();
    game.setCardList();
    game.testfunc();
    game.testCounter();
}