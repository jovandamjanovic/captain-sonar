export const TORPEDO_LAUNCH = "TORPEDO_LAUNCH";
export const MINE_DROP = "MINE_DROP";
export const DRONE_SCAN = "DRONE_SCAN";
export const SONAR_SCAN = "SONAR_SCAN";
export const SILENT_RUNNING = "SILENT_RUNNING";
export const SURFACE = "SURFACE";
export const MINE_TRIGGER = "MINE_TRIGGER";
export const MOVE_NORTH = "MOVE_NORTH";
export const MOVE_EAST = "MOVE_EAST";
export const MOVE_SOUTH = "MOVE_SOUTH";
export const MOVE_WEST = "MOVE_WEST";

export const moveWest = () => ({
    type: MOVE_WEST
});

export const moveSouth = () => ({
    type: MOVE_SOUTH
});

export const moveEast = () => ({
    type: MOVE_EAST
});

export const moveNorth = () => ({
    type: MOVE_NORTH
});

export const mineTrigger = (mineX, mineY) => ({
    type: MINE_TRIGGER,
    payload: {x: mineX, y: mineY}
});

export const surface = () => ({
    type: SURFACE
});

export const silentRunning = () => ({
    type: SILENT_RUNNING
});

export const sonarScan = (firstHint, secondHint) => ({
    type: SONAR_SCAN,
    payload: {firstHint, secondHint}
});

export const droneScan = (sector, hit) => ({
    type: DRONE_SCAN,
    payload: {sector, hit}
});

export const mineDrop = () => ({
    type: MINE_DROP
});

export const torpedoLaunch = (torpedoX, torpedoY) => ({
    type: TORPEDO_LAUNCH,
    payload: {x: torpedoX, y: torpedoY}
});