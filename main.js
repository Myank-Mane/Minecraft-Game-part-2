var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (img) {
        block_image_object = img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '73') {
        console.log("i and Shift Key pressed together");

        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '68') {
        console.log("d and Shift Key pressed together");

        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '66') {
        new_image('Bookshelf.jpg');
        console.log("b");
    }

    if (e.shiftKey == true && keyPressed == '66'){
        new_image('Brick.jpg');
        console.log("shift and b");
    }

    if (keyPressed == '67') {
        new_image('Chest.jpg');
        console.log("c");
    }

    if (e.shiftKey == true && keyPressed == '67') {
        new_image('Clay.jpg');
        console.log("shift and c");
    }

    if (e.ctlKey == true && keyPressed == '67') {
        new_image('Coal.png');
        console.log("ctl and c"); 
    }

    if (keyPressed == '27') {
        new_image('Crafting Table.jpg');
        console.log("esc");
    }

    if (e.keyPressed == '43') {
        new_image('Command Block.jpg');
        console.log("C");
    }

    if (keyPressed == '68') {
        new_image('Diamond.jpg');
        console.log("d");
    }

    if (e.ctlKey == true && keyPressed == '68') {
        new_image('Door.jpg');
        console.log("ctl and d");
    }

    if (keyPressed == '69') {
        new_image('Emrald.jpg');
        console.log("e");
    }
    
    if (e.shiftKey == true && keyPressed == '69') {
        new_image('End Stone.jpg');
        console.log("shift and e");
    }

    if (keyPressed == '70') {
        new_image('Furnace.jpg');
        console.log("f");
    }

    if (keyPressed == '71') {
        new_image('Glass.png');
        console.log("g");
    }

    if (e.shiftKey == true && keyPressed == '71') {
        new_image('Gold.jpg');
        console.log("shift and g");
    }

    if (e.ctlKey == true && keyPressed == '71') {
        new_image('ground.png');
        console.log("ctl and g");
    }

    if (keyPressed == '72') {
        new_image('Hard rock.png');
        console.log("h");
    }

    if (keyPressed == '73') {
        new_image('Iron.jpg');
        console.log("i");
    }

    if (keyPressed == '76') {
        new_image('Lapis.jpg');
        console.log("l");
    }

    if (e.shiftKey == true && keyPressed == '76') {
        new_image('Leaves.jpg');
        console.log("shift and l");
    }

    if (e.ctlKey == true && keyPressed == '76') {
        new_image('Light.png');
        console.log("ctl and l");
    }

    if (keyPressed == '78') {
        new_image('Neterite Block.jpg');
        console.log("n");
    }

    if (keyPressed == '79') {
        new_image('Obsedian.png');
        console.log("o");
    }

    if (keyPressed == '80') {
        new_image('Plank.jpg');
        console.log("p");
    }

    if (e.shiftKey == true && keyPressed == '80') {
        new_image('Purple Command Block.jpg');
        console.log("shift and p");
    }

    if (keyPressed == '82') {
        new_image('Red Sand.jpg');
        console.log("r");
    }

    if (e.shiftKey == true && keyPressed == '82') {
        new_image('Red Wool.jpg');
        console.log("shift and r");
    }

    if (e.ctlKey == true && keyPressed == '82') {
        new_image('Redstone Light.jpg');
        console.log("ctl and r");
    }

    if (e.keyPressed == '52') {
        new_image('Redstone.jpg');
        console.log("R");
    }

    if (keyPressed == '83') {
        new_image('Sand.jpg');
        console.log("s");
    }

    if (keyPressed == '84') {
        new_image('TNT.jpg');
        console.log("t");
    }

    if (keyPressed == '87') {
        new_image('White wool.png');
        console.log("w");
    }

    if (e.shiftKey == true && keyPressed == '87') {
        new_image('Wood.jpg');
        console.log("shift and w");
    }
}

function up() {
    if(player_y >= 0){
        player_y= player_y - block_image_height;

        console.log("block_image_height = " + block_image_height);
        console.log("When up arrow is pressed, X = " + player_x + " , Y = " + player_y);

        canvas.remove   (player_object);
        player_update();
    }
    
}

function down() {
    if(player_y <= 500){
        player_y= player_y + block_image_height;

        console.log("block_image_height = " + block_image_height);
        console.log("When down arrow is pressed, X = " + player_x + " , Y = " + player_y);
        
        canvas.remove   (player_object);
        player_update();
    }
    
}

function left() {
    if(player_x >= 0){
        player_x= player_x - block_image_width;

        console.log("block_image_widht = " + block_image_width);
        console.log("When left arrow is pressed, X = " + player_x + " , Y = " + player_y);
        
        canvas.remove   (player_object);
        player_update();
    }
    
}

function right() {
    if(player_x <= 850){
        player_x= player_x + block_image_width;

        console.log("block_image_width = " + block_image_width);
        console.log("When right arrow is pressed, X = " + player_x + " , Y = " + player_y);
        
        canvas.remove   (player_object);
        player_update();
    }
    
}