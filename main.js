var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_object = "" ; 

function player_Update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
                top:player_y,
                left:player_x
        } ) ;
        canvas.add(player_object);
    } )  ; 
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
                top:player_y,
                left:player_x
        } ) ;
        canvas.add(block_object);
    } ) ; 
}

window.addEventListener("keydown", my_key_Down);

function my_key_Down(e)
{
        keyPressed = e.keyCode;
        console.log(keyPressed);

        if(e.shiftKey == true  && keyPressed == '80') {
            console.log("P and shift pressed together.");
            block_image_width = block_image_width  + 10;
            block_image_height = block_image_height + 10;
            document.getElementById("current_Width").innerHTML = block_image_width;
            document.getElementById("current_Height").innerHTML = block_image_height;
        }

        if(e.shiftKey == true  && keyPressed == '77') {
            console.log("M and shift pressed together.");
            block_image_width = block_image_width  - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("current_Width").innerHTML = block_image_width;
            document.getElementById("current_Height").innerHTML = block_image_height;
        }

        if (keyPressed == '38') {
            console.log("Up arrow");
            up();
        }
        if (keyPressed == '40') {
            console.log("Down arrow");
            down();
        }
        if (keyPressed == '39') {
            console.log("Right arrow");
            right();
        }
        if (keyPressed == '37') {
            console.log("Left arrow");
            left();
        }

        if (keyPressed == '87') {
            console.log("W key");
            new_image('wall.jpg');
        }
        if (keyPressed == '71') {
            console.log("G key");
            new_image('ground.png');
        }
        if (keyPressed == '76') {
            console.log("L key");
            new_image('light_green.png');
        }
        if (keyPressed == '84') {
            console.log("T key");
            new_image('trunk.jpg');
        }
        if (keyPressed == '82') {
            console.log("R key");
            new_image('roof.jpg');
        }
        if (keyPressed == '89') {
            console.log("Y key");
            new_image('yellow_wall.png');
        }
        if (keyPressed == '68') {
            console.log("D key");
            new_image('dark_green.png');
        }
        if (keyPressed == '85') {
            console.log("U key");
            new_image('unique.png');
        }
        if (keyPressed == '67') {
            console.log("C key");
            new_image('cloud.jpg');
        }

}

function up()
{ 
    if(player_y>=0) {
            player_y = player_y - block_image_height;
            console.log("Block height = " + block_image_height);
            console.log("When up arrow key is pressed, x = " + player_x + "y = " +  player_y );
            canvas.remove(player_object);
            player_Update();
    }
}
function down()
{ 
    if(player_y<500) {
            player_y = player_y  + block_image_height;
            console.log("Block height = " + block_image_height);
            console.log("When down arrow key is pressed, x = " + player_x + "y = " +  player_y );
            canvas.remove(player_object);
            player_Update();
    }
}
function right()
{ 
    if(player_x<=850) {
            player_x = player_x + block_image_width;
            console.log("Block width = " + block_image_width);
            console.log("When right arrow key is pressed, x = " + player_x + "y = " +  player_y );
            canvas.remove(player_object);
            player_Update();
    }
}
function left()
{ 
    if(player_x>0) {
            player_x = player_x - block_image_width;
            console.log("Block width = " + block_image_width);
            console.log("When left arrow key is pressed, x = " + player_x + "y = " +  player_y );
            canvas.remove(player_object);
            player_Update();
    }
}