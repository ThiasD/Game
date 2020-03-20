// Change order of adding entities, add to array and sort by type before adding.

LEVEL_LIST = [ "",
"|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n|                                                                                                                     ||||||||            |\n|                                                                                                                     ||||||||        g   |\n|                                                                                                                     ||||||||   w        |\n|                                                                                                                     ||||||||     ||||||||\n|                                                                                             s                       ||||||||     ||||||||\n|                                                                                                                     ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||   w ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       |||||||| _   ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||w    ||||||||\n|                                                                                        ||||||                       ||||||||     ||||||||\n|                                                                                        ||||||                       ||||||||    _||||||||\n|                                                                                     w  ||||||                       ||||||||     ||||||||\n|                                                                                     _  ||||||                       ||||||||     ||||||||\n|                                                                      _                 ||||||                       ||||||||     ||||||||\n|                                     d                      _           ||||||||||      ||||||                       ||||||||    w||||||||\n|  a   d          _  ||                _                                 ||||||||||      ||||||                                    ||||||||\n|    @               ||                                        ||||||                    ||||||                                _   ||||||||\n|                    ||                                        ||||||                    ||||||                                    ||||||||\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
"||||||||||||||||||||||||||||||\n|                            |\n|                            |\n|                            |\n|                            |\n|                            |\n|                          g |\n|              ||||          |\n|              |   |||    ||||\n|              |      ^^^^||||\n|              |||||||||||||||\n|   |||||||    |||||||||||||||\n|         |       ||||||||||||\n|         |       ||||||||||||\n|         |       ||||||||||||\n|||       |       ||||||||||||\n|||       |       ||||||||||||\n|         |       ||||||||||||\n|         |       ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                 ||||||||||||\n|                            |\n|||||||                      |\n|||||||        ||            |\n|||||||                      |\n|||||||                      |\n||||||||||                   |\n||||||||||                   |\n||||||||||                   |\n||||||||||||||||||||||||     |\n|                            |\n| @                          |\n|                            |\n||||||||||||||||||||||||||||||",
"||||||||||||||||||||||||||||||||||||||||||||||||||\n|                 v                              |\n|                                                |\n|                                                |\n|                                                |\n|   g                                            |\n|                                                |\n|                                                |\n| |||||||||||||  ^ ^                    ^^      ||\n| |||||||||||||        |||||||||||||||||||      ||\n|                      |||||||||||||||||||      ||\n|                      |||||||||||||||||||       |\n|                      |||||||||||||||||||       |\n|                      |||||||||||||||||||       |\n|                      |||||||||||||||||||      <|\n|                      |||||||||||||||||||      <|\n|                      |||||||||||||||||||      <|\n|                      |||||||||||||||||||      <|\n|                      |||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||       |\n|                     <|||||||||||||||||||>      |\n|                               ||||||||||>      |\n| @                                  |||||>      |\n|                                                |\n|          ^^^^^                                 |\n||||||||||||||||||||||||||||||||||||||||||||||||||",
"|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n|                                                                     |\n|                                                      {  }           |\n|                                                      ||||           |\n|                                                      ||||           |\n|                                                      ||||           |\n|  }   @                                               ||||        g  |\n|                                |||                   ||||           |\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n",
"|||||||||||||||||||||||||||||||||||||\n|                                   |\n|                                   |\n|           |                       |\n|           |                       |\n|           |                       |\n|           |                       |\n|           |                       |\n|                        |||||     ||\n| g                          |      |\n|                            |      |\n||||^^^^^^^|||||             |      |\n|                            |      |\n|                                   |\n|[                                  |\n|                                   |\n|                                   |\n|                                   |\n|                                   |\n|              ||||              ||||\n|      ||||||||                 ]||||\n|         |              ||||||||||||\n|         |              ||||||||||||\n|         |vvvvvvvvvvvvvvvvvvvvvvvvv|\n|||||       <>                      |\n|||||       <>                      |\n|           ||                      |\n|           |                       |\n|     |     |      ||||||           |\n|     |     |           |           |\n|     |                 |           |\n|     |                 |           |\n|     |                 |>          |\n|^^^^^|    ||||         |>          |\n|||||||                 |>       ||||\n|                                |  |\n|                                |  |\n|                                |  |\n|                                |  |\n|[                               |  |\n|                 ||||              |\n|                           |||     |\n|        ||||                       |\n|                                   |\n| @                                 |\n|                   	            |\n||||||^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^|\n|||||||||||||||||||||||||||||||||||||",
"||||||||||||||||||||||||||||||\n|[                            |\n|[                            |\n|[                  |||       |\n|[                  |         |\n|[                      <|    |\n|[          ||||        <|  g |\n|[             |        <|    |\n|[             |        <||||||\n|[             |||            |\n|[                            |\n|[                            |\n|[                            |\n|[                  |||||     |\n|[                  |   |     |\n|[                      |     |\n|[                     <|     |\n|[         |||||       <|     |\n|[             |       <|     |\n|[             |       <|     |\n|[             |       <|     |\n|[             |              |\n|[                            |\n|[                            |\n|[                   ||||     |\n|[                   |        |\n|[                   |        |\n|[                   |        |\n|[                            |\n|[        |                   |\n|[        |                   |\n|[        ||||||              |\n|[                            |\n||||||||||||||||||||||||      |\n|[                            |\n|[      @                     |\n|[                            |\n|||||||||||||||||||||||||||||||",
""]


