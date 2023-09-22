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
  
  const specialTiles = [{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":5,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":5,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":6,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":6,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":7,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":7,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":8,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":8,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":9,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":9,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":10,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":10,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":11,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":11,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":12,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":12,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":13,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":13,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":14,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":14,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":15,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":15,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":16,"y":13},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":16,"y":14},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":3},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":7},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":8},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":9},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":10},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":5,"y":12},

{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":3},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":7},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT","x":6,"y":12},

{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":3},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":7},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":15,"y":12},

{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":3},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":4},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":5},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":6},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":7},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":8},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":9},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":10},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT","x":16,"y":12},

{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":7,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":8,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":9,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":10,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":11,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":12,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":13,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":14,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":7,"y":4},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":7,"y":5},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":14,"y":4},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":14,"y":5},

{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":7,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":8,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":9,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":10,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":11,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":12,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":13,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":14,"y":11},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":7,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":8,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":9,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":10,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":11,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":12,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":13,"y":12},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":14,"y":12},

{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":7,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":8,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":9,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":10,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":11,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":12,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":13,"y":12},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":14,"y":12},

{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":6,"y":8},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":6,"y":9},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":6,"y":10},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":15,"y":8},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":15,"y":9},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":15,"y":10}

];

  const level = {
    theme: LEVEL_THEMES.GRAY,
    tilesWidth: 20,
    tilesHeight: 16,
    placements: [{"type":"HERO","x":10,"y":10},{"type":"CIABATTA","x":10,"y":4},{"type":"FIRE","x":1,"y":16},{"type":"FIRE","x":2,"y":16},{"type":"FIRE","x":3,"y":16},{"type":"FIRE","x":3,"y":15},{"type":"FIRE","x":4,"y":15},{"type":"FIRE","x":4,"y":16},{"type":"FIRE","x":5,"y":15},{"type":"FIRE","x":5,"y":16},{"type":"FIRE","x":6,"y":16},{"type":"FIRE","x":6,"y":15},{"type":"FIRE","x":7,"y":15},{"type":"FIRE","x":7,"y":16},{"type":"FIRE","x":8,"y":16},{"type":"FIRE","x":8,"y":15},{"type":"FIRE","x":10,"y":16},{"type":"FIRE","x":10,"y":15},{"type":"FIRE","x":9,"y":16},{"type":"FIRE","x":9,"y":15},{"type":"FIRE","x":11,"y":15},{"type":"FIRE","x":11,"y":16},{"type":"FIRE","x":12,"y":15},{"type":"FIRE","x":12,"y":16},{"type":"FIRE","x":13,"y":16},{"type":"FIRE","x":13,"y":15},{"type":"FIRE","x":14,"y":15},{"type":"FIRE","x":14,"y":16},{"type":"FIRE","x":15,"y":16},{"type":"FIRE","x":15,"y":15},{"type":"FIRE","x":16,"y":15},{"type":"FIRE","x":16,"y":16},{"type":"FIRE","x":17,"y":16},{"type":"FIRE","x":17,"y":15},{"type":"FIRE","x":18,"y":15},{"type":"FIRE","x":18,"y":16},{"type":"FIRE","x":3,"y":14},{"type":"FIRE","x":4,"y":14},{"type":"FIRE","x":4,"y":13},{"type":"FIRE","x":3,"y":13},{"type":"FIRE","x":3,"y":12},{"type":"FIRE","x":4,"y":12},{"type":"FIRE","x":4,"y":11},{"type":"FIRE","x":3,"y":11},{"type":"FIRE","x":3,"y":10},{"type":"FIRE","x":4,"y":10},{"type":"FIRE","x":4,"y":9},{"type":"FIRE","x":3,"y":9},{"type":"FIRE","x":3,"y":8},{"type":"FIRE","x":4,"y":8},{"type":"FIRE","x":4,"y":7},{"type":"FIRE","x":3,"y":7},{"type":"FIRE","x":17,"y":14},{"type":"FIRE","x":18,"y":14},{"type":"FIRE","x":18,"y":13},{"type":"FIRE","x":17,"y":13},{"type":"FIRE","x":17,"y":12},{"type":"FIRE","x":18,"y":12},{"type":"FIRE","x":18,"y":11},{"type":"FIRE","x":17,"y":11},{"type":"FIRE","x":17,"y":10},{"type":"FIRE","x":18,"y":10},{"type":"FIRE","x":18,"y":9},{"type":"FIRE","x":17,"y":9},{"type":"FIRE","x":17,"y":8},{"type":"FIRE","x":18,"y":8},{"type":"FIRE","x":18,"y":7},{"type":"FIRE","x":17,"y":7},{"type":"FIRE","x":17,"y":6},{"type":"FIRE","x":18,"y":6},{"type":"FIRE","x":17,"y":5},{"type":"FIRE","x":18,"y":5},{"type":"FIRE","x":17,"y":4},{"type":"FIRE","x":18,"y":4},{"type":"FIRE","x":17,"y":3},{"type":"FIRE","x":18,"y":3},{"type":"FIRE","x":17,"y":2},{"type":"FIRE","x":18,"y":2},{"type":"FIRE","x":18,"y":1},{"type":"FIRE","x":17,"y":1},{"type":"FIRE","x":16,"y":1},{"type":"FIRE","x":16,"y":2},{"type":"FIRE","x":15,"y":2},{"type":"FIRE","x":15,"y":1},{"type":"FIRE","x":13,"y":1},{"type":"FIRE","x":14,"y":1},{"type":"FIRE","x":14,"y":2},{"type":"FIRE","x":13,"y":2},{"type":"FIRE","x":12,"y":2},{"type":"FIRE","x":12,"y":1},{"type":"FIRE","x":11,"y":1},{"type":"FIRE","x":11,"y":2},{"type":"FIRE","x":10,"y":2},{"type":"FIRE","x":10,"y":1},{"type":"FIRE","x":9,"y":1},{"type":"FIRE","x":9,"y":2},{"type":"FIRE","x":8,"y":2},{"type":"FIRE","x":8,"y":1},{"type":"FIRE","x":7,"y":1},{"type":"FIRE","x":7,"y":2},{"type":"FIRE","x":6,"y":2},{"type":"FIRE","x":6,"y":1},{"type":"FIRE","x":5,"y":1},{"type":"FIRE","x":5,"y":2},{"type":"FIRE","x":4,"y":2},{"type":"FIRE","x":4,"y":1},{"type":"FIRE","x":3,"y":1},{"type":"FIRE","x":3,"y":2},{"type":"FIRE","x":3,"y":3},{"type":"FIRE","x":4,"y":3},{"type":"FIRE","x":3,"y":4},{"type":"FIRE","x":4,"y":4},{"type":"FIRE","x":3,"y":5},{"type":"FIRE","x":4,"y":5},{"type":"FIRE","x":3,"y":6},{"type":"FIRE","x":4,"y":6},{"type":"SWITCH","x":8,"y":9}, ...specialTiles, {type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":7,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":8,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":9,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":10,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":11,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":12,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":13,"y":11},{type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN","x":14,"y":11},{"type":"FLYING_ENEMY","x":1,"y":10},{"type":"FLYING_ENEMY","x":5,"y":9},{"type":"FLYING_ENEMY","x":16,"y":8},{"type":"WALL","x":2,"y":1},{"type":"WALL","x":2,"y":2},{"type":"WALL","x":2,"y":3},{"type":"WALL","x":2,"y":4},{"type":"WALL","x":2,"y":5},{"type":"WALL","x":2,"y":6},{"type":"WALL","x":2,"y":7},{"type":"WALL","x":1,"y":7},{"type":"WALL","x":19,"y":1},{"type":"WALL","x":19,"y":2},{"type":"WALL","x":19,"y":3},{"type":"WALL","x":19,"y":4},{"type":"WALL","x":19,"y":5},{"type":"WALL","x":19,"y":6},{"type":"WALL","x":19,"y":7},{"type":"WALL","x":20,"y":7},{"type":"GROUND_ENEMY","x":1,"y":6},{"type":"GROUND_ENEMY","x":1,"y":3},{"type":"GROUND_ENEMY","x":1,"y":1},{"type":"ROAMING_ENEMY","x":20,"y":2},{"type":"ROAMING_ENEMY","x":20,"y":5},{"type":"FIRE","x":1,"y":8},{"type":"FIRE","x":2,"y":8},{"type":"FIRE","x":1,"y":9},{"type":"FIRE","x":2,"y":9},{"type":"FIRE","x":1,"y":10},{"type":"FIRE","x":2,"y":10},{"type":"FIRE","x":1,"y":11},{"type":"FIRE","x":2,"y":11},{"type":"FIRE","x":1,"y":12},{"type":"FIRE","x":2,"y":12},{"type":"FIRE","x":1,"y":13},{"type":"FIRE","x":2,"y":13},{"type":"FIRE","x":2,"y":14},{"type":"FIRE","x":1,"y":14},{"type":"FIRE","x":1,"y":15},{"type":"FIRE","x":2,"y":15},{"type":"FIRE","x":19,"y":8},{"type":"FIRE","x":20,"y":8},{"type":"FIRE","x":19,"y":9},{"type":"FIRE","x":20,"y":9},{"type":"FIRE","x":19,"y":10},{"type":"FIRE","x":20,"y":10},{"type":"FIRE","x":19,"y":11},{"type":"FIRE","x":20,"y":11},{"type":"FIRE","x":19,"y":12},{"type":"FIRE","x":20,"y":12},{"type":"FIRE","x":19,"y":13},{"type":"FIRE","x":20,"y":13},{"type":"FIRE","x":19,"y":14},{"type":"FIRE","x":20,"y":14},{"type":"FIRE","x":19,"y":15},{"type":"FIRE","x":20,"y":15},{"type":"FIRE","x":19,"y":16},{"type":"FIRE","x":20,"y":16}, ...specialTiles ]
  
  
  };
  
  export default level;
  