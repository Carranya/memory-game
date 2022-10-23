<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory</title>
    <script type="text/javascript" src="memory.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div id="header"><h1>Memory</h1></div>
    
    <div class="centerBlock">
        <div id="startGame" class="infoBlock">
            <h1>New Game</h1>
            <select id="gameSettings">
                <option value="demo" selected="selected">Demo</option>
                <option value="animals">Animals</option>
            </select>
            <p><button id="startGameButton">Start Game</button></p>
        </div>
    </div>

    <div id="main">
        <div class="centerBlock">
            <div id="board"></div>
        </div>
    <div><p>Turns: <span id="turns">0</span></p></div> 
    <div><p><a href="index.php" class="newGame">Neustart</a></p></div>
    </div>

    <div class="centerBlock">
        <div id="youWin" class="infoBlock">
            <h1>You win!</h1>
            <p>Total turns: <span id="winTurns">0</span></p>
            <p><a href="index.php" class="newGame">New Game?</a></p>
        </div>
    </div>

</body>
</html>

