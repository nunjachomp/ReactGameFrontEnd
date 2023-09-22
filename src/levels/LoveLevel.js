import {
    LEVEL_THEMES,
    PLACEMENT_TYPE_FLOUR,
    PLACEMENT_TYPE_GOAL,
    PLACEMENT_TYPE_HERO,
    PLACEMENT_TYPE_WALL,
    PLACEMENT_TYPE_LOCK,
    PLACEMENT_TYPE_KEY,
    PLACEMENT_TYPE_CONVEYOR,
    PLACEMENT_TYPE_WATER,
    PLACEMENT_TYPE_FIRE,
    PLACEMENT_TYPE_ICE,
    PLACEMENT_TYPE_ICE_PICKUP,
    PLACEMENT_TYPE_WATER_PICKUP,
    PLACEMENT_TYPE_FIRE_PICKUP,
    PLACEMENT_TYPE_ROAMING_ENEMY,
    PLACEMENT_TYPE_GROUND_ENEMY,
    PLACEMENT_TYPE_FLYING_ENEMY,
    PLACEMENT_TYPE_SWITCH_DOOR,
    PLACEMENT_TYPE_SWITCH,
    PLACEMENT_TYPE_TELEPORT,
    PLACEMENT_TYPE_THIEF,
    PLACEMENT_TYPE_CIABATTA
  } from "../helpers/consts";
  
  const specialTiles = [{type: PLACEMENT_TYPE_ICE, corner: "TOP_RIGHT","x":15,"y":12},{type: PLACEMENT_TYPE_ICE, corner: "TOP_LEFT","x":10,"y":12},{type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_LEFT","x":10,"y":17},{type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_LEFT","x":12,"y":15},{type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_RIGHT","x":15,"y":15},{type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_RIGHT","x":17,"y":17},{type: PLACEMENT_TYPE_ICE, corner: "TOP_RIGHT","x":17,"y":10},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":3,"y":13},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":16,"y":8},{type: PLACEMENT_TYPE_KEY, color: "GREEN","x":13,"y":14},{type: PLACEMENT_TYPE_LOCK, color: "GREEN","x":15,"y":21},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":1,"y":1},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":2,"y":1},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":3,"y":1},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":4,"y":1},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":4,"y":2},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":3,"y":2},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":2,"y":2},{type: PLACEMENT_TYPE_CONVEYOR, direction: "UP","x":1,"y":2},{type: PLACEMENT_TYPE_CONVEYOR, direction: "UP","x":3,"y":3},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":4,"y":3},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":4,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "UP","x":3,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":2,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":1,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "UP","x":1,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":2,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "UP","x":3,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":4,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":4,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":3,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":2,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "UP","x":1,"y":6}]

  const level = {
    theme: LEVEL_THEMES.PINK,
    tilesWidth: 18,
    tilesHeight: 24,
    placements: [{"type":"HERO","x":1,"y":13},{"type":"GOAL","x":15,"y":1},{"type":"WALL","x":1,"y":12},{"type":"WALL","x":2,"y":12},{"type":"WALL","x":1,"y":14},{"type":"WALL","x":2,"y":11},{"type":"WALL","x":2,"y":14},{"type":"WALL","x":2,"y":15},{"type":"WALL","x":1,"y":7},{"type":"WALL","x":2,"y":7},{"type":"WALL","x":3,"y":7},{"type":"WALL","x":4,"y":7},{"type":"WALL","x":5,"y":7},{"type":"WALL","x":6,"y":7},{"type":"WALL","x":7,"y":7},{"type":"WALL","x":8,"y":7},{"type":"WALL","x":18,"y":7},{"type":"WALL","x":17,"y":7},{"type":"WALL","x":16,"y":7},{"type":"WALL","x":15,"y":7},{"type":"WALL","x":14,"y":7},{"type":"WALL","x":13,"y":7},{"type":"WALL","x":12,"y":7},{"type":"WALL","x":11,"y":7},{"type":"WALL","x":10,"y":7},{"type":"WALL","x":4,"y":20},{"type":"WALL","x":3,"y":21},{"type":"WALL","x":3,"y":23},{"type":"WALL","x":4,"y":24},{"type":"WALL","x":5,"y":23},{"type":"WALL","x":6,"y":22},{"type":"WALL","x":5,"y":21},{"type":"TELEPORT","x":2,"y":22},{"type":"LOCK","x":2,"y":22},{"type":"TELEPORT","x":18,"y":1},{"type":"WALL","x":18,"y":2},{"type":"WALL","x":17,"y":2},{"type":"WALL","x":16,"y":2},{"type":"WALL","x":15,"y":2},{"type":"WALL","x":14,"y":2},{"type":"WALL","x":14,"y":1},{"type":"WALL","x":15,"y":24},{"type":"WALL","x":16,"y":23},{"type":"WALL","x":17,"y":22},{"type":"WALL","x":17,"y":21},{"type":"WALL","x":16,"y":20},{"type":"WALL","x":14,"y":23},{"type":"WALL","x":13,"y":22},{"type":"WALL","x":13,"y":21},{"type":"WALL","x":14,"y":20},{"type":"ICE","x":17,"y":11},{"type":"ICE","x":16,"y":10},{"type":"ICE","x":15,"y":10},{"type":"ICE","x":14,"y":10},{"type":"ICE","x":13,"y":10},{"type":"ICE","x":17,"y":12},{"type":"ICE","x":17,"y":13},{"type":"ICE","x":17,"y":14},{"type":"WALL","x":13,"y":9},{"type":"WALL","x":14,"y":9},{"type":"WALL","x":15,"y":9},{"type":"WALL","x":16,"y":9},{"type":"WALL","x":17,"y":9},{"type":"WALL","x":18,"y":9},{"type":"WALL","x":18,"y":10},{"type":"WALL","x":18,"y":11},{"type":"WALL","x":18,"y":12},{"type":"WALL","x":18,"y":13},{"type":"WALL","x":18,"y":14},{"type":"WALL","x":16,"y":11},{"type":"WALL","x":15,"y":11},{"type":"WALL","x":14,"y":11},{"type":"WALL","x":13,"y":11},{"type":"WALL","x":12,"y":9},{"type":"WALL","x":11,"y":9},{"type":"WALL","x":11,"y":11},{"type":"WALL","x":12,"y":11},{"type":"ICE","x":17,"y":15},{"type":"ICE","x":17,"y":16},{"type":"ICE","x":16,"y":17},{"type":"ICE","x":15,"y":17},{"type":"ICE","x":14,"y":17},{"type":"ICE","x":13,"y":17},{"type":"ICE","x":12,"y":17},{"type":"ICE","x":11,"y":17},{"type":"ICE","x":10,"y":16},{"type":"ICE","x":10,"y":15},{"type":"ICE","x":10,"y":14},{"type":"ICE","x":10,"y":13},{"type":"ICE","x":11,"y":12},{"type":"ICE","x":12,"y":12},{"type":"ICE","x":13,"y":12},{"type":"ICE","x":14,"y":12},{"type":"ICE","x":15,"y":13},{"type":"ICE","x":15,"y":14},{"type":"ICE","x":14,"y":15},{"type":"ICE","x":13,"y":15},{"type":"ICE","x":12,"y":14},{"type":"WALL","x":11,"y":14},{"type":"WALL","x":12,"y":16},{"type":"WALL","x":11,"y":16},{"type":"WALL","x":11,"y":15},{"type":"WALL","x":13,"y":16},{"type":"WALL","x":14,"y":16},{"type":"WALL","x":15,"y":16},{"type":"WALL","x":16,"y":16},{"type":"WALL","x":16,"y":15},{"type":"WALL","x":16,"y":14},{"type":"WALL","x":16,"y":13},{"type":"WALL","x":16,"y":12},{"type":"WALL","x":18,"y":15},{"type":"WALL","x":18,"y":16},{"type":"WALL","x":18,"y":17},{"type":"WALL","x":18,"y":18},{"type":"WALL","x":17,"y":18},{"type":"WALL","x":16,"y":18},{"type":"WALL","x":15,"y":18},{"type":"WALL","x":14,"y":18},{"type":"WALL","x":13,"y":18},{"type":"WALL","x":12,"y":18},{"type":"WALL","x":11,"y":18},{"type":"WALL","x":10,"y":18},{"type":"WALL","x":9,"y":18},{"type":"WALL","x":9,"y":17},{"type":"WALL","x":9,"y":16},{"type":"WALL","x":9,"y":15},{"type":"WALL","x":9,"y":14},{"type":"WALL","x":9,"y":13},{"type":"WALL","x":9,"y":12},{"type":"WALL","x":10,"y":11},{"type":"WALL","x":9,"y":11},{"type":"WALL","x":11,"y":13},{"type":"WALL","x":12,"y":13},{"type":"WALL","x":13,"y":13},{"type":"WALL","x":14,"y":14},{"type":"WALL","x":14,"y":13},{"type":"WALL","x":10,"y":9},{"type":"WALL","x":9,"y":9},{"type":"ICE","x":12,"y":10},{"type":"ICE","x":11,"y":10},{"type":"ICE","x":10,"y":10},{"type":"ICE","x":9,"y":10},{"type":"FIRE","x":9,"y":7},{"type":"FIRE_PICKUP","x":15,"y":22},{"type":"WALL","x":12,"y":8},{"type":"SWITCH","x":2,"y":13},{"type":"SWITCH_DOOR","x":15,"y":8},{"type":"GROUND_ENEMY","x":13,"y":8},{"type":"GROUND_ENEMY","x":17,"y":8},{"type":"GROUND_ENEMY","x":7,"y":10},{"type":"GROUND_ENEMY","x":4,"y":1},{"type":"WALL","x":5,"y":2},{"type":"WALL","x":5,"y":3},{"type":"WALL","x":2,"y":3},{"type":"WALL","x":1,"y":3},{"type":"WALL","x":5,"y":1},{"type":"SWITCH","x":1,"y":2},{"type":"WALL","x":5,"y":4},{"type":"WALL","x":5,"y":5},{"type":"WALL","x":5,"y":6},{"type":"WALL","x":7,"y":1},{"type":"WALL","x":7,"y":2},{"type":"WALL","x":9,"y":1},{"type":"WALL","x":9,"y":2},{"type":"SWITCH_DOOR","x":8,"y":2},{"type":"KEY","x":8,"y":1},{"type":"FLOUR","x":18,"y":5},{"type":"FLOUR","x":4,"y":22},{"type":"FLOUR","x":1,"y":8}, ...specialTiles ]
  };
  
  export default level;