function LevelManager(game, Kay9, lvl, camera){
    // this.moving = move;
    this.K9 = Kay9;
    this.level = lvl;
    Entity.call(this, game, 0, 0, 0, 0);

    // this.spritesheet = spritesheet;
    this.ctx = game.ctx;

    this.entityList = [];
    this.camera = camera;

    this.type = "lvlMngr";
    this.lvlSize = 0;

    //beginGame(game, this.level);

}

LevelManager.prototype = new Entity();
LevelManager.prototype.constructor = LevelManager;

LevelManager.prototype.update = function () {
    
    var dogIsInLevel = false;
    for( const ent in this.game.entities){
        entity = this.game.entities[ent];
        if(entity.type === 'kaynine'){
            dogIsInLevel = true;
        }
    }

    if(dogIsInLevel === false){ // dog has been removed from game world
        if(this.game.isWin){
            this.game.isWin = false;
            loadLevel(this.game,this.level + 1);
        } else {
            this.game.score -= 20;
            loadLevel(this.game,this.level);
        }
    }
    
}

function loadLevel(game, levelNumber) {

    var level = this.LEVEL_LIST[levelNumber];
    //this.entityList = [];
    //game.entityList = [];

    if(levelNumber == 1){
        game.ctx.font = "20px Arial";
        game.ctx.fillStyle = 'white';
        game.ctx.strokeStyle = 'black';
        game.ctx.fillText("'A' and 'D' for left/ right", 10, 50);
        game.ctx.strokeText("'A' and 'D' for left/ right", 10, 50);
        game.ctx.fillText("Space bar for both jump and wall jump", 10, 55);
        game.ctx.strokeText("Space bar for both jump and wall jump", 10, 55);
    }


    game.entities.length = 0; // get rid of all entities in the level

    var cam = new Camera();

    if( level.length === 0){
        var win = new Background(game, ASSET_MANAGER.getAsset("img/win.jpg"),0, 0, cam);
        game.addEntity(win);
    } else {


        x = 0;
        xMax = x;
        y = 0;
        blockwidth  = 65; // this blockwidth's time is limited
        // blockwidth = 65; eventually we'll use this ; for testing load and such i'll keep this commented out
        blockHeight = 65;

        for(i = 0; i < level.length; i++) {

            // var bg = new Background(game, ASSET_MANAGER.getAsset("img/background.png"),x, y, cam);
            // game.queueEntity(bg);

            switch(level.charAt(i)) {
                case(' '): break; // Nothing

                case('|'):
                case('-'):
                    var f = new Floor(game, ASSET_MANAGER.getAsset("img/smallPlatform.png"), x, y, blockwidth, blockHeight, cam);
                    game.addEntity(f);
                    /*this.entityList[i] = f;*/    break; // Wall

                case('@'):
                    var kayNine = new KayNine(game, x, y, cam);
                    this.K9 = kayNine;
                    game.addEntity(kayNine);
                    cam.attachKaynine(kayNine);
                break;           // KayNine

                case('g'):
                    var g = new Goal(game, ASSET_MANAGER.getAsset("img/flag.png"),x, y, cam);
                    game.addEntity(g);
                break;              // Goal

                case('['):
                    var RT = new Turret(game, ASSET_MANAGER.getAsset("img/turret_right.png"), x, y, 135, 6, "R",  cam);
                    game.addEntity(RT);
                break;      // Right Facing Turret

                case(']'):
                    var LT = new Turret(game, ASSET_MANAGER.getAsset("img/turret_left.png"), x, y, 135, 6, "L",  cam);
                    game.addEntity(LT);
                break;          // Left Facing Turret

                case('^'):
                    var sUp = new Spike(game, ASSET_MANAGER.getAsset("img/spike_up.png"), x, y, 65, 65, "u", cam);
                    game.addEntity(sUp);
                    /*this.entityList[i] = sUp;*/ break;       // Upward    Facing Spike

                case('v'):
                    var sDown = new Spike(game, ASSET_MANAGER.getAsset("img/spike_down.png"), x, y, 65, 65, "d", cam);
                    game.addEntity(sDown);
                    /*this.entityList[i] = sDown;*/ break;       // Upward    Facing Spike  // Downward  Facing Spike

                case('<'):
                    var sLeft = new Spike(game, ASSET_MANAGER.getAsset("img/spike_left.png"), x, y, 65, 65, "l", cam);
                    game.addEntity(sLeft);
                    /*this.entityList[i] = sLeft;*/ break;     // Leftward  Facing Spike

                case('>'):
                    var sRight = new Spike(game, ASSET_MANAGER.getAsset("img/spike_right.png"), x, y, 65, 65, "r", cam);
                    game.addEntity(sRight);
                    /*this.entityList[i] = sRight;*/ break;    // Rightward Facing Spike
					
				case('{'):
                    var vRight = new Vacuum(game, ASSET_MANAGER.getAsset("img/vacuum_moving_right.png"), x, y, 150, "L",  cam);
                    game.addEntity(vRight);
                break;      // Right Facing vacuum

                case('}'):
                    var vLeft = new Vacuum(game, ASSET_MANAGER.getAsset("img/vacuum_moving_left.png"), x, y, 150, "R",  cam);
                    game.addEntity(vLeft);
					break;          // Left Facing vacuum
				case('w'):
					var tUp = new Tutorial(game, ASSET_MANAGER.getAsset("img/blink_w.png"), x, y, "w", cam);
					game.addEntity(tUp);
					break;
				case('a'):
					var tLeft = new Tutorial(game, ASSET_MANAGER.getAsset("img/blink_a.png"), x, y, "a", cam);
					game.addEntity(tLeft);
					break;
				case('s'):
					var tDown = new Tutorial(game, ASSET_MANAGER.getAsset("img/blink_s.png"), x, y, "s", cam);
					game.addEntity(tDown);
					break;
				case('d'):
					var tRight = new Tutorial(game, ASSET_MANAGER.getAsset("img/blink_d.png"), x, y, "d", cam);
					game.addEntity(tRight);
					break;
				case('_'):
					var tSpace = new Tutorial(game, ASSET_MANAGER.getAsset("img/blink_space.png"), x, y, "_", cam);
					game.addEntity(tSpace);
					break;

                case('\n'): 
                    y = y + blockHeight; x = -blockwidth; 
                break; // Next line

                default: 
                    console.log("Level builder encountered unknown character \"" + level.charAt(i) + "\"");
                break;
            }
			
            x = x + blockwidth;
            if(x > xMax) { xMax = x; }
        }
    game.addEntity(cam);

    var lvlMngr = new LevelManager(game, kayNine, levelNumber, cam); // This needs to be here because lvlMngr needs to be in the new entities update list
    game.addEntity(lvlMngr);
    // for(const ent in game.entities){
    //     entity = game.entities[ent];
    //     console.log(entity.type);
    // }
    console.log("Reached the end of levelManager");

    }    //return entityList;
}

function beginGame(game, level) {

    loadLevel(this, level);

}


