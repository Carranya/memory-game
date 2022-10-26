<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numbercards</title>
    <style>
        body {
            font-family: Verdana;
        }

        .gridboard {
            display: flex;
            flex-wrap: wrap;
        }
        .card {
            display: flex;
            margin: 20px;
            width: 100px;
            height: 100px;
            justify-content: center;
            align-items: center;
        }

        .circle {
            width: 90px;
            height: 90px;
            border-radius: 100%;
            background-color: lightgreen;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .number {
            font-weight: bold;
            font-size: 3em;
        }
    </style>
</head>
<body>
<div class="gridboard">
    <?php
    $color = array("blue", "red", "yellow", "green", "black", "lightpink", "brown", "violet", "orange", "grey");
    for($i=0; $i<10; $i++){
        echo "<div class='card' style='background-color:" . $color[$i] . "'>";
            echo "<div class='circle'>";
                echo "<span class='number'>$i</span>";
            echo "</div>";
        echo "</div>";
    }
    ?>
</div>
</body>
</html>