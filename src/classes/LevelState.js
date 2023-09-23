import { PLACEMENT_TYPE_HERO, PLACEMENT_TYPE_WALL, LEVEL_THEMES } from "../helpers/consts";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { placementFactory } from "./PlacementFactory";
import LevelsMap from "../levels/LevelsMap";
import { Inventory } from "./Inventory";
import { LevelAnimatedFrames } from "./LevelAnimatedFrames";
import { Camera } from "./Camera";
import { Clock } from "./Clock";
import soundsManager, { SFX } from "./Sounds";
import level from "../levels/TutorialLevel";


export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;
    this.directionControls = new DirectionControls();
    this.editModePlacementType = PLACEMENT_TYPE_WALL;
   
    // if (this.level.theme === LEVEL_THEMES.GREEN) {
    // this.music = soundsManager.playSfx(SFX.TESTMUSIC)
    // }


    //Start the level!
    this.start();
  }

  start() {
    this.isCompleted = false;
    this.deathOutcome = null;
    const levelData = LevelsMap[this.id];
 
    this.theme = levelData.theme;
    this.tilesWidth = levelData.tilesWidth;
    this.tilesHeight = levelData.tilesHeight;
    
    if (this.theme === LEVEL_THEMES.GREEN) {
    this.music = soundsManager.playSfx(SFX.LEVEL)
    } else if (this.theme === LEVEL_THEMES.GRAY) {
    this.music = null  
    }

    this.placements = levelData.placements.map((config) => {
      return placementFactory.createPlacement(config, this); //"this" is refering to current level
    });
    //Create fresh inventory
    this.inventory = new Inventory();

      // Create a frame animation manager
      this.animatedFrames = new LevelAnimatedFrames();

    // Cache a reference to the hero
    this.heroRef = this.placements.find((p) => p.type === PLACEMENT_TYPE_HERO);

       // Create a camera
       this.camera = new Camera(this);

        // Create a clock
     this.clock = new Clock(300, this);

    this.startGameLoop();
  }
  

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  addPlacement(config) {
    this.placements.push(placementFactory.createPlacement(config, this));
  }

  deletePlacement(placementToRemove) {
    this.placements = this.placements.filter((p) => {
      return p.id !== placementToRemove.id;
    });
  }

  copyPlacementsToClipboard() {
    // Convert the Placements to type,x,y JSON
    const placementsData = this.placements.map((p) => {
      return {
        type: p.type,
        x: p.x,
        y: p.y,
      };
    });

    // Copy the data to the clipboard for moving into map files after editing
    navigator.clipboard.writeText(JSON.stringify(placementsData)).then(
      () => {
        console.log("Content copied to clipboard");

        // Also console log the output
        console.log(placementsData);
      },
      () => {
        console.error("Failed to copy");
      }
    );
  }

  setEditModePlacementType(newType) {
    this.editModePlacementType = newType;
  }

  tick() {
    if (this.directionControls.direction) {
      this.heroRef.controllerMoveRequested(this.directionControls.direction);
    }
    this.placements.forEach((placement) => {
      placement.tick();
    });

     // Work on animation frames
     this.animatedFrames.tick();

        // Update the camera
        this.camera.tick();

         // Update the clock
     this.clock.tick();

    //Emit any changes to React
    this.onEmit(this.getState());
  }

  isPositionOutOfBounds(x, y) {
    return (
      x === 0 ||
      y === 0 ||
      x >= this.tilesWidth + 1 ||
      y >= this.tilesHeight + 1
    );
  }

  switchAllDoors() {
    this.placements.forEach((placement) => {
      if (placement.toggleIsRaised) {
        placement.toggleIsRaised();
      }
    });
  }

  stealInventory() {
    this.placements.forEach((p) => {
      p.resetHasBeenCollected();
    });
    this.inventory.clear();
  }

  setDeathOutcome(causeOfDeath) {
    this.deathOutcome = causeOfDeath;
    this.gameLoop.stop();
    // soundsManager.stopSfx(SFX.LEVEL);

    if (this.theme === LEVEL_THEMES.GREEN) {
      soundsManager.stopSfx(SFX.LEVEL);
      } else if (this.theme === LEVEL_THEMES.GRAY) {
       soundsManager.stopSfx(SFX.LEVEL); 
      }
  }

  completeLevel() {
    this.isCompleted = true;
    this.gameLoop.stop();
    soundsManager.stopSfx(SFX.LEVEL);
  }


  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
      deathOutcome: this.deathOutcome,
      isCompleted: this.isCompleted,
      cameraTransformX: this.camera.transformX,
      cameraTransformY: this.camera.transformY,
      secondsRemaining: this.clock.secondsRemaining,
      inventory: this.inventory,
      restart: () => {
        this.start();
      },
       // Edit Mode API
       enableEditing: true,
       editModePlacementType: this.editModePlacementType,
       addPlacement: this.addPlacement.bind(this),
       deletePlacement: this.deletePlacement.bind(this),
       setEditModePlacementType: this.setEditModePlacementType.bind(this),
       copyPlacementsToClipboard: this.copyPlacementsToClipboard.bind(this),
    };
  }

  destroy() {
    // Tear down the level.
    this.gameLoop.stop();
    this.directionControls.unbind();
  }
}
