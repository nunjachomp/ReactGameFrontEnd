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

const specialTiles = [{ x: 25, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 7, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 25, y: 8, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 26, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 26, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 26, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 26, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 26, y: 7, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 27, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 27, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 27, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 27, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 27, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 27, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 27, y: 7, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 28, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 28, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 28, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 28, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 28, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 28, y: 7, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 28, y: 8, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 29, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 29, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 29, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 29, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 29, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 29, y: 8, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 30, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 30, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 30, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 30, y: 8, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 31, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 31, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 31, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 31, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 31, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 31, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 31, y: 7, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 31, y: 8, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 32, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 32, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 32, y: 3, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 32, y: 4, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 32, y: 5, type: PLACEMENT_TYPE_CONVEYOR, direction: "DOWN" },{ x: 32, y: 6, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" },{ x: 32, y: 7, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{ x: 32, y: 8, type: PLACEMENT_TYPE_CONVEYOR, direction: "UP" },{type: PLACEMENT_TYPE_LOCK, color: "GREEN","x":16,"y":3},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":15,"y":30},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":15,"y":29},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":15,"y":28},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":16,"y":28},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":17,"y":28},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":18,"y":28},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":18,"y":29},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":18,"y":30},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":30,"y":31},{type: PLACEMENT_TYPE_KEY, color: "GREEN","x":1,"y":32},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":7,"y":15},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":7,"y":14},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":7,"y":16},{type: PLACEMENT_TYPE_SWITCH, isRaised: false,"x":7,"y":17},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":2,"y":15},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":1,"y":16},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":2,"y":16},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":2,"y":14},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false,"x":1,"y":14},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":5,"y":16},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":5,"y":18},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":5,"y":17},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":6,"y":14},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":6,"y":15},{type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true,"x":6,"y":16}];

