window.sinterklaas = {};
// html elements
window.sinterklaas.canvas = document.getElementById("gamecanvas");
window.sinterklaas.draw = window.sinterklaas.canvas.getContext("2d");
// copyright
window.sinterklaas.copyright = {};
window.sinterklaas.copyright.author = [];
window.sinterklaas.copyright.author.push("Alexandros de Regt");
window.sinterklaas.copyright.githublink = "https://github.com/AdeRegt/Christmas2020";
window.sinterklaas.copyright.year = 2020;
window.sinterklaas.copyright.version = 1;
//  hid-listeners (hid: human interface devices)
window.sinterklaas.hid = {};
window.sinterklaas.hid.onclick = function(event){
	if(event.path[0]==window.sinterklaas.canvas){
		event.preventDefault();
		if(event.button==0){
			window.sinterklaas.hid.oncommand(1);
		}else{
			window.sinterklaas.hid.oncommand(2);
		}
	}
};
window.sinterklaas.hid.onkeydown = function(event){
	if(event.key=="ArrowUp"){
		event.preventDefault();
		window.sinterklaas.hid.oncommand(1);
	}else if(event.key=="ArrowDown"){
		event.preventDefault();
		window.sinterklaas.hid.oncommand(2);
	}
};
window.sinterklaas.hid.oncommand = function(event){
	if(!(window.sinterklaas.timers.jump.isFallingDown||window.sinterklaas.timers.jump.isJumping||window.sinterklaas.timers.jump.isDucking)){
		if(event==1){
			window.sinterklaas.timers.jump.isJumping = true;
		}else if(event==2){
			window.sinterklaas.timers.jump.isDucking = true;
			window.sinterklaas.timers.jump.duckingcountdown = window.sinterklaas.timers.jump.duckingcountdownMax;
		}
	}
};
document.addEventListener("click",window.sinterklaas.hid.onclick);			// left click
document.addEventListener("contextmenu",window.sinterklaas.hid.onclick);	// right click
document.addEventListener("keydown",window.sinterklaas.hid.onkeydown);		// keyboard click
document.getElementById("jumpbutton").addEventListener("click",function(){
	window.sinterklaas.hid.oncommand(1);
});
document.getElementById("duckbutton").addEventListener("click",function(){
	window.sinterklaas.hid.oncommand(2);
});
document.getElementById("githubbutton").addEventListener("click",function(){
	window.open(window.sinterklaas.copyright.githublink,"newtab");
});
document.getElementById("refreshbutton").addEventListener("click",function(){
	window.sinterklaas.gameover = false;
});
// drawing
window.sinterklaas.drawing = {};
window.sinterklaas.drawing.clear = function(){
	window.sinterklaas.draw.clearRect(0,0,window.sinterklaas.canvas.width,window.sinterklaas.canvas.height);
};
window.sinterklaas.drawing.setPixel = function(x,y,r,g,b,a){
	window.sinterklaas.draw.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
	window.sinterklaas.draw.fillRect( x, y, 1, 1 );
};
window.sinterklaas.drawing.drawImage = function(x,y,data){
	for(var i = 0 ; i < data.length ; i++){
		var dataset = data[i].split("");
		for(var z = 0 ; z < dataset.length ; z++){
			var color = 0;
			if(dataset[z]=='X'){
				window.sinterklaas.drawing.setPixel(x+z,y+i,color,color,color,255);
			}
		}
	}
};
window.sinterklaas.drawing.drawSinterklaas = function(x,y){
	var sinterklaasimage = null;
	if(window.sinterklaas.timers.jump.isDucking){
		sinterklaasimage = [
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                                                  ",
			"                                       XXXXXXX                    ",
			"                                     XXXXX  XXX                   ",
			"                                   XXXXXX     XX                  ",
			"                                 XXXXXX        XX                 ",
			"                                XXXXXXXX        X                 ",
			"                               XXXXXXXXX       XXX                ",
			"                              XXXXXXXXXXX     XXXXX               ",
			"                             XXXXXXXXXXXXX     XXX                ",
			"                             XXXXXXXXXXXX                         ",
			"                            XXXXXXXXXXXXXX                        ",
			"                        XXXXXXXXXXXXXXXXXXXXXXXX                  ",
			"                      XX                       XX                 ",
			"                      XX                         XX               ",
			"                      XX                           XX             ",
			"                     XX                              XX           ",
			"                     XX                              XX           ",
			"                      XX                            XX            ",
			"                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX             "
		];
	}else{
		sinterklaasimage = [
			"                                       XXXXXXX                    ",
			"                                     XXXXX  XXX                   ",
			"                                   XXXXXX     XX                  ",
			"                                 XXXXXX        XX                 ",
			"                                XXXXXXXX        X                 ",
			"                               XXXXXXXXX       XXX                ",
			"                              XXXXXXXXXXX     XXXXX               ",
			"                             XXXXXXXXXXXXX     XXX                ",
			"                             XXXXXXXXXXXX                         ",
			"                            XXXXXXXXXXXXXX                        ",
			"                           X              XX                      ",
			"                          X             X   X                     ",
			"                          X            XXX  X                     ",
			"                           X            X   XX                    ",
			"                           X                 XXXXXXXX             ",
			"                          X           X        XXXXXXXXX          ",
			"                         X            XXXX    XXXXXXX             ",
			"                        X             X  XXXXX                    ",
			"                       X              X                           ",
			"                       X              XXXXXXXX                    ",
			"                    XXXX                      X                   ",
			"                   X  XX                       X                  ",
			"                  X   XX                        X                 ",
			"                 X    XX                         X                ",
			"                X     XX                          X               ",
			"                X     XX                           X              ",
			"                X     XX                           X              ",
			"                X     XX                           X              ",
			"                X     XX                           X              ",
			"                 X   X X                          X               ",
			"                   XX  X                         X                ",
			"                       X                       X                  ",
			"                        XXXXXXXXXXXXXXXXXXXXXXXX                  ",
			"                      XX                       XX                 ",
			"                      XX                         XX               ",
			"                      XX                           XX             ",
			"                     XX                              XX           ",
			"                     XX                              XX           ",
			"                      XX                            XX            ",
			"                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX             "
		];
	}
	window.sinterklaas.drawing.drawImage(x,y,sinterklaasimage);
};
window.sinterklaas.drawing.drawTree = function(x,y){
	var treeimage = [
		"                X                   ",
		"                X                   ",
		"             XXXXXXX                ",
		"                X                   ",
		"                X                   ",
		"               XXX                  ",
		"              XXXXX                 ",
		"             X     X                ",
		"            X       X               ",
		"           X         X              ",
		"          XXXXXXXXXXXXX             ",
		"              X   X                 ",
		"             X     X                ",
		"            X       X               ",
		"           X         X              ",
		"          X           X             ",
		"         X             X            ",
		"        X               X           ",
		"       X                 X          ",
		"      X                   X         ",
		"     XXXXXXXXXXXXXXXXXXXXXXX        ",
		"           X         X              ",
		"          X           X             ",
		"         X             X            ",
		"        X               X           ",
		"       X                 X          ",
		"      X                   X         ",
		"     X                     X        ",
		"    X                       X       ",
		"   X                         X      ",
		"  XXXXXXXXXXXXXXXXXXXXXXXXXXXXX     ",
		"             XXXXXX                 ",
	];
	window.sinterklaas.drawing.drawImage(x,y,treeimage);
};
window.sinterklaas.drawing.drawCorona = function(x,y){
	var coronaimage = [
		"              XXXXX                 ",
		"                X                   ",
		"             XXXXXXX                ",
		"            X       X               ",
		"           X         X              ",
		"          X  X     X  X             ",
		"         X    X   X    X            ",
		"       X X  X  X X  X  X X          ",
		"       X X             X X          ",
		"       XXX             XXX          ",
		"       X X             X X          ",
		"       X X    XXXX     X X          ",
		"         X   X    X    X            ",
		"          X   XXXX    X             ",
		"           X         X              ",
		"            X       X               ",
		"             XXXXXXX                ",
		"                X                   ",
		"              XXXXX                 ",
	];
	window.sinterklaas.drawing.drawImage(x,y,coronaimage);
};
// misc
window.sinterklaas.gameover = false;
// spawnables
window.sinterklaas.spawnables = [];
// timers
window.sinterklaas.timers = {};
window.sinterklaas.timers.jump = {};
window.sinterklaas.timers.jump.isJumping = false;
window.sinterklaas.timers.jump.isFallingDown = false;
window.sinterklaas.timers.jump.isDucking = false;
window.sinterklaas.timers.jump.offset = 140;
window.sinterklaas.timers.jump.maxHeight = 70;
window.sinterklaas.timers.jump.minHeight = 140;
window.sinterklaas.timers.jump.velocity = 6;
window.sinterklaas.timers.jump.duckingcountdownMax = (((window.sinterklaas.timers.jump.minHeight - window.sinterklaas.timers.jump.maxHeight)/window.sinterklaas.timers.jump.velocity)*2);
window.sinterklaas.timers.jump.duckingcountdown = window.sinterklaas.timers.jump.duckingcountdownMax;
window.sinterklaas.timers.tree = {};
window.sinterklaas.timers.tree.velocity = 5;
window.sinterklaas.timers.tree.spawn = function(){
	if(window.sinterklaas.gameover==false){
		var dataobject = {};
		dataobject.width = window.sinterklaas.canvas.width;
		dataobject.type = Math.ceil(Math.random()*2);
		window.sinterklaas.spawnables.push(dataobject);
	}
	var rnd = (window.sinterklaas.timers.jump.duckingcountdownMax*window.sinterklaas.timers.drawQueueTime) + (Math.random()*10000);
	window.setTimeout(window.sinterklaas.timers.tree.spawn,rnd);
};
window.sinterklaas.timers.drawQueue = function(){
	//
	// Calculate actions
	if(window.sinterklaas.timers.jump.isJumping){
		window.sinterklaas.timers.jump.offset -= window.sinterklaas.timers.jump.velocity;
		if(window.sinterklaas.timers.jump.offset<window.sinterklaas.timers.jump.maxHeight){
			window.sinterklaas.timers.jump.offset = window.sinterklaas.timers.jump.maxHeight;
			window.sinterklaas.timers.jump.isJumping = false;
			window.sinterklaas.timers.jump.isFallingDown = true;
		}
	}
	if(window.sinterklaas.timers.jump.isFallingDown){
		window.sinterklaas.timers.jump.offset += window.sinterklaas.timers.jump.velocity;
		if(window.sinterklaas.timers.jump.offset>window.sinterklaas.timers.jump.minHeight){
			window.sinterklaas.timers.jump.offset = window.sinterklaas.timers.jump.minHeight;
			window.sinterklaas.timers.jump.isFallingDown = false;
		}
	}
	if(window.sinterklaas.timers.jump.isDucking){
		window.sinterklaas.timers.jump.duckingcountdown--;
		if(window.sinterklaas.timers.jump.duckingcountdown<1){
			window.sinterklaas.timers.jump.duckingcountdown = 0;
			window.sinterklaas.timers.jump.isDucking = false;
		}
	}
	for(var i = 0 ; i < window.sinterklaas.spawnables.length; i++){
		window.sinterklaas.spawnables[i].width -= window.sinterklaas.timers.tree.velocity;
		if(window.sinterklaas.spawnables[i].width<1){
			window.sinterklaas.spawnables.splice(i,1);
		}else if(window.sinterklaas.spawnables[i].width>10&&window.sinterklaas.spawnables[i].width<50&&((window.sinterklaas.spawnables[i].type==1&&window.sinterklaas.timers.jump.offset>120)||(window.sinterklaas.spawnables[i].type==2&&(window.sinterklaas.timers.jump.isDucking==false&&window.sinterklaas.timers.jump.offset>120)))){
			window.sinterklaas.gameover = true;
		}
	}
	//
	// Draw stuff
	window.sinterklaas.drawing.clear();
	// then draw objects
	window.sinterklaas.drawing.drawSinterklaas(20,window.sinterklaas.timers.jump.offset-40);
	for(var t = 0 ; t < window.sinterklaas.spawnables.length; t++){
		if(window.sinterklaas.spawnables[t].type==1){
			window.sinterklaas.drawing.drawTree(window.sinterklaas.spawnables[t].width,window.sinterklaas.timers.jump.minHeight-30);
		}else if(window.sinterklaas.spawnables[t].type==2){
			window.sinterklaas.drawing.drawCorona(window.sinterklaas.spawnables[t].width,window.sinterklaas.timers.jump.minHeight-40);
		}
	}
	// then draw bottomline
	for(var x = 0 ; x < window.sinterklaas.canvas.width ; x++){
		window.sinterklaas.drawing.setPixel(x,window.sinterklaas.timers.jump.minHeight,100,100,100,255);
	}
	window.sinterklaas.draw.fillText("Click left or arrow up to jump",10,10);
	window.sinterklaas.draw.fillText("Click right or arrow down to duck",10,20);
	window.sinterklaas.draw.fillText("Created by:",10,150);
	var textoffset = 65;
	for(var u = 0 ; u < window.sinterklaas.copyright.author.length ; u++){
		window.sinterklaas.draw.fillText(window.sinterklaas.copyright.author[u],textoffset,150);
		textoffset += 10+window.sinterklaas.draw.measureText(window.sinterklaas.copyright.author[u]).width;
	}
	if(window.sinterklaas.gameover){
		window.sinterklaas.draw.fillText("GAME OVER",100,100);
	}
};
window.sinterklaas.timers.drawQueueTime = 100;
window.sinterklaas.timers.drawQueueTimer = window.setInterval(window.sinterklaas.timers.drawQueue,window.sinterklaas.timers.drawQueueTime);
window.sinterklaas.timers.tree.spawn();