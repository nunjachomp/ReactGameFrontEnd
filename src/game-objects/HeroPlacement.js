import { Placement } from "./Placement";
import Hero from "../components/object-graphics/Hero";
import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  directionUpdateMap,
  BODY_SKINS,
  HERO_RUN_1,
  HERO_RUN_2,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

const heroSkinMap = {
  [BODY_SKINS.NORMAL]: [TILES.HERO_LEFT, TILES.HERO_RIGHT],
  [HERO_RUN_1]: [TILES.HERO_RUN_1_LEFT, TILES.HERO_RUN_1_RIGHT],
  [HERO_RUN_2]: [TILES.HERO_RUN_2_LEFT, TILES.HERO_RUN_2_RIGHT],
};

export class HeroPlacement extends Placement {
  controllerMoveRequested(direction) {
    // Attempt to start moving
    if (this.movingPixelsRemaining > 0) {
      return;
    }

    // Start the move
    this.movingPixelsRemaining = 16;
    this.movingPixelsDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  updateFacingDirection() {
    if (
      this.movingPixelsDirection === DIRECTION_LEFT ||
      this.movingPixelsDirection === DIRECTION_RIGHT
    ) {
      this.spriteFacingDirection = this.movingPixelsDirection;
    }
  }

  updateWalkFrame() {
    this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1; //Determines which arm is moving
  }

  tick() {
    this.tickMovingPixelProgress();
  }

  tickMovingPixelProgress() {
    if (this.movingPixelsRemaining === 0) {
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelPerFrame;
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }
  onDoneMoving() {
    //Updating x/y of hero
    const { x, y } = directionUpdateMap[this.movingPixelsDirection];
    this.x += x;
    this.y += y;
  }
  getFrame() {
    //Which frame to show?
    const index = this.spriteFacingDirection === DIRECTION_LEFT ? 0 : 1;

    //Use correct walking frame per direction
    if (this.movingPixelsRemaining > 0) {
      const walkKey = this.spriteWalkFrame === 0 ? HERO_RUN_1 : HERO_RUN_2;
      return heroSkinMap[walkKey][index];
    }

    return heroSkinMap[BODY_SKINS.NORMAL][index];
  }

  getYTranslate() {
    // Stand on ground when not moving
    if (this.movingPixelsRemaining === 0) {
      return 0;
    }

    //Elevate ramp up or down at beginning/end of movement
    const PIXELS_FROM_END = 2;
    if (
      this.movingPixelsRemaining < PIXELS_FROM_END ||
      this.movingPixelsRemaining > 16 - PIXELS_FROM_END
    ) {
      return -1;
    }

    // Highest in the middle of the movement
    return -2;
  }
  renderComponent() {
    //Behavior of hero renders
    return (
      <Hero frameCoord={this.getFrame()} yTranslate={this.getYTranslate()} />
    );
  }
}