const level = {
  theme: LEVEL_THEMES.GREEN,
  tilesWidth: 32,
  tilesHeight: 32,
  placements: [{"type":"HERO","x":16,"y":32},{"type":"WALL","x":15,"y":32},{"type":"WALL","x":18,"y":32},{"type":"WALL","x":18,"y":31},{"type":"WALL","x":19,"y":31},{"type":"WALL","x":15,"y":31},{"type":"WALL","x":14,"y":31},{"type":"WATER","x":4,"y":32},{"type":"WATER","x":4,"y":31},{"type":"WATER","x":4,"y":30},{"type":"WATER","x":1,"y":29},{"type":"WATER","x":2,"y":29},{"type":"WATER","x":3,"y":29},{"type":"WATER","x":4,"y":29},{"type":"GOAL","x":16,"y":1},{"type":"WALL","x":18,"y":1},{"type":"WALL","x":18,"y":2},{"type":"WALL","x":14,"y":1},{"type":"WALL","x":14,"y":2},{"type":"WALL","x":14,"y":3},{"type":"WALL","x":18,"y":3},{"type":"WALL","x":17,"y":3},{"type":"WALL","x":15,"y":3},{"type":"SWITCH","x":17,"y":29},{"type":"FLOUR","x":32,"y":32},{"type":"FIRE","x":30,"y":30},{"type":"FIRE","x":31,"y":30},{"type":"FIRE","x":32,"y":30},{"type":"FIRE","x":30,"y":32},{"type":"WATER","x":32,"y":26},{"type":"WATER","x":31,"y":26},{"type":"WATER","x":30,"y":26},{"type":"WATER","x":30,"y":25},{"type":"WATER","x":29,"y":24},{"type":"WATER","x":30,"y":24},{"type":"WATER","x":28,"y":24},{"type":"WATER","x":27,"y":24},{"type":"WATER","x":26,"y":24},{"type":"WATER","x":26,"y":23},{"type":"WATER","x":26,"y":22},{"type":"WATER","x":26,"y":21},{"type":"WATER","x":26,"y":20},{"type":"WATER","x":27,"y":20},{"type":"WATER","x":28,"y":20},{"type":"WATER","x":29,"y":20},{"type":"WATER","x":30,"y":20},{"type":"WATER","x":31,"y":20},{"type":"FLOUR","x":29,"y":22},{"type":"THIEF","x":32,"y":20},{"type":"WALL","x":5,"y":7},{"type":"WALL","x":6,"y":7},{"type":"WALL","x":7,"y":7},{"type":"WALL","x":8,"y":7},{"type":"WALL","x":9,"y":7},{"type":"WALL","x":9,"y":8},{"type":"WALL","x":10,"y":8},{"type":"WALL","x":11,"y":8},{"type":"WALL","x":11,"y":9},{"type":"WALL","x":11,"y":10},{"type":"WALL","x":9,"y":10},{"type":"WALL","x":8,"y":10},{"type":"WALL","x":7,"y":9},{"type":"WALL","x":6,"y":9},{"type":"WALL","x":5,"y":9},{"type":"WALL","x":9,"y":11},{"type":"WALL","x":11,"y":11},{"type":"WALL","x":4,"y":7},{"type":"WALL","x":3,"y":7},{"type":"WALL","x":2,"y":7},{"type":"WALL","x":1,"y":7},{"type":"WALL","x":4,"y":9},{"type":"WALL","x":3,"y":9},{"type":"WALL","x":3,"y":10},{"type":"WALL","x":3,"y":11},{"type":"WALL","x":2,"y":11},{"type":"WALL","x":1,"y":11},{"type":"FLOUR","x":1,"y":9},{"type":"LOCK","x":3,"y":8},{"type":"SWITCH_DOOR","x":10,"y":11},{"type":"KEY","x":32,"y":24},{"type":"WATER_PICKUP","x":30,"y":1},{"type":"WALL","x":24,"y":1},{"type":"WALL","x":24,"y":2},{"type":"WALL","x":24,"y":3},{"type":"WALL","x":24,"y":4},{"type":"WALL","x":24,"y":5},{"type":"WALL","x":24,"y":6},{"type":"WALL","x":24,"y":7},{"type":"WALL","x":24,"y":8},{"type":"WALL","x":24,"y":9},{"type":"WALL","x":25,"y":9},{"type":"WALL","x":27,"y":9},{"type":"WALL","x":28,"y":9},{"type":"WALL","x":29,"y":9},{"type":"WALL","x":30,"y":9},{"type":"WALL","x":31,"y":9},{"type":"WALL","x":32,"y":9},{"type":"FIRE","x":1,"y":30},{"type":"FIRE","x":2,"y":30},{"type":"FIRE","x":3,"y":30},{"type":"FIRE","x":3,"y":31},{"type":"FIRE","x":3,"y":32},{"type":"FLOUR","x":26,"y":2},{"type":"WATER","x":2,"y":6},{"type":"WATER","x":1,"y":6},{"type":"WATER","x":3,"y":6},{"type":"WATER","x":4,"y":6},{"type":"WATER","x":5,"y":6},{"type":"WATER","x":6,"y":6},{"type":"WATER","x":7,"y":6},{"type":"WATER","x":8,"y":6},{"type":"WATER","x":9,"y":6},{"type":"WATER","x":9,"y":5},{"type":"WATER","x":9,"y":4},{"type":"WATER","x":9,"y":3},{"type":"WATER","x":9,"y":2},{"type":"WATER","x":9,"y":1},{"type":"WATER","x":8,"y":1},{"type":"WATER","x":8,"y":4},{"type":"WATER","x":8,"y":3},{"type":"WATER","x":8,"y":2},{"type":"WATER","x":8,"y":5},{"type":"WATER","x":1,"y":5},{"type":"WATER","x":2,"y":5},{"type":"WATER","x":3,"y":5},{"type":"WATER","x":4,"y":5},{"type":"WATER","x":5,"y":5},{"type":"WATER","x":6,"y":5},{"type":"WATER","x":7,"y":5},{"type":"TELEPORT","x":20,"y":1},{"type":"TELEPORT","x":26,"y":10},{"type":"FIRE","x":32,"y":12},{"type":"FIRE","x":31,"y":12},{"type":"FIRE","x":30,"y":12},{"type":"FIRE","x":29,"y":12},{"type":"FIRE","x":28,"y":12},{"type":"FIRE","x":28,"y":15},{"type":"FIRE","x":28,"y":16},{"type":"FIRE","x":29,"y":16},{"type":"FIRE","x":31,"y":16},{"type":"FIRE","x":32,"y":16},{"type":"FIRE","x":30,"y":16},{"type":"ICE","x":29,"y":14},{"type":"ICE","x":29,"y":13},{"type":"ICE","x":30,"y":13},{"type":"ICE","x":31,"y":13},{"type":"ICE","x":30,"y":15},{"type":"ICE","x":29,"y":15},{"type":"ICE","x":30,"y":14},{"type":"ICE","x":31,"y":15},{"type":"FIRE","x":32,"y":13},{"type":"FIRE","x":32,"y":15},{"type":"FIRE","x":32,"y":14},{"type":"SWITCH","x":28,"y":4},{"type":"FIRE_PICKUP","x":31,"y":14},{"type":"ICE","x":28,"y":13},{"type":"FIRE","x":28,"y":14},{"type":"ICE_PICKUP","x":3,"y":1},{"type":"FLOUR","x":1,"y":4},{"type":"WALL","x":1,"y":13},{"type":"WALL","x":2,"y":13},{"type":"WALL","x":3,"y":13},{"type":"WALL","x":4,"y":13},{"type":"WALL","x":1,"y":19},{"type":"WALL","x":2,"y":19},{"type":"WALL","x":3,"y":19},{"type":"WALL","x":4,"y":19},{"type":"WALL","x":5,"y":19},{"type":"WALL","x":6,"y":19},{"type":"WALL","x":5,"y":13},{"type":"WALL","x":6,"y":13},{"type":"WALL","x":7,"y":13},{"type":"WALL","x":7,"y":19},{"type":"FLOUR","x":1,"y":15},{"type":"WALL","x":8,"y":13},{"type":"WALL","x":8,"y":14},{"type":"WALL","x":8,"y":19},{"type":"WALL","x":8,"y":18},{"type":"WALL","x":8,"y":17},{"type":"WALL","x":8,"y":16},{"type":"SWITCH","x":1,"y":18},{"type":"FIRE","x":1,"y":17},{"type":"FIRE","x":2,"y":17},{"type":"FIRE","x":2,"y":18},{"type":"GROUND_ENEMY","x":4,"y":27},{"type":"GROUND_ENEMY","x":7,"y":23},{"type":"FLYING_ENEMY","x":2,"y":2},{"type":"WATER","x":11,"y":22},{"type":"WATER","x":12,"y":21},{"type":"WATER","x":13,"y":20},{"type":"WATER","x":14,"y":21},{"type":"WATER","x":15,"y":22},{"type":"WATER","x":13,"y":22},{"type":"WATER","x":17,"y":22},{"type":"WATER","x":18,"y":21},{"type":"WATER","x":19,"y":20},{"type":"WATER","x":20,"y":21},{"type":"WATER","x":21,"y":22},{"type":"WATER","x":19,"y":22},{"type":"WATER","x":14,"y":18},{"type":"WATER","x":16,"y":18},{"type":"WATER","x":18,"y":18},{"type":"WATER","x":15,"y":17},{"type":"WATER","x":17,"y":17},{"type":"WATER","x":16,"y":16},{"type":"FIRE","x":11,"y":17},{"type":"FIRE","x":12,"y":18},{"type":"FIRE","x":13,"y":19},{"type":"FIRE","x":13,"y":17},{"type":"FIRE","x":19,"y":19},{"type":"FIRE","x":20,"y":18},{"type":"FIRE","x":21,"y":17},{"type":"FIRE","x":19,"y":17},{"type":"FIRE","x":16,"y":24},{"type":"WATER","x":15,"y":24},{"type":"WATER","x":17,"y":24},{"type":"FLOUR","x":16,"y":20},{"type":"WALL","x":3,"y":22},{"type":"WALL","x":2,"y":24},{"type":"WALL","x":5,"y":24},{"type":"WALL","x":1,"y":25},{"type":"WALL","x":4,"y":22},{"type":"WALL","x":7,"y":25},{"type":"WALL","x":6,"y":24},{"type":"WALL","x":5,"y":26},{"type":"FLOUR","x":1,"y":24},{"type":"WALL","x":7,"y":2},{"type":"ROAMING_ENEMY","x":22,"y":2},{"type":"FLOUR","x":32,"y":10},{"type":"WALL","x":24,"y":13},{"type":"GROUND_ENEMY","x":32,"y":13}, ...specialTiles ]


};

export default level;