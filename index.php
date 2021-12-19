<!DOCTYPE>
<html lang="nl">
    <head>
        <title>Christmas <?php echo date("Y"); ?></title>
        <style>
            body{
                background-color: green
            }

            .core{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border: dotted darkred 5px;
                padding: 10px;
                background-color: #44ab44;
                text-align: center;
            }

            .button{
                border: solid black 1px;
                padding: 10px;
                color: black;
                text-decoration: auto;
            }

            .noicon{
                padding-left: 30px;
            }

            .button:hover{
                background-color: lightgreen;
            }
        </style>
    </head>
    <body>
        <div class="core">
            <h1>Merry Christmas and a happy new year!!!</h1>
            <br/>
            <?php
                if(file_exists(getcwd() . "/" . date("Y"))){
                    ?>
                        <a class="button noicon" href="/<?php echo date("Y"); ?>/index.html">Play this years Christmas game</a><br/><br/><br/>
                    <?php
                } 
                $files = scandir(getcwd());
                foreach($files as $file)
                {
                    if(is_dir($file)&&is_numeric($file))
                    {
                        ?>
                            <a class="button noicon" href="/<?php echo $file; ?>/index.html">Play game for Christmas <?php echo $file; ?></a><br/><br/><br/>
                        <?php
                    }
                }
            ?>
            <br/><br/>
            <a class="button" href="https://github.com/AdeRegt/Christmas2020"><img width="20" height="20" src="https://github.com/fluidicon.png"> See code at GitHub</a><br/>
            <br/>
            <br/>
        </div>
    </body>
</html>